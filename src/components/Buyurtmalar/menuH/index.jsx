import React from 'react';
import { Container, Wrapper } from './style';
import Card from '../../ProductCardH';
import { card } from '../../../mock/card';

export const Body = () => {
  return (
    <Container>
      {/* <Wrapper> */}
      {card.yangi.map((value) => (
        <Card value={value} />
      ))}
      {/* </Wrapper> */}
    </Container>
  );
};

export default Body;
