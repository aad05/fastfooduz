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

export const Navbar = ({ onClick }) => {
  const [isActive, setIsActive] = useState('Yangi');
  const [on, setOn] = useState(true);
  console.log(on);
  return (
    <Header>
      {/* 1 */}
      <Wrapper order='1'>
        <Add.Plus />
        <Add.Title>Yangi buyurtma qo'shish</Add.Title>
        <Toggle toggle>
          <IconWrapper active={on} onClick={() => setOn(true)}>
            <MenuH active={on} />
          </IconWrapper>
          <IconWrapper active={!on} onClick={() => setOn(false)}>
            <MenuV active={!on} />
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
          <IconWrapper
            active={on}
            onClick={() => {
              onClick(true);
              setOn(true);
            }}
          >
            <MenuH active={on} />
          </IconWrapper>
          <IconWrapper
            active={!on}
            onClick={() => {
              onClick(false);
              setOn(false);
            }}
          >
            <MenuV active={!on} />
          </IconWrapper>
        </Toggle>
      </Wrapper>
    </Header>
  );
};

export default Navbar;
