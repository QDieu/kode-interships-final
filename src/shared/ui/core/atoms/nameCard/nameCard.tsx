import { styled } from '@shared/ui/theme';
import React from 'react';
import { View } from 'react-native';
import { Typography } from '../../typography';

type TProps = {
  nameCard: string;
  amountCard: string;
};

const Wrapper = styled.View`
  margin-left: ${({ theme }) => theme.spacing(2)}px;
`;

export const NameCard = ({ nameCard, amountCard }: TProps) => {
  return (
    <Wrapper>
      <Typography
        variant="body15Regular"
        style={{
          fontSize: 15,
          lineHeight: 20,
          letterSpacing: -0.24,
        }}
      >
        {nameCard}
      </Typography>
      <Typography
        variant="caption1"
        style={{ fontSize: 13, lineHeight: 16, letterSpacing: -0.08 }}
      >
        {amountCard + ' ₽'}
      </Typography>
    </Wrapper>
  );
};
