# Generated by Django 5.1.4 on 2025-01-15 04:18

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('app_receita', '0001_initial'),
        ('app_usuario', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='receita',
            name='usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='receitas', to='app_usuario.usuario'),
        ),
    ]
