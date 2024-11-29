// src/services/authService.ts
import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Ajuste conforme a URL do seu backend

// Função para login do usuário
export const login = async (credentials: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${API_URL}/user`, credentials); // A rota de login pode ser ajustada conforme a sua implementação
    return response.data; // Retorna o usuário logado
  } catch (error) {
    console.error('Erro de login:', error);
    throw new Error('Credenciais inválidas ou erro ao fazer login');
  }
};

// Função para obter todos os usuários
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/user`);
    return response.data; // Retorna a lista de usuários
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw new Error('Erro ao buscar usuários');
  }
};

export const logout = () => {
  console.log('Usuário deslogado');
};
