import React from 'react';

import TextCell from '../generic/TextCell';

export default ({ children, toleranceValue }) => (
  <TextCell customStyle="text-align: left;">
    {children}{`Ohms ${toleranceValue}`}

  </TextCell>
);
