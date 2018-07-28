import React from 'react';
import PropTypes from 'prop-types';

import { PageWrapper } from './components/pageLayout/index';


const App = ({ children }) => <PageWrapper>{children}</PageWrapper>;

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default App;
