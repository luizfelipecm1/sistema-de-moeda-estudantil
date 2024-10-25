import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/', // Coloque a URL do FastAPI aqui
});

// Adicione o token em todas as requisições (caso haja login)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;