# Generated by Django 5.1.4 on 2025-01-26 13:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_receita', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='receita',
            name='url_imagem',
            field=models.TextField(default=None),
            preserve_default=False,
        ),
    ]
