import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroAluno from '../pages/CadastroAluno';
import Login from '../pages/Login';
import DashboardAluno from '../pages/DashboardAluno';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<CadastroAluno />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard-aluno" element={<DashboardAluno />} />
        {/* Adicione mais rotas conforme necessário */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
