import React, { Component, Fragment } from 'react';

// constants
import {
  firstBandButtonPoints,
  secondBandButtonPoints,
  multipleBandButtonPoints,
  toleranceBandButtonPoints,
  firstBandName,
  secondBandName,
  multiplyBandName,
  toleranceBandName,
  toleranceValues,
  firstNumberValues,
  secondNumberValues,
  multiplyValues,
} from '../constants/ResistorConstants';

// utils
import {
  randomColor,
  getResistanceValue,
} from '../utlis/ResistorCalculatorUtils';

// components
import ResistorCalculatorView from '../components/resistorCalculator/ResistorCalculatorView';
import ResistorPicker from '../components/resistorCalculator/ResistorPicker';
import PopUp from '../components/generic/PopUp';
import ColorPicker from './ColorPicker';
import H1 from '../components/generic/H1';
import H2 from '../components/generic/H2';
import TextRow from '../components/generic/TextRow';
import TextCell from '../components/generic/TextCell';

class UserPhotoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualKey: '',
      visible: false,
      mouted: false,
      resistanceValue: '0',
      buttonInfo: {
        firstButton: {
          points: firstBandButtonPoints,
          color: randomColor(firstNumberValues),
          name: firstBandName,
          colors: Object.keys(firstNumberValues),
        },
        secondButton: {
          points: secondBandButtonPoints,
          color: randomColor(secondNumberValues),
          name: secondBandName,
          colors: Object.keys(secondNumberValues),
        },
        multiplyButton: {
          points: multipleBandButtonPoints,
          color: randomColor(multiplyValues),
          name: multiplyBandName,
          colors: Object.keys(multiplyValues),
        },
        toleranceButton: {
          points: toleranceBandButtonPoints,
          color: randomColor(toleranceValues),
          name: toleranceBandName,
          colors: Object.keys(toleranceValues),
        },
      },
    };
  }

  componentDidMount() {
    this.calculateResitance();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  openColorPicker = key =>
    this.setState({
      visible: true,
      mouted: true,
      actualKey: key,
      colors: this.state.buttonInfo[key].colors,
    });

  unmountPopup = () => {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.setState({ mouted: false }), 300);
  };

  closeColorPicker = () =>
    this.setState({ visible: false, actualKey: false }, this.unmountPopup());

  approveColor = (color) => {
    const { buttonInfo, actualKey } = this.state;
    this.setState(
      {
        buttonInfo: {
          ...buttonInfo,
          [actualKey]: { ...buttonInfo[actualKey], color },
        },
      },
      () => {
        this.closeColorPicker();
        this.calculateResitance();
      },
    );
  };

  calculateResitance = () =>
    this.setState({
      resistanceValue: getResistanceValue(this.state.buttonInfo),
    });

  renderColorPicker = () => {
    const {
      buttonInfo, actualKey, visible, mouted,
    } = this.state;

    const colorPickerInfo = buttonInfo[actualKey]
      ? {
        color: buttonInfo[actualKey].color,
        name: buttonInfo[actualKey].name,
      }
      : {};

    return (
      mouted && (
        <PopUp
          visible={visible}
          onClose={this.closeColorPicker}
          animation="zoom"
          closeOnEsc
        >
          <ColorPicker
            activeColor={colorPickerInfo.color}
            bandName={colorPickerInfo.name}
            onApprove={this.approveColor}
            onCancel={this.closeColorPicker}
            colors={this.state.colors}
          />
        </PopUp>
      )
    );
  };

  renderResistanceValue = () => (
    <TextRow customStyle="margin-top:20px; color:tomato;">
      <TextCell customStyle="width:40%; text-align:right;">
        Resistor value:
      </TextCell>
      <TextCell customStyle="width:60%; text-align:left;padding-left:10px;">
        {this.state.resistanceValue}
      </TextCell>
    </TextRow>
  );

  renderHeader = () => (
    <Fragment>
      <H1 customStyle="color:OrangeRed; margin-bottom:10px;">
        4 Band Resistor Color Code Calculator
      </H1>
      <H2 customStyle="color:Tomato; margin-bottom:100px;">
        tip: click on the band to change the color
      </H2>
    </Fragment>
  );

  render() {
    return (
      <ResistorCalculatorView>
        {this.renderHeader()}
        <ResistorPicker
          openColorPicker={this.openColorPicker}
          buttonInfo={this.state.buttonInfo}
        />
        {this.renderColorPicker()}
        {this.renderResistanceValue()}
      </ResistorCalculatorView>
    );
  }
}

export default UserPhotoPage;
