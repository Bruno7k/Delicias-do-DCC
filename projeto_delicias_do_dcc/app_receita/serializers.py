from rest_framework import serializers
from app_receita.models import Receita
from app_usuario.models import Usuario

class ReceitaSerializer(serializers.ModelSerializer):
    usuarios_favoritaram = serializers.PrimaryKeyRelatedField(
        many=True, read_only=True
    ) 
    class Meta:
        model = Receita
        fields = ["id", "titulo", "descricao", "url_imagem","ingredientes","modo_preparo","instucoes", "usuario", "usuarios_favoritaram"]
