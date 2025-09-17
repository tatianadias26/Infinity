// src/ProfessionalProfile.jsx

import React from 'react';
import './ProfessionalProfile.css';
import gatoImage from './assets/gato.jpg'; // Importando a imagem

const ProfessionalProfile = () => {
  return (
    <div className="profile-card">
      <div className="profile-header-with-image">
        <img src={gatoImage} alt="Imagem de perfil de gato" className="profile-image" />
        <h2 className="profile-title">Sobre Mim</h2>
      </div>
      <p className="profile-text">
        Sou professora universitária, pesquisadora e doutoranda em Ciência da Computação (UFBA), com uma carreira consolidada na intersecção entre Educação e Tecnologia. Possuo mais de uma década de experiência como Professora na Universidade do Estado da Bahia (UNEB), onde leciono em cursos de graduação e pós-graduação e acumulo vasta experiência em gestão acadêmica, notadamente na coordenação de cursos de Licenciatura em Computação voltados para a formação de professores da educação básica.
      </p>
      <p className="profile-text">
        Minha sólida formação inclui Mestrado em Gestão e Tecnologias Aplicadas à Educação (UNEB) e especializações em Análise de Dados e Sistemas de Informação. Sou uma profissional proativa, em constante aprimoramento em áreas de vanguarda como Inteligência Artificial, Ciência de Dados e metodologias de ensino inovadoras. Minha produção acadêmica, participação em grupos de pesquisa e projetos de extensão refletem meu compromisso em aplicar soluções tecnológicas para gerar impacto positivo e qualificar a educação no país.
      </p>
    </div>
  );
};

export default ProfessionalProfile;