from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Usuario
from app_receita.models import Receita
from app_receita.serializers import ReceitaSerializer
from .serializers import UsuarioSerializer
from django.shortcuts import get_object_or_404
from django.contrib.auth.hashers import check_password
from django.contrib.auth.hashers import make_password
from django.http import HttpResponse


# Templates



#API

# Listar todos os usuários
@api_view(['GET'])
def usuarioList(request):
    usuarios = Usuario.objects.all()
    serializer = UsuarioSerializer(usuarios, many=True)
    return Response(serializer.data)

# Detalhes de um usuário específico
@api_view(['GET'])
def usuarioDetail(request, pk):
    usuario = get_object_or_404(Usuario, id=pk)
    serializer = UsuarioSerializer(usuario, many=False)
    return Response(serializer.data)

# Criar um novo usuário
@api_view(['POST'])
def usuarioCreate(request):
    email = request.data.get('email')

    # Verificar se todos os campos foram fornecidos
    if not email or not request.data.get('senha') or not request.data.get('nome'):
        return Response("Todos os campos são obrigatórios", status=status.HTTP_400_BAD_REQUEST)

    # Verificar se o email já está cadastrado
    if Usuario.objects.filter(email=email).exists():
        return HttpResponse("Email já cadastrado")
    
    # Criar uma cópia mutável de request.data para modificar
    data = request.data.copy()

    #Hash da senha
    senha = data.get('senha')
    if senha:
        hashed_senha = make_password(senha)
        data['senha'] = hashed_senha  # Atualiza a senha com o hash

    #Usar o serializador com a cópia de dados modificada
    serializer = UsuarioSerializer(data=data)

    if serializer.is_valid():
        serializer.save()
        if request.content_type == 'application/json':
            return Response(
                {"message": "Usuário criado com sucesso!", "data": serializer.data},
                status=status.HTTP_201_CREATED
            )
        return render(request, 'login.html')

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Atualizar um usuário existente
@api_view(['PUT'])
def usuarioUpdate(request, pk):
    usuario = get_object_or_404(Usuario, id=pk)
    serializer = UsuarioSerializer(instance=usuario, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Deletar um usuário
@api_view(['DELETE'])
def usuarioDelete(request, pk):
    usuario = get_object_or_404(Usuario, id=pk)
    usuario.delete()
    return Response({'message': 'Usuário deletado com sucesso'}, status=status.HTTP_204_NO_CONTENT)

# Autenticar um usuário
@api_view(['POST'])
def usuarioLogin(request):
    email = request.data.get('email')
    senha = request.data.get('senha')

    #Verificar se o email e a senha foram fornecidos
    if not email or not senha:
        return Response("Email e senha são obrigatórios", status=status.HTTP_400_BAD_REQUEST)

    # Verificar se o email existe
    if not Usuario.objects.filter(email=email).exists():
        raise NotFound("Email não cadastrado")

    # Verificar se a senha está correta
    usuario = Usuario.objects.get(email=email)
    if not check_password(senha, usuario.senha):
        return Response("Senha Incorreta", status=status.HTTP_400_BAD_REQUEST)

    serializer = UsuarioSerializer(usuario, many=False)
    return Response(serializer.data)

# Adicionar uma receita a um usuário(aos favoritos)
# Se a receita já estiver nos favoritos, remove
@api_view(['POST'])
def usuarioAddReceita(request, pk):
    usuario = get_object_or_404(Usuario, id=pk)
    receita_id = request.data.get('receita_id')

    # Verificar se a receita existe
    if not Receita.objects.filter(id=receita_id).exists():
        raise NotFound("Receita não encontrada")

    # Verificar se a receita já está nos favoritos
    if usuario.receitas_favoritas.filter(id=receita_id).exists():
        usuario.receitas_favoritas.remove(receita_id)
        return Response({'message': 'Receita removida dos favoritos'}, status=status.HTTP_200_OK)

    usuario.receitas_favoritas.add(receita_id)
    return Response({'message': 'Receita adicionada aos favoritos'}, status=status.HTTP_200_OK)

# Lista as receitas favoritas de um usuário
@api_view(['GET'])
def receitasFavoritasUsuario(request, pk):
    usuario = get_object_or_404(Usuario, id=pk)
    receitas = usuario.receitas_favoritas.all()
    serializer = ReceitaSerializer(receitas, many=True)
    return Response(serializer.data)

