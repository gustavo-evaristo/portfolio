import React from 'react';
import { About, Button, Header, PersonalInfo, WorkHistory, MyProjects, Card, Contact } from '../../components';
import { Container, Content, Heading } from './styles';

export function Home () {

  function toProjects () {
    window.location.href = '#projects';
  }

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

          <Button text='Conheça meus projetos' onClick={toProjects} /> 
        </Heading>

        <About />

        {/* <WorkHistory /> */}

        <MyProjects />

        <Card />
        
        <Contact />
      </Content>
    </Container>
  );
}