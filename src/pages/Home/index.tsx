import React from 'react';
import { About, Button, Header, PersonalInfo, WorkHistory} from '../../components';
import { Container, Content, Heading, Porjects } from './styles';

export function Home () {
  const projects = [
    '/project1-banner.jpg',
    '/project2-banner.jpg',
    '/project3-banner.jpg',
    '/project4-banner.jpg',
    '/project5-banner.jpg',
    '/project6-banner.jpg',
    '/project7-banner.jpg',
    '/project8-banner.jpg',
    '/project9-banner.jpg',
    '/project10-banner.jpg',
    '/project11-banner.jpg',
    '/project12-banner.jpg',
  ];

  return (
    <Container>
      <PersonalInfo />

      <Header/>

      <Content>
      
        <Heading>
          <span>Olá, meu nome é</span>

          <h1>Gustavo Evaristo.<br/></h1>
        
          <h2>Desenvolvedor web.</h2>

          <h4>Sou um analista de sistemas especializado em construir e projetar soluções digitais excepcionais. Atualmente, estou focado na construção de sistemas para a internet e aplicativos mobile. Vou te ajudar a transformar a sua ideia em <span>realidade</span>.</h4>

          <Button text='Conheça meus projetos' /> 
        </Heading>

        <About />

        <WorkHistory />

        <Porjects id="projects">
          <div>
            <h3>03. <span>Meus Projetos</span></h3>
            <hr />
          </div>

          <div>
            {
              projects.map(image => (
                <a key={image} href={image} target="_blank" rel="noreferrer">
                  <img key={image} src={image}/>
                </a>
              ))
            }
          </div>

        </Porjects>
      </Content>
    </Container>
  );
}