import React from 'react';
import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement>{
  sectionNumber: string;
  title: string;
}

export function SectionTitle ({ sectionNumber, title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <h3>{sectionNumber}. <span>{title}</span></h3>
      <hr />
    </Container>
  );
}