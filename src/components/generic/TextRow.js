import styled from 'styled-components';

const TextRow = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing:border-box;
  text-align: center;
  ${({ customStyle }) => customStyle};
`;

export default TextRow;
