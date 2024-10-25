import { useState } from 'react';
import { cadastrarAluno } from '../services/alunoService';
import { InputText } from 'primereact/inputtext';
import { Button}  from 'primereact/button';

const CadastroAluno = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    cpf: '',
    rg: '',
    endereco: '',
    instituicao: '',
    curso: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      await cadastrarAluno(form); // Certifique-se de que `login` também esteja tipado corretamente
      // Redirecionar para a página correta (ex: dashboard) após login
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputText type="text" placeholder="Nome" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
      <InputText type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      {/* Adicione mais campos */}
      <Button label="Cadastrar" />
    </form>
  );
};

export default CadastroAluno;