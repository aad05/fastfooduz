import React, { useState } from 'react';
import {
  Add,
  Header,
  MenuH,
  MenuV,
  Tab,
  Toggle,
  Wrapper,
  IconWrapper,
} from './style';

export const Navbar = () => {
  const [isActive, setIsActive] = useState('Yangi');
  const [on, setOn] = useState(true);
  return (
    <Header>
      {/* 1 */}
      <Wrapper order='1'>
        <Add.Plus />
        <Add.Title>Yangi buyurtma qo'shish</Add.Title>
        <Toggle toggle>
          <IconWrapper active={on} onClick={() => setOn(true)}>
            <MenuH />
          </IconWrapper>
          <IconWrapper active={!on} onClick={() => setOn(false)}>
            <MenuV />
          </IconWrapper>
        </Toggle>
      </Wrapper>
      {/* 2 */}
      <Wrapper center order='2'>
        <Tab>
          <Tab.Item
            active={'Yangi' === isActive}
            onClick={() => setIsActive('Yangi')}
          >
            Yangi
          </Tab.Item>
          <Tab.Item
            active={'Qabul' === isActive}
            onClick={() => setIsActive('Qabul')}
          >
            Qabul qilingan
          </Tab.Item>
          <Tab.Item
            active={'Jonatilgan' === isActive}
            onClick={() => setIsActive('Jonatilgan')}
          >
            Jo'natilgan
          </Tab.Item>
          <Tab.Item
            active={'Yopilgan' === isActive}
            onClick={() => setIsActive('Yopilgan')}
          >
            Yopilgan
          </Tab.Item>
        </Tab>
      </Wrapper>
      {/* 3 */}
      <Wrapper order='3'>
        <Toggle>
          <IconWrapper active={on} onClick={() => setOn(true)}>
            <MenuH />
          </IconWrapper>
          <IconWrapper active={!on} onClick={() => setOn(false)}>
            <MenuV />
          </IconWrapper>
        </Toggle>
      </Wrapper>
    </Header>
  );
};

export default Navbar;
