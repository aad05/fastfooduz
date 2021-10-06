import React, { useState } from 'react';
import Navbar from './Navbar';
import { Container } from './style';
import Body from './Body';

export const Buyurtmalar = () => {
  const [active, setActive] = useState(true);
  return (
    <Container>
      <Navbar onClick={(state) => setActive(state)} />
      <Body active={active} />
    </Container>
  );
};

export default Buyurtmalar;
