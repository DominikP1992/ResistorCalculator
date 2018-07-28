import React from 'react';
import styled from 'styled-components';

const SvgWrapper = styled.div`
  overflow: hidden;
`;

export default ({ children }) => (
  <SvgWrapper>
    <svg
      width="500"
      height="300"
      viewBox="150 90 200 120"
      overflow="visible"
      enableBackground="new -3.033 -0.385 405 250"
      xmlSpace="preserve"
    >
      <g
        id="XMLID_1_"
        transform="matrix(1.1761732,0,0,1.1761732,11.73437,2.5945813)"
      >
        <g id="g3435">
          <path
            d="m 393.677,7.495 c 3.32,-1.69 8.06,6.31 4.96,8.5 l -0.02,-0.02 -160.67,92.81 -0.02,0.01 c -0.81,-3.23 -2.54,-6.22 -4.93,-8.54 l 160.68,-92.76 z"
            id="path3437"
            fill="#d2d2d2"
          />
          <path
            d="m 232.997,100.255 c 2.39,2.32 4.12,5.31 4.93,8.54 1.54,6.14 -0.2,13.16 -6.87,18.22 l -0.02,-0.02 c 4.64,-4.6 1.7,-14.51 -1.22,-19.21 -2.52,-4.81 -9.81,-12.39 -16.03,-10.66 v -0.01 c 7.72,-3.26 14.67,-1.26 19.21,3.14 z"
            id="path3439"
            fill="#ffcc66"
          />
          <path
            d="m 221.297,129.835 -0.83,0.04 h -0.12 l -0.92,0.21 -0.91,0.29 -0.8,0.44 -0.03,-0.06 -1.95,1.2 -0.05,-0.05 c 6.8,-6.71 -4.61,-26.47 -13.84,-23.93 l -0.02,-0.06 1.99,-1.12 0.79,-0.5 0.7,-0.63 0.63,-0.7 0.54,-0.79 0.45,-0.79 0.54,-0.71 0.58,-0.58 0.71,-0.45 c 5.14,-2.64 11.13,2.29 14.66,7.25 0.12,0.17 0.24,0.35 0.36,0.52 0.94,1.39 1.67,2.76 2.13,3.94 0.18,0.36 0.36,0.75 0.53,1.17 0.02,0.06 0.03,0.11 0.05,0.16 0.05,0.12 0.1,0.23 0.15,0.36 0.01,0.04 0.03,0.08 0.04,0.12 2.03,5.65 2.2,14.81 -5.38,14.67 z"
            id="path3447"
            fill="#ffcc66"
          />
          <path
            d="m 196.387,110.905 c 5.55,-2.84 12.35,4.47 14.49,8.97 2.26,3.85 4.24,12.54 -0.49,15.27 -0.32,0.19 -0.67,0.34 -1.05,0.47 v -0.01 l -4.81,2.79 -0.03,-0.03 c 6.79,-6.78 -4.66,-26.54 -13.87,-23.91 l -0.02,-0.06 4.83,-2.78 -0.01,-0.01 0.96,-0.7 z"
            id="path3449"
            fill="#ffcc66"
          />
          <path
            d="m 196.177,143.205 v 0.01 l -0.79,0.53 -0.75,0.67 -0.62,0.75 -0.02,-0.01 c 3.17,-8.56 -5.38,-23.43 -14.39,-25.01 v -0.02 l 0.95,-0.17 0.92,-0.33 0.8,-0.4 -0.01,-0.02 2.06,-1.17 0.93,-0.53 c 9.64,-4.61 22.64,17.97 13.89,23.99 l -0.02,-0.03 -2.95,1.74 z"
            id="path3451"
            fill="#ffcc66"
          />
          <path
            d="m 170.257,122.155 c 6.51,-3.39 14.54,4.82 17.32,10.01 3.13,4.9 6.22,16.25 0,20.02 -6.63,3.88 -15.02,2.84 -20.6,-2.41 l -0.02,-0.03 2.68,-1.55 0.02,0.02 c 3.07,-2.18 -1.58,-10.18 -4.96,-8.49 l -2.64,1.52 -0.02,-0.03 c -1.72,-7.55 1.51,-15.15 8.22,-19.06 z"
            id="path3453"
            fill="#ffcc66"
          />
          <path
            d="m 1.367,233.985 c 3.43,-1.61 8.05,6.36 4.95,8.52 -3.37,1.68 -8.05,-6.3 -4.95,-8.52 z"
            id="path3457"
            fill="#d2d2d2"
          />
          <path
            d="m 1.357,233.965 160.7,-92.72 2.64,-1.52 c 3.38,-1.69 8.03,6.31 4.96,8.49 l -0.02,-0.02 -2.68,1.55 -160.64,92.76 c 3.1,-2.159 -1.52,-10.13 -4.95,-8.52 l -0.01,-0.02 z"
            id="path3459"
            fill="#d2d2d2"
          />
          {children}
        </g>
      </g>
    </svg>
  </SvgWrapper>
);
