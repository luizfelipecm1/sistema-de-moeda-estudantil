// src/pages/Register.jsx
import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { DropdownChangeEvent } from 'primereact/dropdown';

const Register = () => {
  const [form, setForm] = useState({
    userType: null,
    name: '',
    email: '',
    cpf: '',
    institution: '',
    course: '',
    password: '',
    confirmPassword: '',
  });

  const userTypes = [
    { label: 'Aluno', value: 'student' },
    { label: 'Professor', value: 'teacher' },
    { label: 'Empresa Parceira', value: 'partner' },
  ];

  const institutions = [
    { label: 'Universidade Federal', value: 'uf' },
    { label: 'Universidade Estadual', value: 'ue' },
    { label: 'Instituição Particular', value: 'private' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  

  const handleDropdownChange = (e: DropdownChangeEvent) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Validação básica
    if (form.password !== form.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }
  
    console.log('Dados enviados:', form);
    alert('Cadastro realizado com sucesso!');
  };
  
  return (
    <div className="p-d-flex p-jc-center p-ai-center" style={{ minHeight: '100vh', padding: '2rem' }}>
      <Card title="Cadastro" style={{ width: '400px' }}>
        <form onSubmit={handleSubmit} className="p-fluid">
          {/* Tipo de Usuário */}
          <div className="p-field">
            <label htmlFor="userType">Tipo de Usuário</label>
            <Dropdown
              id="userType"
              name="userType"
              value={form.userType}
              options={userTypes}
              onChange={handleDropdownChange}
              placeholder="Selecione"
            />
          </div>

          {/* Nome */}
          <div className="p-field">
            <label htmlFor="name">Nome</label>
            <InputText id="name" name="name" value={form.name} onChange={handleInputChange} required />
          </div>

          {/* Email */}
          <div className="p-field">
            <label htmlFor="email">Email</label>
            <InputText id="email" name="email" type="email" value={form.email} onChange={handleInputChange} required />
          </div>

          {/* CPF */}
          <div className="p-field">
            <label htmlFor="cpf">CPF</label>
            <InputText id="cpf" name="cpf" value={form.cpf} onChange={handleInputChange} required />
          </div>

          {/* Campos específicos para Aluno */}
          {form.userType === 'student' && (
            <>
              <div className="p-field">
                <label htmlFor="institution">Instituição de Ensino</label>
                <Dropdown
                  id="institution"
                  name="institution"
                  value={form.institution}
                  options={institutions}
                  onChange={handleDropdownChange}
                  placeholder="Selecione"
                />
              </div>
              <div className="p-field">
                <label htmlFor="course">Curso</label>
                <InputText id="course" name="course" value={form.course} onChange={handleInputChange} />
              </div>
            </>
          )}

          {/* Senha */}
          <div className="p-field">
                      <label htmlFor="password">Senha</label>
                      <Password
                          id="password"
                          name="password"
                          promptLabel="A senha deve ter pelo menos 6 caracteres"
                          weakLabel="Fraca"
                          mediumLabel="Média"
                          strongLabel="Forte"
                          value={form.password}
                          onChange={handleInputChange}
                          toggleMask
                          feedback={false}
                          required
                      />
          </div>

          {/* Confirmar Senha */}
          <div className="p-field">
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <Password
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleInputChange}
              toggleMask
              feedback={false}
              required
            />
          </div>

          {/* Botão de Cadastro */}
          <Button label="Cadastrar" icon="pi pi-check" className="p-button-success" type="submit" />
        </form>
      </Card>
    </div>
  );
};

export default Register;
