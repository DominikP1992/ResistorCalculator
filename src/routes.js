import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ResistorCalculator from './containers/ResistorCalculator';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={ResistorCalculator} />
    </Switch>
  </Router>
);

export default Routes;
