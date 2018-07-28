import React from 'react';
import styled from 'styled-components';

const Path = styled.path`
  cursor: pointer;
  &:hover {
    fill-opacity: 0.4;
  }
`;

export default ({
  onClick, color, id, d,
}) => (
  <Path d={d} id={id} fill={color} onClick={onClick} />
);
