// constants
import {
  firstNumberValues,
  secondNumberValues,
  multiplyValues,
  toleranceValues,
} from '../constants/ResistorConstants';

// utils
import { nFormatter } from './MathUtils';

export const randomColor = (colorsObject) => {
  const colorsArr = Object.keys(colorsObject);
  return colorsArr[Math.floor(Math.random() * colorsArr.length)];
};

export const getResistanceValue = (buttonInfo) => {
  const firstValue = firstNumberValues[buttonInfo.firstButton.color];
  const secondValue = secondNumberValues[buttonInfo.secondButton.color];
  const multiplyValue = multiplyValues[buttonInfo.multiplyButton.color];
  const toleranceValue = toleranceValues[buttonInfo.toleranceButton.color];
  const resistanceValue = Number(`${firstValue}${secondValue}`) * Number(multiplyValue);
  return `${nFormatter(resistanceValue)} Ohms ${toleranceValue}`;
};
