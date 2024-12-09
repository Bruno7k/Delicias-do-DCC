# Delicias do DCC

Sistema feito para o trabalho de desenvolvimento WEB

## Tecnologias utilizadas

- Django 5
- Python 3.X.X
- SqLite3

## Instalação

Para Mac Os:

```sh
python3 -m venv venv

source venv/bin/activate

pip install -r requirements.txt

python manage.py makemigrations

python manage.py migrate

python manage.py createsuperuser

python manage.py runserver

deactivate
```


## Estrutura de diretórios

```sh
.
|-- core/ (back-end geral da aplicação (autenticação, página inicial, ...) )
|   |-- *.py
|   |-- templates/ (front-end geral da aplicação (autenticação, página inicial, ...) )
|
|-- corrector (back-end que envolve corretor)
|   |-- *.py
|   |-- templates/ (front-end que envolve corretor)
|
|-- docs/ (documentação geral do projeto)
|
|-- media/ (armazenamento de fotos por upload)
|
|-- redacao/ (configuração geral do projeto)
|   |-- static/ (arquivos static (css, js, ...) )
|   |-- settings.py
|   |-- urls.py (urls de todo projeto)
|   |-- wsgi.py (arquivo utilizado para deploy final com servidor http)
|
|-- student/ (back-end que envolve alunos)
    |-- *.py
    |-- templates/ (front-end que envolve alunos)
```

## Bibliotecas externas

- Nada ainda

