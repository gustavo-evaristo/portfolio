import React, { useState } from 'react';
import { Container, CardStyled, ContentCard } from './styles';
import { VscFolder } from 'react-icons/vsc';
import { FiGithub } from 'react-icons/fi';
import { Button } from '../Button';

export function Card () {

  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const projects = [
    {
      title: 'Template de API',
      description: 'Template de api node.js, configurado com typeScript, babel, eslint, husky e jest.',
      tags: ['node.js', 'typeScript', 'eslint', 'babel', 'jest'],
      url: 'api-template',
    },
    {
      title: 'Template de Microserviços',
      description: 'Template para microserviços com node.js, typeScript, apollo server, graphQL e prisma.',
      tags: ['node.js', 'typeScript', 'graphql', 'apollo server', 'prisma'],
      url: 'microservice-template',
    },
    {
      title: 'Refresh Token',
      description: 'Autenticação para api node.js utilizando jwt com a estratégia de refresh token.',
      tags: ['node.js', 'typeScript', 'jwt', 'prisma'],
      url: 'refresh-token',
    },
    {
      title: 'Testes E2E',
      description: 'Testes automatizados de ponta a ponta para api node.js utilizando jest e supertest.',
      tags: ['node.js', 'jest', 'supertest'],
      url: 'node-jest-supertest'
    },
    {
      title: 'Background Jobs',
      description: 'Execução de tarefas em segundo plano com o bull.js.',
      tags: ['node.js', 'typescript', 'bull'],
      url: 'background-jobs'
    },
    {
      title: 'API Gateway',
      description: 'Criando uma api gateway com node.js e express.',
      tags: ['node.js', 'typescript', 'express'],
      url: 'api-gateway'
    },
    {
      title: 'Node cluster',
      description: 'Execução de clusters em node.js.',
      tags: ['node.js'],
      url: 'node-cluster',
    },
    {
      title: 'GraphQL',
      description: 'Front end desenvolvido em react consumindo uma api node.js com graphql.',
      tags: ['react', 'node.js', 'typescript', 'graphql', 'apollo server'],
      url: 'graphql-node-react',
    },
    {
      title: 'Datadog',
      description: 'Monitoramento de api node.js com o datadog agente.',
      tags: ['node.js', 'typescript', 'express'],
      url: 'datadog',
    },
  ];


  
  return (
    <Container>

      <h3>Outros Projetos Notáveis</h3>

      <span>veja os arquivos</span>
      
      <ContentCard>

        {projects.slice(0, showMoreProjects ? projects.length : 6).map(project => (
          <CardStyled key={project.title} href={`https://github.com/gustavo-evaristo/${project.url}.git`} target="_blank" rel='noreferrer'>
            <div>
              <VscFolder />
              <FiGithub />
            </div>
            
            <div>
              <h4>{project.title}</h4>
            
              <h5>{project.description}</h5>
            </div>
            
            <ul>
              {project.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
          </CardStyled>
        ))}
      </ContentCard>

      <Button text={showMoreProjects ? 'Ver menos' : 'Ver mais'} onClick={() => setShowMoreProjects(state => !state)}/>
    </Container>
  );
}