import React, { createContext, useContext, useState, ReactNode } from 'react';
import { login as loginService, logout as logoutService } from '../services/authService';

// Definindo a estrutura de usuário
interface User {
  id: string;
  email: string;
  nome: string;
  // Adicione outros campos do usuário conforme necessário
}

// Tipagem para o contexto de autenticação
interface AuthContextType {
  user: User | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

// Criação do contexto com tipagem
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Tipagem para as props do provedor
interface AuthProviderProps {
  children: ReactNode;
}

// O provedor do AuthContext com a tipagem correta
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (credentials: { email: string; password: string }) => {
    const userData = await loginService(credentials);
    setUser(userData.user); // Atualiza o estado com os dados do usuário logado
  };

  const logout = () => {
    logoutService();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar o contexto de autenticação
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
