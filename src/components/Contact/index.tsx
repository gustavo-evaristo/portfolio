import React from 'react';
import { Button } from '../Button';
import { Container } from './styles';

export function Contact () {
  function toWpp () {
    window.open('https://wa.me/5511970256279', '_blank', 'noopener,noreferrer');
  }
  
  return (
    <Container>
      <span>04. Próximo Passo</span>
      <h3>Entre em Contato</h3>
      <h4>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</h4>
      <Button style={{ padding: 20 }} text='Enviar Mensagem' onClick={toWpp} />

      <footer>
        <h5>Desenvolvido por Gustavo Evaristo</h5>
      </footer>
    </Container>
  );
}