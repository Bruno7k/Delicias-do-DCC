# Generated by Django 5.1.4 on 2025-01-27 00:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_receita', '0003_receita_url_imagem'),
    ]

    operations = [
        migrations.AddField(
            model_name='receita',
            name='ingredientes',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='receita',
            name='instucoes',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='receita',
            name='modo_preparo',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]
