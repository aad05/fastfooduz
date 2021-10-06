import React from 'react';
import { Container, Cancel } from './style';

export const Index = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <Cancel />
    </Container>
  );
};

export default Index;
