from fastapi import FastAPI, HTTPException
from app import schemas, models, crud
from app.core.deps import SessionDep
from uuid import UUID  # Importando UUID da biblioteca uuid
from sqlmodel import select

app = FastAPI()

# Rotas para Alunos
@app.post("/aluno", response_model=schemas.AlunoRead)
async def create_aluno(
    session: SessionDep, aluno_in: schemas.AlunoCreate
) -> models.Aluno:
    aluno = crud.create_aluno(session, aluno_in)
    return aluno


@app.get("/aluno", response_model=list[schemas.AlunoRead])
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
    users = crud.read_users(session)
    return users


@app.get("/user/{user_id}", response_model=schemas.UserRead)
async def read_user(user_id: UUID, session: SessionDep) -> models.User:
    user = crud.get_user_by_id(session, user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user


# Rotas para Professores
@app.post("/professor", response_model=schemas.ProfessorRead)
async def create_professor(
    session: SessionDep, professor_in: schemas.ProfessorCreate
) -> models.Professor:
    professor = crud.create_professor(session, professor_in)
    return professor


@app.get("/professor", response_model=list[schemas.ProfessorRead])
async def read_professors(session: SessionDep) -> list[models.Professor]:
    professors = crud.read_professors(session)
    return professors


@app.get("/professor/{professor_id}", response_model=schemas.ProfessorRead)
async def read_professor(professor_id: UUID, session: SessionDep) -> models.Professor:
    professor = crud.get_professor_by_id(session, professor_id)
    if professor is None:
        raise HTTPException(status_code=404, detail="Professor not found")
    return professor


# Rotas para Empresas
@app.post("/empresa", response_model=schemas.EmpresaRead)
async def create_empresa(
    session: SessionDep, empresa_in: schemas.EmpresaCreate
) -> models.Empresa:
    empresa = crud.create_empresa(session, empresa_in)
    return empresa


@app.get("/empresa", response_model=list[schemas.EmpresaRead])
async def read_empresas(session: SessionDep) -> list[models.Empresa]:
    empresas = crud.read_empresas(session)
    return empresas


@app.get("/empresa/{empresa_id}", response_model=schemas.EmpresaRead)
async def read_empresa(empresa_id: UUID, session: SessionDep) -> models.Empresa:
    empresa = crud.get_empresa_by_id(session, empresa_id)
    if empresa is None:
        raise HTTPException(status_code=404, detail="Empresa not found")
    return empresa
