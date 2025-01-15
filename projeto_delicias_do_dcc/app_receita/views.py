from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Receita
from .serializers import ReceitaSerializer
from django.shortcuts import get_object_or_404

# Listar todas as receitas
@api_view(['GET'])
def receitaList(request):
    receitas = Receita.objects.all()
    serializer = ReceitaSerializer(receitas, many=True)
    return Response(serializer.data)

# Detalhes de uma receita específica
@api_view(['GET'])
def receitaDetail(request, pk):
    receita = get_object_or_404(Receita, id=pk)  # Usando get_object_or_404 para evitar exceção
    serializer = ReceitaSerializer(receita)
    return Response(serializer.data)

# Criar uma nova receita
@api_view(['POST'])
def receitaCreate(request):
    serializer = ReceitaSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)  # Retorna 201 quando criado com sucesso
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # Retorna erro 400 se os dados forem inválidos

# Atualizar uma receita existente
@api_view(['PUT'])
def receitaUpdate(request, pk):
    receita = get_object_or_404(Receita, id=pk)  # Usando get_object_or_404
    serializer = ReceitaSerializer(instance=receita, data=request.data, partial=True)  # partial=True para atualizações parciais

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)  # Retorna 200 OK
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # Retorna erro 400 se os dados forem inválidos

# Deletar uma receita
@api_view(['DELETE'])
def receitaDelete(request, pk):
    receita = get_object_or_404(Receita, id=pk)  # Usando get_object_or_404
    receita.delete()
    return Response({'message': 'Item deletado com sucesso'}, status=status.HTTP_204_NO_CONTENT)  # Retorna 204 No Content após a exclusão
