from django.urls import path
from . import views

urlpatterns = [
    # Rotas para Usuários
    path('usuario/list/', views.usuarioList, name='usuario-list'),
    path('usuario/detail/<int:pk>/', views.usuarioDetail, name='usuario-detail'),
    path('usuario/create', views.usuarioCreate, name='usuario-create'),
    path('usuario/update/<int:pk>', views.usuarioUpdate, name='usuario-update'),
    path('usuario/delete/<int:pk>', views.usuarioDelete, name='usuario-delete'),

    # Autenticação de Usuário
    path('usuario/login', views.usuarioLogin, name='usuario-login'),

    # Adicionar/Remover Receita dos Favoritos
    path('usuario/<int:pk>/add-receita', views.usuarioAddReceita, name='usuario-add-receita'),

    # Listar Receitas Favoritas de um Usuário
    path('usuario/<int:pk>/receitas-favoritas', views.receitasFavoritasUsuario, name='usuario-receitas-favoritas'),
]
