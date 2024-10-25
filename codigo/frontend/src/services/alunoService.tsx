import api from './api';

export const cadastrarAluno = async (alunoData) => {
  const response = await api.post('/alunos', alunoData);
  return response.data;
};