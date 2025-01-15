from rest_framework import serializers
from app_receita.models import Receita
from app_usuario.models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    receitas_favoritas = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Receita.objects.all()
    )

    class Meta:
        model = Usuario
        fields = ["id", "nome", "email", "senha", "receitas_favoritas"]
        extra_kwargs = {"senha": {"write_only": True}}
