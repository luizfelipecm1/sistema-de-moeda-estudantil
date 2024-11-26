import React, { useState, useRef } from 'react';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

// Definindo a interface para as transações
interface Transaction {
  date: string;
  description: string;
  type: 'crédito' | 'débito';
}

interface Student {
  id: number;
  name: string;
  email: string;
}

interface TeacherData {
  name: string;
  email: string;
  balance: number; // Saldo de moedas do professor
  transactions: Transaction[];
}

const TeacherDashboard = () => {
  const [teacherData, setTeacherData] = useState<TeacherData>({
    name: 'Maria Oliveira',
    email: 'maria.oliveira@example.com',
    balance: 1000,
    transactions: [],
  });

  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [coinsToSend, setCoinsToSend] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const toast = useRef<Toast>(null); // Referência do Toast

  // Lista de alunos disponíveis
  const students: Student[] = [
    { id: 1, name: 'João Silva', email: 'joao.silva@example.com' },
    { id: 2, name: 'Ana Santos', email: 'ana.santos@example.com' },
    { id: 3, name: 'Carlos Pereira', email: 'carlos.pereira@example.com' },
  ];

  // Função para distribuir moedas
  const handleSendCoins = () => {
    if (!selectedStudent) {
      toast.current?.show({
        severity: 'error',
        summary: 'Aluno não selecionado',
        detail: 'Selecione um aluno para distribuir as moedas.',
        life: 3000,
      });
      return;
    }

    if (coinsToSend <= 0) {
      toast.current?.show({
        severity: 'error',
        summary: 'Valor inválido',
        detail: 'O valor das moedas deve ser maior que 0.',
        life: 3000,
      });
      return;
    }

    if (teacherData.balance < coinsToSend) {
      toast.current?.show({
        severity: 'error',
        summary: 'Saldo insuficiente',
        detail: 'Você não tem moedas suficientes para distribuir.',
        life: 3000,
      });
      return;
    }

    // Atualizando o saldo do professor
    setTeacherData((prevData) => ({
      ...prevData,
      balance: prevData.balance - coinsToSend,
      transactions: [
        ...prevData.transactions,
        {
          date: new Date().toLocaleString(),
          description: `Distribuição de ${coinsToSend} moedas para ${selectedStudent.name}. Motivo: ${description}`,
          type: 'débito',
        },
      ],
    }));

    // Limpar o formulário
    setSelectedStudent(null);
    setCoinsToSend(0);
    setDescription('');

    // Exibir notificação de sucesso
    toast.current?.show({
      severity: 'success',
      summary: 'Moedas distribuídas',
      detail: `Você distribuiu ${coinsToSend} moedas para ${selectedStudent.name}.`,
      life: 3000,
    });
  };

  return (
    <div className="teacher-dashboard">
      <Toast ref={toast} /> {/* Toast para notificações */}

      <Card title={`Bem-vindo, ${teacherData.name}`} style={{ marginBottom: '20px' }}>
        <p>Email: {teacherData.email}</p>
        <p>Saldo: {teacherData.balance} moedas</p>
      </Card>

      <Card title="Transações Realizadas" style={{ marginBottom: '20px' }}>
        <DataTable value={teacherData.transactions}>
          <Column field="date" header="Data" />
          <Column field="description" header="Descrição" />
          <Column field="type" header="Tipo" />
        </DataTable>
      </Card>

      <Card title="Distribuir Moedas" style={{ marginBottom: '20px' }}>
        <div className="form">
          <Dropdown
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.value)}
            options={students}
            optionLabel="name"
            placeholder="Selecione um aluno"
          />
          <div className="input-group">
            <label htmlFor="coins">Número de Moedas</label>
            <input
              id="coins"
              type="number"
              value={coinsToSend}
              onChange={(e) => setCoinsToSend(Number(e.target.value))}
              placeholder="Digite o número de moedas"
            />
          </div>
          <div className="input-group">
            <label htmlFor="description">Motivo</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Informe o motivo"
            />
          </div>
          <Button
            label="Enviar Moedas"
            icon="pi pi-check"
            onClick={handleSendCoins}
            style={{ marginTop: '10px' }}
          />
        </div>
      </Card>
    </div>
  );
};

export default TeacherDashboard;
