import styled from 'styled-components';

const H2 = styled.h2`
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
  ${({ customStyle }) => customStyle};
`;

export default H2;
