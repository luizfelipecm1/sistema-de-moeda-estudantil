from sqlmodel import SQLModel, create_engine

from app.core.config import settings


engine = create_engine(str(settings.SQLALCHEMY_DATABASE_URI))

def create_tables():
    SQLModel.metadata.create_all(engine)

# make sure all SQLModel models are imported (app.models) before initializing DB
# otherwise, SQLModel might fail to initialize relationships properly
# for more details: https://github.com/fastapi/full-stack-fastapi-template/issues/28
