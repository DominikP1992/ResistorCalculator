import styled from 'styled-components';

const Input = styled.input`
  color: tomato;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 23px;
  max-width: 195px;
  position: relative;
  box-shadow: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ${({ customStyle }) => customStyle};
`;

export default Input;
