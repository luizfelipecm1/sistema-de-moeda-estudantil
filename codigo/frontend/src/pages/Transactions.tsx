import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

// Definindo a interface para as transações
interface Transaction {
  id: number;
  date: string;
  type: 'Recebimento' | 'Envio' | 'Resgate'; // Tipo da transação
  amount: number; // Valor em moedas
  description: string; // Descrição da transação
}

const Transactions = () => {
  // Estado para armazenar as transações do usuário
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 1,
      date: '2024-11-01',
      type: 'Recebimento',
      amount: 50,
      description: 'Moeda recebida do professor João pelo bom comportamento',
    },
    {
      id: 2,
      date: '2024-11-05',
      type: 'Envio',
      amount: 30,
      description: 'Envio de moedas para o aluno Pedro',
    },
    {
      id: 3,
      date: '2024-11-10',
      type: 'Resgate',
      amount: 20,
      description: 'Resgate de desconto em material didático',
    },
  ]);

  return (
    <div className="transactions">
      <Card title="Histórico de Transações">
        {/* Tabela para mostrar as transações */}
        <DataTable value={transactions} paginator rows={5}>
          <Column field="date" header="Data" />
          <Column field="type" header="Tipo" />
          <Column field="amount" header="Quantidade de Moedas" />
          <Column field="description" header="Descrição" />
        </DataTable>
      </Card>

      {/* Botão de exemplo para filtrar transações */}
      <Button
        label="Filtrar"
        icon="pi pi-filter"
        style={{ marginTop: '20px' }}
        onClick={() => alert('Filtrar transações')}
      />
    </div>
  );
};

export default Transactions;
