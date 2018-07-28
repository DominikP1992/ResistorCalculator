import React from 'react';
import styled from 'styled-components';

const CellWrapper = styled.button`
  cursor:pointer;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 60px;
  height: 60px;
  margin-right: 6px;
  background-color: gray;
  opacity:0.3;
  background-color: ${({ color }) => color};
  &:hover {
    opacity:1;
  }
  ${({ active }) => active && 'opacity:1;'}
`;

const ColorPickerButton = ({ onClick, color, activeColor }) => (
  <CellWrapper
    color={color}
    active={color === activeColor}
    onClick={onClick}
  />
);

export default ColorPickerButton;
