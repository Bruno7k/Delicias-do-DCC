from django.contrib import admin
from .models import Usuario

class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('nome', 'email')
    search_fields = ('nome', 'email')
    filter_horizontal = ('receitas_favoritas',)

admin.site.register(Usuario, UsuarioAdmin)
