import React from 'react';
import { Button } from '../Button';
import { Container } from './styles';

export function Contact () {
  function toWpp () {
    window.open('https://wa.me/5511970256279', '_blank', 'noopener,noreferrer');
  }
  
  return (
    <Container id="contact" data-aos="fade">
      <span>04. Próximo Passo</span>
      <h3>Entre em Contato</h3>
      <h4>Vamos conversar! estou a disposição para entender o seu momento, colocar suas ideias em prática e desenvolver o seu projeto.</h4>
      
      <Button style={{ padding: 20 }} text='Enviar Mensagem' onClick={toWpp} />

      <footer>
        <h5>Desenvolvido por Gustavo Evaristo</h5>
      </footer>
    </Container>
  );
}