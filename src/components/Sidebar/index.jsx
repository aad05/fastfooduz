import React from 'react';
import {
  activeStyle,
  Container,
  Header,
  IconWrapper,
  Link,
  Logout,
  Wrapper,
} from './style';
import logo from '../../assets/imgs/logo.png';
import { sidebar } from '../../utils/sidebar';
import { ReactComponent as Chiqish } from '../../assets/icons/logout.svg';

export const Sidebar = () => {
  return (
    <Container>
      <Header>
        <Header.Logo src={logo} alt='alt' />
        <Wrapper>
          <Wrapper.Title>Fast Food</Wrapper.Title>
          <Wrapper.Desc>Online maxsulot sotuvi</Wrapper.Desc>
        </Wrapper>
      </Header>
      <Wrapper left>
        {sidebar.map(({ title, Icon, path }) => (
          <Link activeStyle={activeStyle} to={path}>
            <IconWrapper>
              <Icon />
            </IconWrapper>
            {title}
          </Link>
        ))}
        <Logout>
          <IconWrapper>
            <Chiqish />
          </IconWrapper>
          Chiqish
        </Logout>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
