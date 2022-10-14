import React from 'react';
import { ContentMail, ContentSocial, Divisor, Container } from './styles';
import { FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export function PersonalInfo () {
  return (
    <Container>
      <ContentSocial>
        <a href='https://github.com/gustavo-evaristo' target="_blank" rel="noreferrer">
          <FiGithub />
        </a>

        <a href='https://www.linkedin.com/in/gustavo-evaristo/' target="_blank" rel="noreferrer">
          <FiLinkedin />
        </a>

        <a href='https://instagram.com/gu.hevaristo' target="_blank" rel="noreferrer">
          <FiInstagram />      
        </a>

        <a href='https://wa.me/5511970256279' target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>

        <Divisor />
      </ContentSocial>

      <ContentMail>
        <a href="mailto:gug.henri1@gmail.com.br" target="_blank" rel='noreferrer'>
          gug.henri1@gmail.com.br
        </a>
        <Divisor/>
      </ContentMail>

    </Container>
  );
}