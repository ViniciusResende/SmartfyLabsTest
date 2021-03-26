import React from 'react';

import { Container, } from './styles';

const Title: React.FC = () => {
  return (
    <Container>
      <h1>Bem-vindo a Smart Movies</h1>
      <p>Aqui você encontra o melhor conteúdo de filmes e séries.</p>
    </Container>
  );
}

export default Title;