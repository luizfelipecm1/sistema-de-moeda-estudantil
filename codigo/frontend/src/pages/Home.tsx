// src/pages/Home.jsx
import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const Home = () => {
  return (
    <div className="p-d-flex p-jc-center p-ai-center p-flex-column" style={{ minHeight: '100vh', padding: '2rem' }}>
      {/* Cabeçalho */}
      <h1 className="p-text-center">Bem-vindo ao Sistema CoinMaster</h1>
      <p className="p-text-center" style={{ maxWidth: '600px', margin: '1rem auto', fontSize: '1.2rem' }}>
        Reconheça e valorize o esforço dos estudantes por meio de uma moeda virtual. Professores, alunos e empresas parceiras
        trabalham juntos para transformar dedicação em benefícios reais.
      </p>

      {/* Seções de ação */}
      <div className="p-d-flex p-flex-column p-md-flex-row p-jc-center p-ai-center" style={{ gap: '2rem', marginTop: '2rem' }}>
        {/* Card para Alunos */}
        <Card
          title="Sou Aluno"
          style={{ width: '300px', textAlign: 'center' }}
          footer={
            <Button
              label="Cadastre-se"
              icon="pi pi-user-plus"
              className="p-button-primary"
              onClick={() => (window.location.href = '/register')}
            />
          }
        >
          <p>Cadastre-se para começar a receber moedas de mérito e trocá-las por vantagens exclusivas.</p>
        </Card>

        {/* Card para Professores */}
        <Card
          title="Sou Professor"
          style={{ width: '300px', textAlign: 'center' }}
          footer={
            <Button
              label="Acesse"
              icon="pi pi-sign-in"
              className="p-button-success"
              onClick={() => (window.location.href = '/login')}
            />
          }
        >
          <p>Distribua moedas para premiar o desempenho dos alunos e acompanhe suas transações.</p>
        </Card>

        {/* Card para Empresas Parceiras */}
        <Card
          title="Sou Parceiro"
          style={{ width: '300px', textAlign: 'center' }}
          footer={
            <Button
              label="Acesse"
              icon="pi pi-sign-in"
              className="p-button-warning"
              onClick={() => (window.location.href = '/login')}
            />
          }
        >
          <p>Ofereça vantagens e descontos, e participe desse sistema de reconhecimento de mérito.</p>
        </Card>
      </div>

      {/* Rodapé */}
      <footer className="p-text-center" style={{ marginTop: '3rem', color: '#888' }}>
        &copy; {new Date().getFullYear()} Sistema de Sistema CoinMaster. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Home;
