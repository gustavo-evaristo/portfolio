import React from 'react';
import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function Button ({ text, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {text}
    </Container>
  );
}