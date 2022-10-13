import React, { useState } from 'react';
import { FiTriangle } from 'react-icons/fi';
import { SectionTitle } from '../SectionTitle';
import { Container, WorkList } from './styles';

export function WorkHistory () {

  const companys = [
    {
      name: 'Koob Jobs',
      acting: 'Desenvolvedor Full Stack',
      description: ['Trabalhei no desenvolvimento dos sistemas da empresa com as tecnologias React, React Native e Node.', 'Lider técnico do time de desenvolvimento e responsável por todo o setor de tecnologias da empresa.'],
      date: 'Jun 2021 - Presente'
    },
    {
      name: 'Vixting',
      acting: 'Desenvolvedor Full Stack',
      description: ['Atuei no desenvolvimento de um dashboard administrativo para a empresa AMBEV, no intuito de controlar as CNHs de seus caminhoneiros.', 'Suporte e Desenvolvimento de sistemas no ramo de medicina ocupacional.'],
      date: 'Abr - Mai 2022'
    },
    {
      name: 'Grupo Freitas',
      acting: 'Técnico em Informática',
      description: ['Desenvolvimento e manutenção do site da empresa, sistemas internos para auxiliar em tarefas complexas.', 'Manutenção de computadores e suporte aos usuários.'],
      date: 'Set 2018 - Jul 2022'
    }
  ];

  const [activeCompany, setActiveCompany] = useState(companys[0]);

  return (
    <Container id="experience">
      <SectionTitle sectionNumber='02' title='Experiência' style={{ marginBottom: 50 }}/>

      <div>
        <ul>
          {companys.map(company => (
            <WorkList onClick={() => setActiveCompany(company)} key={company.name} border={activeCompany.name == company.name ? 'active' : 'notActive'}>{company.name}</WorkList>
          ))}
        </ul>
      
        <div>
          <h3>{activeCompany.acting} <span>@ {activeCompany.name}</span></h3>
          <span>{activeCompany.date}</span>

          <ul>
            {activeCompany.description.map(description => (
              <li key={description}>
                <FiTriangle />
                {description}
              </li>
            ))}
          </ul>
        </div>
      </div>

    </Container>
  );
}