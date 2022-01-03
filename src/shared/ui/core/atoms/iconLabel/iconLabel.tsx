import React from 'react';

import { styled } from '@shared/ui/theme';

const iconLabelSize = 24;
const wrapperIconSize = 40;

type TStyledProps = {
  bigIcon?: boolean;
};

const IconLabelImage = styled.Image<TStyledProps>`
  width: ${props => (props.bigIcon ? wrapperIconSize : iconLabelSize)}px;
  height: ${props => (props.bigIcon ? wrapperIconSize : iconLabelSize)}px;
`;

const IconWrapper = styled.View<TStyledProps>`
  width: ${() => wrapperIconSize}px;
  height: ${() => wrapperIconSize}px;
  border-radius: ${() => wrapperIconSize / 2};
  background-color: #403a47;
  justify-content: center;
  padding-left: ${({ theme, bigIcon }) =>
    bigIcon ? theme.spacing(0) : theme.spacing(1)}px;
`;

export type TIconLabel = {
  uri: string;
  bigIcon?: boolean;
};

export const IconLabel = ({ uri, bigIcon }: TIconLabel) => {
  return (
    <IconWrapper bigIcon={bigIcon}>
      <IconLabelImage source={{ uri }} bigIcon={bigIcon} />
    </IconWrapper>
  );
};
