import React from 'react';
import { Paragrafo, Title } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Página de Login
        <small>teste</small>
      </Title>
      <Paragrafo>
        <p>teste testes tes testse es</p>
      </Paragrafo>
      <button type="button">teste</button>
    </Container>
  );
}
