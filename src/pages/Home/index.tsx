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
          <h3 data-aos="fade-up" data-aos-duration="600" data-aos-delay="1200">Olá, meu nome é</h3>

          <h1 data-aos="fade-up" data-aos-duration="600" data-aos-delay="1400">Gustavo Evaristo.<br/></h1>
        
          <h2 data-aos="fade-up" data-aos-duration="600" data-aos-delay="1600">Desenvolvedor web.</h2>

          <h4 data-aos="fade-up" data-aos-duration="600" data-aos-delay="1800">Sou um analista de sistemas especializado em desenvolver e projetar soluções digitais excepcionais. Atualmente, estou focado no desenvolvimento de sistemas para a internet e aplicativos mobile. Vou te ajudar a transformar a sua ideia em <span>realidade</span>.</h4>

          <Button text='Conheça meus projetos' onClick={toProjects} data-aos="fade-up" data-aos-duration="600" data-aos-delay="2000" /> 
        </Heading>

        <About />

        <WorkHistory />

        <MyProjects />

        <Card />
        
        <Contact />
      </Content>
    </Container>
  );
}