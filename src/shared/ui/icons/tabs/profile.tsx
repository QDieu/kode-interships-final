import Svg, { Path } from 'react-native-svg';
import { TBaseIconProps } from '../types';
export const IconProfile = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12ZM2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12ZM9.52511 11.6066L9.71221 11.8262L9.46826 11.9802C8.09813 12.845 7.25 14.3496 7.25 16C7.25 16.4142 7.58579 16.75 8 16.75C8.41421 16.75 8.75 16.4142 8.75 16C8.75 14.2051 10.2051 12.75 12 12.75C13.7949 12.75 15.25 14.2051 15.25 16C15.25 16.4142 15.5858 16.75 16 16.75C16.4142 16.75 16.75 16.4142 16.75 16C16.75 14.3496 15.9019 12.845 14.5317 11.9802L14.2878 11.8262L14.4749 11.6066C14.9724 11.0228 15.25 10.2832 15.25 9.5C15.25 7.70507 13.7949 6.25 12 6.25C10.2051 6.25 8.75 7.70507 8.75 9.5C8.75 10.2832 9.02765 11.0228 9.52511 11.6066ZM10.25 9.5C10.25 10.4665 11.0335 11.25 12 11.25C12.9665 11.25 13.75 10.4665 13.75 9.5C13.75 8.5335 12.9665 7.75 12 7.75C11.0335 7.75 10.25 8.5335 10.25 9.5Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  );
};
