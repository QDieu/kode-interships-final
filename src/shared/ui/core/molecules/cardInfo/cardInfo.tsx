import { styled } from '@shared/ui/theme';
import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import { Typography } from '../../typography';

const Wrapper = styled.View`
  padding: ${({ theme }) => theme.spacing(2)}px;
  background-color: #352f3d;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

const TouchWrapper = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing(2)}px;
`;

const Title = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
  color: #706d76;
`;

const Right = styled.View`
  margin-left: auto;
`;

type TProps = {
  left: ReactNode;
  centerInfo: ReactNode;
  right: ReactNode;
};

export const CardInfo = ({ left, centerInfo, right }: TProps) => {
  return (
    <Wrapper>
      <Title variant="body15Semibold">Карта для оплаты</Title>
      <TouchWrapper activeOpacity={0.7}>
        {left}
        {centerInfo}
        <Right>{right}</Right>
      </TouchWrapper>
    </Wrapper>
  );
};
