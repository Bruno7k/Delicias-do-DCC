from rest_framework import serializers
from api_receita.models import Receita, Usuario, Favorita

class ReceitaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Receita
        fields = ["id", "titulo", "descricao", "usuario"]

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ["id", "nome", "email", "senha"]

class FavoritaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorita
        fields = ["id", "receita", "usuario"]
        