from django.contrib import admin
from .models import Receita, Usuario, Favorita

class ReceitaAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'descricao', 'usuario')

class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('nome', 'email')

class FavoritaAdmin(admin.ModelAdmin):
    list_display = ('receita', 'usuario')

admin.site.register(Receita, ReceitaAdmin)
admin.site.register(Usuario, UsuarioAdmin)
admin.site.register(Favorita, FavoritaAdmin)
