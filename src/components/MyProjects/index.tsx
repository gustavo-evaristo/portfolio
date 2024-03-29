import React from "react";
import { SectionTitle } from "../SectionTitle";
import { Container } from "./styles";

export function MyProjects() {
  const projects = [
    {
      banner: "/project1-banner.jpg",
      url: "https://koob.tec.br",
    },
    {
      banner: "/project2-banner.jpg",
      url: "/project2.jpg",
    },
    {
      banner: "/project3-banner.jpg",
      url: "/project3.jpg",
    },
    {
      banner: "/project4-banner.jpg",
      url: "https://wmetais.com.br",
    },
    {
      banner: "/project5-banner.jpg",
      url: "https://saafy.com.br",
    },
    {
      banner: "/project6-banner.jpg",
      url: "https://metalsecurit.com.br",
    },
    {
      banner: "/project7-banner.jpg",
      url: "https://metalloglogistica.com.br",
    },
    {
      banner: "/project8-banner.jpg",
      url: "https://vienaaliancas.com.br",
    },
    {
      banner: "/project9-banner.jpg",
      url: "/project9.jpg",
    },
    {
      banner: "/project10-banner.jpg",
      url: "https://josuefelixadvogado.com",
    },
    {
      banner: "/project11-banner.jpg",
      url: "https://knsmetais.com.br",
    },
    {
      banner: "/project12-banner.jpg",
      url: "https://ecowmetais.com.br",
    },
  ];

  return (
    <Container id="projects">
      <SectionTitle sectionNumber="03" title="Alguns de Meus Projetos" />

      <div data-aos="fade">
        {projects.map((project) => (
          <a
            key={project.url}
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            <img src={project.banner} />
          </a>
        ))}
      </div>
    </Container>
  );
}
