// src/App.tsx
//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';


// Contexto de autenticação
import { AuthProvider } from './context/AuthContext';

// Páginas
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/Dashboard/StudentDashboard';
import TeacherDashboard from './pages/Dashboard/TeacherDashboard';
import PartnerDashboard from './pages/Dashboard/PartnerDashboard';
import Transactions from './pages/Transactions';

// Estilos globais e PrimeReact
import './styles/global.css';
import 'primereact/resources/themes/saga-blue/theme.css';  // Tema PrimeReact
import 'primereact/resources/primereact.min.css';          // Estilos PrimeReact
import 'primeicons/primeicons.css';                        // Ícones PrimeIcons

function App() {
  return (
    <PrimeReactProvider
      value={{
        ripple: true,        // Efeito ripple nos botões
        inputStyle: 'outlined', // Estilo padrão dos inputs
      }}
    >
      <AuthProvider>
        <Router>
          <Routes>
            {/* Rotas Públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* Rotas de Dashboards */}
            <Route path="/dashboard/student" element={<StudentDashboard />} />
            <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
            <Route path="/dashboard/partner" element={<PartnerDashboard />} />
            {/* Rotas de Transações */}
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </Router>
      </AuthProvider>
    </PrimeReactProvider>
  );
}

export default App;
