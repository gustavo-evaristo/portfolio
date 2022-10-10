import React from 'react';
import { Button, Header, PersonalInfo} from '../../components';
import { Abount, AboutDescription, Container, Content, Heading, ShadowImage} from './styles';

export function Home (){

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

        <Abount>
          <div>
            <h3>01. <span>Sobre</span></h3>
            <hr />
          </div>

          <AboutDescription>
            <p>
            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
              <br />

            Fast-forward to today, and I ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
              <br />

            I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
              <br />

            Here are a few technologies I ve been working with recently:
            </p>

            <div>
              <img src="/me.webp" />
              
              <ShadowImage />
            </div>


          </AboutDescription>
        </Abount>

      </Content>
    </Container>
  );
}