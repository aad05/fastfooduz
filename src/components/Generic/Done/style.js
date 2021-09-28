import styled from 'styled-components';
import { ReactComponent as done } from '../../../assets/icons/done.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  min-height: 54px;
  width: 54px;
  min-width: 54px;
  background: #edeff3;
  border-radius: 50%;
  cursor: pointer;
`;
export const Done = styled(done)`
  width: 44px;
  height: 44px;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 50%;
`;
