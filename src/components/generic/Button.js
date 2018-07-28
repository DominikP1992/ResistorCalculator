import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  border: none;
  color: white;
  font-size: 16px;
  background-color: gray;
  border-radius: 10px;
  outline: none;
  ${({ customStyle }) => customStyle};
`;

export default Button;
