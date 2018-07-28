import styled from 'styled-components';

const TextCell = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
  box-sizing:border-box;
  display: inline-block;
  font-size:30px;
  ${({ customStyle }) => customStyle};
`;

export default TextCell;
