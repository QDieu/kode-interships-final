import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export const ShevronDown = ({ size = 24, color }: Props) => (
  <Svg width={size} height={size} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.21967 9.71967C6.92678 10.0126 6.92678 10.4874 7.21967 10.7803L11.4697 15.0303C11.7626 15.3232 12.2374 15.3232 12.5303 15.0303L16.7803 10.7803C17.0732 10.4874 17.0732 10.0126 16.7803 9.71967C16.4874 9.42678 16.0126 9.42678 15.7197 9.71967L12 13.4393L8.28033 9.71967C7.98744 9.42678 7.51256 9.42678 7.21967 9.71967Z"
      fill={color || '#706D76'}
    />
  </Svg>
);
