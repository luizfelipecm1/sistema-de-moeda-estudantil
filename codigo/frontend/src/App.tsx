// src/App.tsx
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import './styles/global.css';

// Importação do PrimeReactProvider
import { PrimeReactProvider } from 'primereact/api';

// Importação dos estilos do PrimeReact (você pode trocar o tema aqui)
import 'primereact/resources/themes/saga-blue/theme.css';  // ou outro tema
import 'primereact/resources/primereact.min.css';           // estilos principais
import 'primeicons/primeicons.css';                         // ícones

function App() {
  return (
    <PrimeReactProvider
      value={{
        ripple: true, // Habilita efeito ripple globalmente (opcional)
        inputStyle: 'outlined', // Define o estilo global de inputs (filled ou outlined)
        locale: 'pt-BR', // Define o idioma global para componentes (se necessário)
      }}
    >
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </PrimeReactProvider>
  );
}

export default App; // Certifique-se de que está exportando corretamente
