// constants
import {
  firstNumberValues,
  secondNumberValues,
  multiplyValues,
  toleranceValues,
  maxResistance,
  minResistance,
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
  const resistanceValue =
    Number(`${firstValue}${secondValue}`) * Number(multiplyValue);

  return {
    resistanceValue,
    toleranceValue,
    formatedResistanceValue: nFormatter(resistanceValue),
  };
};

const getMultiplyColor = (num) => {
  const array = Object.values(multiplyValues);
  const arrayIndex =
    array.findIndex(element => element > num / 100) - 1;
  return Object.keys(multiplyValues)[arrayIndex + 1];
};

export const numToColor = (num) => {
  const numberToStr = num.toFixed(1).toString();
  if (num < 1) {
    const firstNumber = Object.keys(firstNumberValues)[
      numberToStr[Number(2)] - 1
    ];
    const secondNumber = Object.keys(secondNumberValues)[0];
    const multiply = Object.keys(multiplyValues)[
      Object.keys(multiplyValues).length - 1
    ];
    return {
      firstNumber,
      secondNumber,
      multiply,
    };
  }

  if (num < 10) {
    const firstNumber = Object.keys(firstNumberValues)[numberToStr[0] - 1];
    const secondNumber = Object.keys(secondNumberValues)[
      Number(numberToStr[2])
    ];
    const multiply = Object.keys(multiplyValues)[
      Object.keys(multiplyValues).length - 2
    ];
    return {
      firstNumber,
      secondNumber,
      multiply,
    };
  }

  const firstNumber = Object.keys(firstNumberValues)[numberToStr[0] - 1];
  const secondNumber = Object.keys(secondNumberValues)[Number(numberToStr[1])];
  const multiply = getMultiplyColor(num);

  return {
    firstNumber,
    secondNumber,
    multiply,
  };
};

export const filterResistanceValue = (num) => {
  if (num > maxResistance) {
    return maxResistance;
  }
  if (num < minResistance) {
    return minResistance;
  }
  return num;
};

