import { styled } from '@shared/ui/theme';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Typography } from '../../typography';

const Wrapper = styled(TouchableOpacity)`
  width: 63px;
  padding: ${({ theme }) => theme.spacing(1)}px 0px;
  background-color: #403a47;
  border-radius: ${({ theme }) => theme.spacing(1.75)}px;
  margin-right: ${({ theme }) => theme.spacing(2)}px;
  &:last-child {
    margin-right: 0;
  }
`;
type TProps = {
  sum: string;
  onPressChips: (sum: string) => void;
};

export const Chips = ({ sum, onPressChips }: TProps) => {
  return (
    <Wrapper activeOpacity={0.7} onPress={() => onPressChips(sum)}>
      <Typography
        variant="caption1"
        style={{
          fontSize: 13,
          lineHeight: 16,
          letterSpacing: -0.08,
          textAlign: 'center',
        }}
      >
        {sum + ' ₽'}
      </Typography>
    </Wrapper>
  );
};
