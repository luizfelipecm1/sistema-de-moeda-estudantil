from fastapi import FastAPI, HTTPException
from app import schemas, models, crud
from app.core.deps import SessionDep
from uuid import UUID  # Importando UUID da biblioteca uuid

app = FastAPI()

# Rotas para Alunos
@app.post("/aluno")
async def create_aluno(
    session: SessionDep, aluno_in: schemas.AlunoCreate
) -> models.Aluno:
    aluno = crud.create_aluno(session, aluno_in)
    return aluno


@app.get("/aluno")
async def read_alunos(session: SessionDep) -> list[models.Aluno]:
    alunos = crud.read_alunos(session)
    return alunos


# Rotas para Users (Login)
@app.post("/user", response_model=schemas.UserRead)
async def create_user(
    session: SessionDep, user_in: schemas.UserCreate
) -> models.User:
    user = crud.create_user(session, user_in)
    return user


@app.get("/user", response_model=list[schemas.UserRead])
async def read_users(session: SessionDep) -> list[models.User]:
    users = crud.read_users(session)  # Agora a função existe no crud
    return users


@app.get("/user/{user_id}", response_model=schemas.UserRead)
async def read_user(user_id: UUID, session: SessionDep) -> models.User:
    user = crud.get_user_by_id(session, user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user
