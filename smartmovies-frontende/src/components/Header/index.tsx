import React from 'react';
import { Link } from 'react-router-dom';

import { Container, LogoContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container >
      <LogoContainer as={Link} to='/'>
        <h3>Smart Movies</h3>
      </LogoContainer>
    </Container>
  );
}

export default Header;