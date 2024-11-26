import React, { useState, useEffect, useRef } from 'react';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button'; // Importação corrigida
import { useNavigate } from 'react-router-dom';

// Definindo a interface Transaction e Reward
interface Transaction {
  date: string;
  description: string;
  type: 'crédito' | 'débito';
}

interface Reward {
  name: string;
  cost: number;
}

// Definindo a interface para o estado completo
interface StudentData {
  name: string;
  email: string;
  balance: number;
  transactions: Transaction[];
  rewards: Reward[];
}

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState<StudentData>({
    name: 'João Silva',
    email: 'joao.silva@example.com',
    balance: 500,
    transactions: [],
    rewards: [
      { name: 'Desconto em Restaurante', cost: 100 },
      { name: 'Desconto de Mensalidade', cost: 200 },
      { name: 'Material Escolar', cost: 50 }
    ]
  });

  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);
  
  // Definindo o tipo correto da referência toast
  const toast = useRef<Toast>(null); // Agora a referência sabe que é do tipo 'Toast'
  
  const navigate = useNavigate(); // Para navegação

  // Simulando uma API de transações
  useEffect(() => {
    setStudentData((prevData) => ({
      ...prevData,
      transactions: [
        { date: '2024-11-15', description: 'Recebimento de 100 moedas', type: 'crédito' },
        { date: '2024-11-20', description: 'Troca por desconto de restaurante', type: 'débito' },
        { date: '2024-11-25', description: 'Recebimento de 150 moedas', type: 'crédito' }
      ]
    }));
  }, []);

  // Função para resgatar uma recompensa
  const handleRedeemReward = (reward: Reward) => {
    if (studentData.balance < reward.cost) {
      if (toast.current) { // Verificação se toast.current não é null
        toast.current.show({
          severity: 'error',
          summary: 'Saldo Insuficiente',
          detail: 'Você não tem moedas suficientes para resgatar essa vantagem.',
          life: 3000
        });
      }
      return;
    }

    // Atualiza o saldo do aluno
    setStudentData((prevData) => ({
      ...prevData,
      balance: prevData.balance - reward.cost
    }));

    // Notificação de sucesso
    if (toast.current) {
      toast.current.show({
        severity: 'success',
        summary: 'Vantagem resgatada!',
        detail: `Você resgatou a vantagem: ${reward.name}`,
        life: 3000
      });
    }
  };

  return (
    <div className="student-dashboard">
      <Toast ref={toast} /> {/* Definindo o Toast aqui */}

      <Card title={`Bem-vindo, ${studentData.name}`} style={{ marginBottom: '20px' }}>
        <p>Email: {studentData.email}</p>
        <p>Saldo: {studentData.balance} moedas</p>
      </Card>

      <Card title="Transações Recentes" style={{ marginBottom: '20px' }}>
        <DataTable value={studentData.transactions}>
          <Column field="date" header="Data" />
          <Column field="description" header="Descrição" />
          <Column field="type" header="Tipo" />
        </DataTable>
      </Card>

      <Card title="Vantagens Disponíveis" style={{ marginBottom: '20px' }}>
        <div className="rewards-list">
          {studentData.rewards.map((reward, index) => (
            <div key={index} className="reward-item">
              <h4>{reward.name}</h4>
              <p>Custo: {reward.cost} moedas</p>
              <Button
                label="Resgatar"
                icon="pi pi-gift"
                onClick={() => handleRedeemReward(reward)}
                style={{ marginTop: '10px' }}
              />
            </div>
          ))}
        </div>
      </Card>

      <div className="actions">
        <Button
          label="Ver Detalhes"
          icon="pi pi-search"
          onClick={() => navigate('/profile')}
        />
      </div>
    </div>
  );
};

export default StudentDashboard;
