import styled from 'styled-components';

const H1 = styled.h1`
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
  ${({ customStyle }) => customStyle};
`;

export default H1;
