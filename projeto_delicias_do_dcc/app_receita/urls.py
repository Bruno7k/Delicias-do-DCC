from django.urls import path
from . import views

urlpatterns = [
   
    # Rotas para receitas
    path('receita/list', views.receitaList, name='receita-list'),
    path('receita/detail/<int:pk>', views.receitaDetail, name='receita-detail'),
    path('receita/create', views.receitaCreate, name='receita-create'),
    path('receita/update/<int:pk>', views.receitaUpdate, name='receita-update'),
    path('receita/delete/<int:pk>', views.receitaDelete, name='receita-delete'),
    path('receita/random', views.receitaRandom, name='receita-random'),
]
