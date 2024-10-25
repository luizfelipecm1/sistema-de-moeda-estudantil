import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { InputText } from 'primereact/inputtext';
import { Button}  from 'primereact/button';

const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      await login(form); // Certifique-se de que `login` também esteja tipado corretamente
      // Redirecionar para a página correta (ex: dashboard) após login
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputText type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <InputText type="password" placeholder="Senha" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <Button label="Entrar" />
    </form>
  );
};

export default Login;