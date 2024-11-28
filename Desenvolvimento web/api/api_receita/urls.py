from django.urls import path
from .views import site
from api_receita import views

app_name = "api_receita"

from django.views.generic import TemplateView

urlpatterns = [
    path('cadastro/', views.cadastro, name='cadastro'),
    path('login/', views.login, name='login'),
    path('receita/list/', views.receitaList, name='receita-list'),
    path('receita/detail/<str:pk>', views.receitaDetail, name='receita-detail'),
    path('receita/create/', views.receitaCreate, name='receita-create'),
    path('receita/update/<str:pk>', views.receitaUpdate, name='receita-update'),
    path('receita/delete/<str:pk>', views.receitaDelete, name='receita-delete'),
    path('usuario/list/', views.usuarioList, name='usuario-list'),
    path('usuario/detail/<str:pk>', views.usuarioDetail, name='usuario-detail'),
    path('usuario/create/', views.usuarioCreate, name='usuario-create'),
    path('usuario/update/<str:pk>', views.usuarioUpdate, name='usuario-update'),
    path('usuario/delete/<str:pk>', views.usuarioDelete, name='usuario-delete'),
    path('favorita/list/', views.favoritaList, name='favorita-list'),
    path('favorita/detail/<str:pk>', views.favoritaDetail, name='favorita-detail'),
    path('favorita/create/', views.favoritaCreate, name='favorita-create'),
    path('favorita/update/<str:pk>', views.favoritaUpdate, name='favorita-update'),
    path('favorita/delete/<str:pk>', views.favoritaDelete, name='favorita-delete'),
]