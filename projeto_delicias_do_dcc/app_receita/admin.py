from django.contrib import admin
from .models import Receita

class ReceitaAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'descricao', 'usuario')  
    list_filter = ('usuario',)  
    search_fields = ('titulo', 'descricao')  

admin.site.register(Receita, ReceitaAdmin)
