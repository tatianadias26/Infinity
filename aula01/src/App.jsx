// src/App.js

import React from 'react';
import ProfessionalProfile from './ProfessionalProfile'; // Importe seu novo componente
import './App.css'; // Estilos globais da aplicação

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meu Portfólio Profissional</h1>
      </header>
      <main>
        <ProfessionalProfile />
      </main>
    </div>
  );
}

export default App;