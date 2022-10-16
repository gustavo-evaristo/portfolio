import React, { useEffect, useState } from 'react';
import { Container, Content } from './styles';
import { Button } from '../Button';

export function Header() {
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [shadow, setShadow] = useState(false);

  function toResume () {
    window.open('/me.pdf', '_blank');
  }
  
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

  const menuOptions = [
    {
      link: '#about',
      title: 'Sobre',
      delay: 200,
    },
    {
      link: '#experience',
      title: 'Experiência',
      delay: 400,
    },
    {
      link: '#projects',
      title: 'Trabalhos',
      delay: 600,
    },
    {
      link: '#contact',
      title: 'Contato',
      delay: 800,
    },
  ];

  return (
    <Container display={showHeader ? 'show': 'hidden'} shadow={shadow ? 'withShadow' : 'withoutShadown'}>
      <img src="/logo.png" data-aos="fade-down" />

      <Content >
        <ul>
          {menuOptions.map(({ title, link, delay }, index) => (
            <li key={title} data-aos="fade-down" data-aos-delay={delay} >
              <a href={link}>
                <span>{`0${index + 1}`}. </span>
                {title}
              </a>
            </li>
          ))}
        </ul>

        <Button text='Resumo' onClick={toResume} data-aos="fade-down" data-aos-delay={window.innerWidth >= 800 ? '1000' : '200'} />
      </Content>

    </Container>
  );
}