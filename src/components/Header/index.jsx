import React from 'react';
import { Container } from './styles';

import Logo from '../../assets/logo.svg';

function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo Pokedex" />
    </Container>
  )
}

export default Header;