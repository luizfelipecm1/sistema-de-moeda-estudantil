"""Tabela Users adicionada

Revision ID: 09c9f2041718
Revises: 
Create Date: 2024-11-28 16:23:33.475447

"""
from typing import Sequence, Union

import sqlmodel
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '09c9f2041718'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # Criação da tabela 'user' primeiro
    op.create_table('user',
        sa.Column('id', sa.Uuid(), nullable=False),
        sa.Column('username', sa.String(), nullable=False),
        sa.Column('password_hash', sa.String(), nullable=False),
        sa.Column('email', sa.String(), nullable=True),
        sa.Column('tipo_usuario', sa.String(), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_user_email'), 'user', ['email'], unique=True)
    op.create_index(op.f('ix_user_tipo_usuario'), 'user', ['tipo_usuario'], unique=False)
    op.create_index(op.f('ix_user_username'), 'user', ['username'], unique=True)

    # Criação da tabela 'aluno'
    op.create_table('aluno',
        sa.Column('id', sa.Uuid(), nullable=False),
        sa.Column('nome', sa.String(), nullable=False),
        sa.Column('email', sa.String(), nullable=False),
        sa.Column('cpf', sa.String(), nullable=False),
        sa.Column('rg', sa.String(), nullable=False),
        sa.Column('endereco', sa.String(), nullable=False),
        sa.Column('instituicao_ensino', sa.String(), nullable=True),
        sa.Column('curso', sa.String(), nullable=True),
        sa.Column('usuario_id', sa.Uuid(), nullable=False),
        sa.ForeignKeyConstraint(['usuario_id'], ['user.id']),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_aluno_cpf'), 'aluno', ['cpf'], unique=False)
    op.create_index(op.f('ix_aluno_email'), 'aluno', ['email'], unique=False)
    op.create_index(op.f('ix_aluno_endereco'), 'aluno', ['endereco'], unique=False)
    op.create_index(op.f('ix_aluno_nome'), 'aluno', ['nome'], unique=False)
    op.create_index(op.f('ix_aluno_rg'), 'aluno', ['rg'], unique=False)

    # Criação da tabela 'empresa'
    op.create_table('empresa',
        sa.Column('id', sa.Uuid(), nullable=False),
        sa.Column('nome', sa.String(), nullable=False),
        sa.Column('cnpj', sa.String(), nullable=False),
        sa.Column('endereco', sa.String(), nullable=True),
        sa.Column('usuario_id', sa.Uuid(), nullable=False),
        sa.ForeignKeyConstraint(['usuario_id'], ['user.id']),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('cnpj')
    )
    op.create_index(op.f('ix_empresa_nome'), 'empresa', ['nome'], unique=False)

    # Criação da tabela 'professor'
    op.create_table('professor',
        sa.Column('id', sa.Uuid(), nullable=False),
        sa.Column('nome', sa.String(), nullable=False),
        sa.Column('cpf', sa.String(), nullable=False),
        sa.Column('instituicao_ensino', sa.String(), nullable=True),
        sa.Column('departamento', sa.String(), nullable=True),
        sa.Column('usuario_id', sa.Uuid(), nullable=False),
        sa.ForeignKeyConstraint(['usuario_id'], ['user.id']),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('cpf')
    )
    op.create_index(op.f('ix_professor_nome'), 'professor', ['nome'], unique=False)
