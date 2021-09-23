import styled from 'styled-components';
import { ReactComponent as plus } from '../../assets/icons/plus.svg';
import { ReactComponent as menuH } from '../../assets/icons/menuH.svg';
import { ReactComponent as menuV } from '../../assets/icons/menuV.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  background: white;
`;

export const Wrapper = styled.div`
  display: flex;
  width: ${({ center }) => (center ? '100%' : '300px')};
  height: 90px;
  align-items: center;
  border: 1px solid #e5e5e5;
  padding: 10px 40px;
`;

export const Add = styled.div`
  display: flex;
`;

Add.Plus = styled(plus)`
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  background: #20d472;
  padding: 11px;
  border-radius: 50%;
  cursor: pointer;
`;

Add.Title = styled.div`
  font-family: SFProDisplay bold;
  font-size: 12px;
  line-height: 16px;
  color: #2d3a45;
  margin-left: 14px;
  cursor: pointer;
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background: #edeff3;
  border-radius: 24px;
  height: 60px;
`;

Tab.Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 40px;
  border-radius: 18px;
  background: ${({ active }) => (active ? 'white' : 'transparent')};
  color: #b7bcc0;
  cursor: pointer;
  transition: all 0.3s;
`;

export const Toggle = styled.div`
  width: 100px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  background: #edeff3;
  border-radius: 24px;
  height: 50px;
  padding: 0 6px;
`;
export const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  background: ${({ active }) => active && 'white'};
  padding: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
`;
export const MenuH = styled(menuH)`
  width: 16px;
  height: 16px;
`;
export const MenuV = styled(menuV)`
  width: 16px;
  height: 16px;
`;
