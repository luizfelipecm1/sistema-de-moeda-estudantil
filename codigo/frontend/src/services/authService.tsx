import api from './api';

export const login = async (credentials) => {
  const response = await api.post('/login', credentials);
  localStorage.setItem('token', response.data.token); // Salva o token no localStorage
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};