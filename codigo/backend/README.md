# Sistema de Moeda Estudantil

## Pre-requisitos

- [Poetry](https://python-poetry.org/docs/#installing-with-the-official-installer)
- [Docker](https://docs.docker.com/engine/install/)

## Rodando localmente

1. Instalar as dependencias.

   - Para instalar todas as depend^encias:

   ```bash
   poetry install
   ```

2. Ativar o ambiente virtual

   ```bash
   poetry shell
   ```

3. Rodar os containers localmente

   - O arquivo [compose.yaml](compose.yaml) possui todos os containers necess'arios para o projeto.

   - Para inicializar os containers:

   ```bash
   docker compose up -d
   ```

   - Para finalizar os containers:

   ```bash
   docker compose down
   ```

4. Rodar as migrations de banco de dados:

   ```bash
     python -m alembic upgrade head
   ```

   Este comando vai automaticamente criar/alterar todas as tabelas no banco de dados.

## Atualizando as tabelas

FastAPI utiliza (sqlalchemy)[https://fastapi.tiangolo.com/tutorial/sql-databases/] por padrao para trabalhar com bancos de dados SQL.

As tabelas serao representadas por classes no m'odulo [app/models](app/models).

Ao criar/alterar as tabelas, o alembic se responsabilizara de atualizar as revisoes.

```bash
python -m alembic revision -m "your revision message here"
```

Leia [aqui](https://alembic.sqlalchemy.org/en/latest/tutorial.html) para mais explicacoes.
