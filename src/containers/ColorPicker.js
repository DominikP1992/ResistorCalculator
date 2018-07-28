import React, { Component } from 'react';

import ColorPickerView from '../components/colorPicker/ColorPickerView';
import ColorPickerButton from '../components/colorPicker/ColorPickerButton';
import Button from '../components/generic/Button';
import H1 from '../components/generic/H1';
import TextRow from '../components/generic/TextRow';

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = { activeColor: this.props.activeColor };
  }

  onColorChange = color => this.setState({ activeColor: color });

  renderColorButtons = () =>
    this.props.colors &&
    this.props.colors.map(color => (
      <ColorPickerButton
        onClick={() => this.onColorChange(color)}
        color={color}
        activeColor={this.state.activeColor}
        key={color}
      />
    ));

  renderConfrimationButtons = () => (
    <TextRow customStyle="display: flex; justify-content: space-between;">
      <Button
        onClick={this.props.onCancel}
        customStyle="background-color:#f44336; &:hover{background:#da190b;}"
      >
        Cancel
      </Button>
      <Button
        onClick={() => this.props.onApprove(this.state.activeColor)}
        customStyle="background-color: #4CAF50; &:hover{background:#46a049;}"
      >
        Approve
      </Button>
    </TextRow>
  );

  render() {
    return (
      <ColorPickerView>
        <H1>{this.props.bandName}</H1>
        {this.renderColorButtons()}
        {this.renderConfrimationButtons()}
      </ColorPickerView>
    );
  }
}
