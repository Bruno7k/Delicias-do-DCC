from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from api_receita.serializers import ReceitaSerializer, UsuarioSerializer, FavoritaSerializer
from api_receita.models import Receita, Favorita, Usuario
from django.shortcuts import render 
from django.http import HttpResponse
from django.contrib.auth.hashers import check_password
from django.contrib.auth.hashers import make_password

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List': '/receita/list/',
        'Detail': '/receita/detail/<str:pk>/',
        'Create': '/receita/create/',
        'Update': '/receita/update/<str:pk>/',
        'Delete': '/receita/delete/<str:pk>/',
    }
    return Response(api_urls)

# Rotas Receitas
@api_view(['GET'])
def receitaList(request):
    receita = Receita.objects.all()
    serializer = ReceitaSerializer(receita, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def receitaDetail(request, pk):
    receita = Receita.objects.get(id=pk)
    serializer = ReceitaSerializer(receita, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def receitaCreate(request):
    serializer = ReceitaSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['PATCH'])
def receitaUpdate(request, pk):
    receita = Receita.objects.get(id=pk)
    serializer = ReceitaSerializer(instance=receita, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def receitaDelete(request, pk):
    receita = Receita.objects.get(id=pk)
    receita.delete()
    return Response('Item deletado')

# Rotas Usuario


@api_view(['GET', 'POST'])
def cadastro(request):
    if request.method == 'GET':
        return render(request, 'cadastro.html')
    
    email = request.data.get('email')
    
    # Verificar se o email já está cadastrado
    if Usuario.objects.filter(email=email).exists():
        return HttpResponse("Email já cadastrado")
    
    # Criar uma cópia mutável de request.data para modificar
    data = request.data.copy()


    '''
    com criptografia
    Hash da senha
    senha = data.get('senha')
    if senha:
        hashed_senha = make_password(senha)
        data['senha'] = hashed_senha  # Atualiza a senha com o hash

    Usar o serializador com a cópia de dados modificada
    serializer = UsuarioSerializer(data=data)
    '''
    # Sem criptografia
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



@api_view(['GET', 'POST'])
def login(request):
    if request.method == 'GET':
        return render(request, 'login.html')

    email = request.data.get('email')
    senha = request.data.get('senha')

    try:
        usuario = Usuario.objects.get(email=email)
    except Usuario.DoesNotExist:
        return HttpResponse('Nome ou senha incorretos')

    """
    com criptografia
    if check_password(senha, usuario.senha):
    """

    # sem criptografia
    if usuario.senha == senha:
        return HttpResponse(f'Autenticado com sucesso: {usuario.email}')
    else:
        return HttpResponse('Nome ou senha incorretos')

@api_view(['GET'])
def usuarioList(request):
    usuario = Usuario.objects.all()
    serializer = UsuarioSerializer(usuario, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def usuarioDetail(request, pk):
    usuario = Usuario.objects.get(id=pk)
    serializer = UsuarioSerializer(usuario, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def usuarioCreate(request):
    serializer = UsuarioSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['PATCH'])
def usuarioUpdate(request, pk):
    usuario = Usuario.objects.get(id=pk)
    serializer = UsuarioSerializer(instance=usuario, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def usuarioDelete(request, pk):
    usuario = Usuario.objects.get(id=pk)
    usuario.delete()
    return Response('Usuario deletado')

# Rotas Favoritos

@api_view(['GET'])
def favoritaList(request):
    favorita = Favorita.objects.all()
    serializer = FavoritaSerializer(favorita, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def favoritaDetail(request, pk):
    favorita = Favorita.objects.get(id=pk)
    serializer = FavoritaSerializer(favorita, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def favoritaCreate(request):
    serializer = FavoritaSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['PATCH'])
def favoritaUpdate(request, pk):
    favorita = Favorita.objects.get(id=pk)
    serializer = FavoritaSerializer(instance=favorita, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def favoritaDelete(request, pk):
    favorita = Favorita.objects.get(id=pk)
    favorita.delete()
    return Response('Favorito deletado')
        