import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const DashedLine = () => (
  <Svg width={'100%'} height={1} fill="none" viewBox="0 0 290 1">
    <Path
      d="M1.45 0.5H288.55"
      stroke="#403A47"
      strokeLinecap="round"
      strokeDasharray="4 6"
    />
  </Svg>
);
