from django.db import models

# Create your models here.
class Receita(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.TextField()
    url_imagem = models.TextField()
    usuario = models.ForeignKey('app_usuario.Usuario', on_delete=models.CASCADE, related_name="receitas")

    def __str__(self):
        return self.titulo