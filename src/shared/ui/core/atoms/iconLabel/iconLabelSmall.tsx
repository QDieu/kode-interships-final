import React from 'react';

import { styled } from '@shared/ui/theme';
import { Icons } from '../icons';

const iconSize = 24;

const IconLabelImage = styled.Image`
  width: ${iconSize}px;
  height: ${iconSize}px;
`;

const IconWrapper = styled.View`
  width: ${iconSize}px;
  height: ${iconSize}px;
`;

export type TIconLabel = {
  uri?: string;
  color?: string;
};

export const IconLabelSmall = ({ uri, color }: TIconLabel) => {
  return (
    <IconWrapper>
      {uri ? (
        <IconLabelImage source={{ uri }} />
      ) : (
        <Icons.Telephon color={color} />
      )}
    </IconWrapper>
  );
};
