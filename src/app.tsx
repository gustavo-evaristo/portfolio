import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';
import Routes from './routes';
import { globalStyles } from './styles/global';
import 'aos/dist/aos.css';

globalStyles();

export function App () {

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  
  return <Routes />;
}