import React from 'react';
import { Container, Description, ContentSkills } from './styles';
import { FiTriangle } from 'react-icons/fi';
import { SectionTitle } from '../SectionTitle';


export function About () {

  const skills = ['JavaScript', 'React', 'React Native', 'Node.js', 'TypeScript', 'Wordpress'];


  return (
    <Container id="about">
      
      <SectionTitle sectionNumber='01' title='Sobre' />

      <Description data-aos="fade">
        <p>
            Olá! Meu nome é Gustavo e minha paixão por tecnologia começou desde a minha infância, onde eu tentava descobrir como funcionava meus jogos online favoritos, e acabei conhecendo o mundo do desenvolvimento.<br /><br />
            Sou formado em <span>Técnico em informática</span> Pela instituição SENAC, e <span>Análise e Desenvolvimento de Sistemas</span> pela faculdade Impacta de Tecnologia.<br /><br />
            Tive o privilégio de trabalhar no setor de T.I de uma <span>empresa de recuperação de crédito</span>, como desenvolvedor em uma <span>start-up no ramo de casting</span>, uma <span>epresa na área de medicina ocupacional</span> e diversos serviços como <span>freelancer</span>. Meu foco principal hoje em dia é construir, sistemas para internet, aplicativos para celular e APIs.<br /><br />
            Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:
              
          <ContentSkills>
            {skills.map(skill => (
              <li key={skill}>
                <FiTriangle />
                {skill}
              </li>
            ))}
          </ContentSkills>
        </p>

        
        <img src="https://github.com/gustavo-evaristo.png" />

      </Description>
    </Container>
  );
}