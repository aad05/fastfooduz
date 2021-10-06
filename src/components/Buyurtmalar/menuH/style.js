const { default: styled } = require('styled-components');

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 35px;
  /* min-width: 1440px; */
  /* overflow-x: scroll; */
`;

export const Wrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  min-width: 300px;
  margin-right: 15px;
  /* flex: 1; */
`;
