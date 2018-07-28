import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const ColorPickerWrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap:wrap;
  width: 100%;
  height: 100%;
  box-sizing:border-box;
`;

const ColorPickerView = ({ children }) => (
  <ColorPickerWrapper>{children}</ColorPickerWrapper>
);

ColorPickerView.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default ColorPickerView;
