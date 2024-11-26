import React, { useState, useRef } from 'react';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { FileUpload } from 'primereact/fileupload';

// Definindo a interface para as vantagens
interface Reward {
  id: number;
  name: string;
  description: string;
  cost: number;
  imageUrl: string;
}

interface RedeemedReward {
  studentName: string;
  rewardName: string;
  date: string;
}

interface PartnerData {
  name: string;
  email: string;
  rewards: Reward[];
  redeemedRewards: RedeemedReward[];
}

const PartnerDashboard = () => {
  const [partnerData, setPartnerData] = useState<PartnerData>({
    name: 'Restaurante Universitário',
    email: 'restaurante@universidade.com',
    rewards: [],
    redeemedRewards: [],
  });

  const [newReward, setNewReward] = useState<Reward>({
    id: 0,
    name: '',
    description: '',
    cost: 0,  // Inicializando com 0 em vez de null
    imageUrl: '',
  });
  

  const toast = useRef<Toast>(null); // Referência do Toast

  // Função para adicionar uma nova vantagem
  const handleAddReward = () => {
    if (!newReward.name || !newReward.description || newReward.cost <= 0) {
      toast.current?.show({
        severity: 'error',
        summary: 'Erro ao cadastrar',
        detail: 'Por favor, preencha todos os campos corretamente.',
        life: 3000,
      });
      return;
    }

    // Adicionando a nova vantagem à lista
    setPartnerData((prevData) => ({
      ...prevData,
      rewards: [...prevData.rewards, { ...newReward, id: prevData.rewards.length + 1 }],
    }));

    // Limpar o formulário
    setNewReward({
      id: 0,
      name: '',
      description: '',
      cost: 0,
      imageUrl: '',
    });

    // Exibir notificação de sucesso
    toast.current?.show({
      severity: 'success',
      summary: 'Vantagem cadastrada',
      detail: `A vantagem ${newReward.name} foi cadastrada com sucesso.`,
      life: 3000,
    });
  };

  return (
    <div className="partner-dashboard">
      <Toast ref={toast} /> {/* Toast para notificações */}

      <Card title={`Bem-vindo, ${partnerData.name}`} style={{ marginBottom: '20px' }}>
        <p>Email: {partnerData.email}</p>
      </Card>

      <Card title="Resgates Realizados" style={{ marginBottom: '20px' }}>
        <DataTable value={partnerData.redeemedRewards}>
          <Column field="studentName" header="Nome do Aluno" />
          <Column field="rewardName" header="Vantagem Resgatada" />
          <Column field="date" header="Data" />
        </DataTable>
      </Card>

      <Card title="Cadastrar Nova Vantagem" style={{ marginBottom: '20px' }}>
        <div className="form">
          <div className="input-group">
            <label htmlFor="name">Nome da Vantagem</label>
            <InputText
              id="name"
              value={newReward.name}
              onChange={(e) => setNewReward({ ...newReward, name: e.target.value })}
              placeholder="Digite o nome da vantagem"
            />
          </div>
          <div className="input-group">
                      <label htmlFor="cost">Custo em Moedas</label>
                      <InputNumber
                          id="cost"
                          value={newReward.cost}
                          onValueChange={(e) => setNewReward({ ...newReward, cost: e.value ?? 0 })}  // Garantindo que 'cost' nunca seja null
                          min={1}
                          placeholder="Digite o custo em moedas"
                      />

          </div>
          <div className="input-group">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              value={newReward.description}
              onChange={(e) => setNewReward({ ...newReward, description: e.target.value })}
              placeholder="Informe a descrição da vantagem"
            />
          </div>
          <div className="input-group">
            <label htmlFor="image">Imagem</label>
            <FileUpload
              mode="basic"
              name="image"
              accept="image/*"
              onSelect={(e) => setNewReward({ ...newReward, imageUrl: e.files[0].objectURL })}
            />
          </div>
          <Button
            label="Cadastrar Vantagem"
            icon="pi pi-check"
            onClick={handleAddReward}
            style={{ marginTop: '10px' }}
          />
        </div>
      </Card>
    </div>
  );
};

export default PartnerDashboard;
