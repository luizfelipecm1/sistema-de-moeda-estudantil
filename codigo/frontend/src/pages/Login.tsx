import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate para redirecionar

const Login = () => {
  const { login } = useAuth(); // Obtendo a função login do contexto
  const [form, setForm] = useState({ email: '', password: '' });
  useNavigate();
// Hook para navegação

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await login(form); // Chama a função de login do contexto
      // O redirecionamento para o dashboard será feito dentro da função login, após sucesso
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
      <div
          className="p-d-flex p-jc-center p-ai-center"
          style={{
            minHeight: '100vh',
            padding: '2rem',
            backgroundColor: '#f4f7fc',
          }}
      >
        <Card title="Login" style={{ width: '400px' }}>
          <form onSubmit={handleSubmit} className="p-fluid">
            <div className="p-field">
              <label htmlFor="email">Email</label>
              <InputText
                  id="email"
                  type="email"
                  placeholder="Digite seu email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
              />
            </div>

            <div className="p-field">
              <label htmlFor="password">Senha</label>
              <Password
                  id="password"
                  placeholder="Digite sua senha"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  toggleMask
                  required
              />
            </div>

            <Button label="Entrar" icon="pi pi-sign-in" className="p-button-success" type="submit" />
          </form>
        </Card>
      </div>
  );
};

export default Login;
