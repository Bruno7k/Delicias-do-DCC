from django.db import models

# Create your models here.

class Usuario(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    senha = models.CharField(max_length=100)
    receitas_favoritas = models.ManyToManyField('app_receita.Receita', related_name='usuarios_favoritaram', blank=True)

    def __str__(self):
        return self.nome