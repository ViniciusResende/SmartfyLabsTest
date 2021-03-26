import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Tab } from './styles';

const NavigationBar: React.FC = () => {
  return (
    <Container>
      <Tab 
        as={ Link } 
        to="/"
      >Filmes</Tab>
      <Tab
        as={ Link } 
        to="/series"
      >Séries</Tab>
    </Container>
  );
}

export default NavigationBar;