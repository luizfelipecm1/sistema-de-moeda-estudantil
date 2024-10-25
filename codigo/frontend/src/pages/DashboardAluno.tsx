import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

// Exemplo de interface para o saldo do aluno
interface Aluno {
  nome: string;
  saldo: number;
  transacoes: Transacao[];
}

// Exemplo de interface para as transações
interface Transacao {
  id: number;
  tipo: string; // 'recebido' ou 'troca'
  valor: number;
  data: string; // Data da transação
}

const DashboardAluno: React.FC = () => {
  const [aluno, setAluno] = useState<Aluno | null>(null);

  // Função para buscar dados do aluno (substitua pela sua lógica de API)
  const fetchAlunoData = async () => {
    try {
      // Simulando chamada à API
      const response = await fetch('/api/aluno'); // Ajuste a URL conforme necessário
      const data: Aluno = await response.json();
      setAluno(data);
    } catch (error) {
      console.error('Erro ao buscar dados do aluno:', error);
    }
  };

  useEffect(() => {
    fetchAlunoData();
  }, []);

  if (!aluno) {
    return <div>Carregando...</div>; // Renderiza um loading enquanto os dados não chegam
  }

  return (
    <div className="dashboard-aluno">
      <Card title="Dashboard do Aluno" className="p-mb-3">
        <h3>Saldo de Moedas: {aluno.saldo}</h3>
        <Button label="Trocar Moedas" icon="pi pi-exchange" className="p-button-success" />
      </Card>
      
      <Card title="Histórico de Transações">
        <DataTable value={aluno.transacoes} paginator rows={5} className="p-datatable-gridlines">
          <Column field="id" header="ID" />
          <Column field="tipo" header="Tipo" />
          <Column field="valor" header="Valor" />
          <Column field="data" header="Data" />
        </DataTable>
      </Card>
    </div>
  );
};

export default DashboardAluno;
