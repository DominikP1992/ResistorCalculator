// buttons points
export const firstBandButtonPoints =
  'm 193.997,145.155 c -0.09,0.26 -0.2,0.51 -0.31,0.75 -1.49,2.77 -3.27,4.83 -6.02,6.4 l -0.02,-0.04 c 5.92,-3.5 3.43,-14.08 0.64,-18.94 -2.6,-5.57 -10.94,-14.62 -17.85,-11.41 l -0.01,-0.01 c 2.66,-1.47 5.28,-2.01 8.31,-1.87 0.29,0.02 0.58,0.06 0.87,0.11 9.01,1.58 17.56,16.45 14.39,25.01 z';
export const secondBandButtonPoints =
  'm 185.207,117.355 4.41,-2.51 c 0.33,-0.16 0.67,-0.29 1.01,-0.39 9.21,-2.63 20.66,17.13 13.87,23.91 -0.26,0.25 -0.55,0.49 -0.87,0.72 l -0.02,-0.03 -4.4,2.58 -0.01,-0.02 c 4.75,-2.76 2.72,-11.45 0.47,-15.27 -2.12,-4.48 -8.91,-11.87 -14.45,-8.97 l -0.01,-0.02 z';
export const multipleBandButtonPoints =
  'm 215.687,131.905 c -0.26,0.25 -0.54,0.48 -0.85,0.7 l -0.02,-0.03 -4.4,2.62 -0.03,-0.05 c 4.73,-2.73 2.75,-11.42 0.49,-15.27 -2.14,-4.5 -8.94,-11.81 -14.49,-8.97 l -0.01,-0.02 4.41,-2.52 c 0.35,-0.17 0.7,-0.3 1.06,-0.39 9.23,-2.54 20.64,17.22 13.84,23.93 z';
export const toleranceBandButtonPoints =
  'm 229.817,127.965 c -2.59,1.43 -5.59,2.26 -8.56,2 v -0.02 c 7.58,0.35 7.58,-9.26 5.42,-14.78 -0.01,-0.04 -0.03,-0.08 -0.04,-0.12 -0.07,-0.18 -0.13,-0.35 -0.2,-0.52 -0.52,-1.52 -1.44,-3.32 -2.66,-5.11 -0.11,-0.17 -0.23,-0.35 -0.36,-0.52 -3.64,-5.16 -9.58,-9.97 -14.78,-7.34 l -0.83,0.59 -0.71,0.78 -0.62,0.92 h -0.01 c 1.13,-2.32 3.67,-5.01 5.9,-6.15 0.47,-0.25 0.94,-0.44 1.42,-0.57 6.22,-1.73 13.51,5.85 16.03,10.66 2.92,4.7 5.86,14.61 1.22,19.21 -0.36,0.36 -0.76,0.68 -1.22,0.97 z';
export const firstBandName = '1st Band';
export const secondBandName = '2nd Band';
export const multiplyBandName = 'Multiplier Band';
export const toleranceBandName = 'Tolerance Band';

// colors
export const BLACK = 'black';
export const BROWN = 'brown';
export const RED = 'red';
export const ORANGE = 'orange';
export const YELLOW = 'yellow';
export const GREEN = 'green';
export const BLUE = 'blue';
export const PURPLE = 'purple';
export const GRAY = 'gray';
export const WHITE = 'white';
export const GOLD = 'gold';
export const SILVER = 'silver';

export const allColors = [
  BLACK,
  BROWN,
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  BLUE,
  PURPLE,
  GRAY,
  WHITE,
  GOLD,
  SILVER,
];

// number values
export const firstNumberValues = {
  [BROWN]: 1,
  [RED]: 2,
  [ORANGE]: 3,
  [YELLOW]: 4,
  [GREEN]: 5,
  [BLUE]: 6,
  [PURPLE]: 7,
  [GRAY]: 8,
  [WHITE]: 9,
};

export const secondNumberValues = {
  [BLACK]: 0,
  ...firstNumberValues,
};


// multiply values
export const multiplyValues = {
  [BLACK]: 1 ** 0,
  [BROWN]: 10 ** 1,
  [RED]: 10 ** 2,
  [ORANGE]: 10 ** 3,
  [YELLOW]: 10 ** 4,
  [GREEN]: 10 ** 5,
  [BLUE]: 10 ** 6,
  [PURPLE]: 10 ** 7,
  [GRAY]: 10 ** 8,
  [WHITE]: 10 ** 9,
  [GOLD]: 10 ** -1,
  [SILVER]: 10 ** -1,
};

export const toleranceValues = {
  [BROWN]: '± 1%',
  [RED]: '± 2%',
  [GREEN]: '± 0.5%',
  [BLUE]: '± 0.25%',
  [PURPLE]: '± 0.1%',
  [GRAY]: '± 0.05%',
  [GOLD]: '± 5%',
  [SILVER]: '± 10%',
};
