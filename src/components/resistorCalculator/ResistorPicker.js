import React from 'react';

import ResistorView from './ResistorView';
import BandButton from './BandButton';

export default ({ openColorPicker, buttonInfo }) => (
  <ResistorView>
    {Object.keys(buttonInfo).map(key => (
      <BandButton
        d={buttonInfo[key].points}
        color={buttonInfo[key].color}
        onClick={() => openColorPicker(key)}
        key={key}
      />
    ))}
  </ResistorView>
);
