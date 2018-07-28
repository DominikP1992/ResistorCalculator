import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const ResistorCalculatorWrapper = styled.div``;

const ResistorCalculatorView = ({ children }) => (
  <ResistorCalculatorWrapper>{children}</ResistorCalculatorWrapper>
);

ResistorCalculatorView.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default ResistorCalculatorView;
