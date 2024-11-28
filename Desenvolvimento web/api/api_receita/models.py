from django.db import models

class Usuario(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    senha = models.CharField(max_length=100)

    def __str__(self):
        return self.nome


class Receita(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.TextField()
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name="receitas")

    def __str__(self):
        return self.titulo


class Favorita(models.Model):
    receita = models.ForeignKey(Receita, on_delete=models.CASCADE, related_name="favoritos")
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name="favoritos")

    class Meta:
        unique_together = ('receita', 'usuario')  # Garante que a combinação seja única

    def __str__(self):
        return f"Receita: {self.receita.titulo} - Usuário: {self.usuario.nome}"
