"""Tabela Users adicionada

Revision ID: 294c91e63a6e
Revises: 09c9f2041718
Create Date: 2024-11-28 16:31:38.317599

"""
from typing import Sequence, Union

import sqlmodel
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '294c91e63a6e'
down_revision: Union[str, None] = '09c9f2041718'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('aluno_usuario_id_fkey', 'aluno', type_='foreignkey')
    op.drop_column('aluno', 'usuario_id')
    op.add_column('user', sa.Column('aluno_id', sa.Uuid(), nullable=True))
    op.add_column('user', sa.Column('professor_id', sa.Uuid(), nullable=True))
    op.add_column('user', sa.Column('empresa_id', sa.Uuid(), nullable=True))
    op.create_foreign_key(None, 'user', 'aluno', ['aluno_id'], ['id'])
    op.create_foreign_key(None, 'user', 'empresa', ['empresa_id'], ['id'])
    op.create_foreign_key(None, 'user', 'professor', ['professor_id'], ['id'])
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'user', type_='foreignkey')
    op.drop_constraint(None, 'user', type_='foreignkey')
    op.drop_constraint(None, 'user', type_='foreignkey')
    op.drop_column('user', 'empresa_id')
    op.drop_column('user', 'professor_id')
    op.drop_column('user', 'aluno_id')
    op.add_column('aluno', sa.Column('usuario_id', sa.UUID(), autoincrement=False, nullable=False))
    op.create_foreign_key('aluno_usuario_id_fkey', 'aluno', 'user', ['usuario_id'], ['id'])
    # ### end Alembic commands ###
