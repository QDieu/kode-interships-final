import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export const Check = ({ size = 24, color }: Props) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 40 40">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35.7616 14.0948L35.467 13.8002C35.9551 13.3121 35.9551 12.5209 35.467 12.0328C34.9789 11.5447 34.1877 11.5447 33.6996 12.0328L17.9166 27.8157L10.467 20.3661C9.97888 19.878 9.1877 19.878 8.69958 20.3661C8.21147 20.8542 8.21147 21.6454 8.69958 22.1335L17.0333 30.4672C17.2704 30.705 17.5865 30.8331 17.9166 30.8331C18.2465 30.8331 18.5621 30.7051 18.8003 30.4669L35.467 13.8002L35.7616 14.0948Z"
      fill={color || '#706D76'}
      stroke="white"
      stroke-width="2"
    />
  </Svg>
);
