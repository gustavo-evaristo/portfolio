import React, { useEffect, useState } from 'react';
import { Container, Content } from './styles';
import { Button } from '../Button';

export function Header() {
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [shadow, setShadow] = useState(false);
  
  useEffect(() => {
    document.addEventListener('scroll', () => {

      const scrollY = window.scrollY;

      const wihShadown = scrollY >= 1;

      setShadow(wihShadown);

      if (scrollY <= 0) {
        setShowHeader(true);
        setLastScrollPosition(0);
        return;
      }
      
      setLastScrollPosition(scrollY);

      const showHeader = scrollY <= lastScrollPosition;

      setShowHeader(showHeader);
      
    });
  });


  return (
    <Container display={showHeader ? 'show': 'hidden'} shadow={shadow ? 'withShadow' : 'withoutShadown'}>
      <img src="/logo.png" />

      <Content>
        <ul>
          <li>
            <a>
              <span>01. </span>
            Sobre
            </a>
          </li>

          <li>
            <a>
              <span>02. </span>
            Experiência
            </a>
          </li>

          <li>
            <a>
              <span>03. </span>
            Trabalhos
            </a>
          </li>

          <li>
            <a>
              <span>04. </span>
            Contato
            </a>
          </li>
        </ul>

        <Button text='Resumo'/>
      </Content>

    </Container>
  );
}