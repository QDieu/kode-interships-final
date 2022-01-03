import React from 'react';
import { styled } from '@shared/ui/theme';
import { BigButton, ConfirmPayInfo } from '../../molecules';
import { Typography } from '../../typography';

const Wrapper = styled.View`
  height: 100%;
  background-color: #352f3d;
  padding-top: ${({ theme }) => theme.spacing(1)}px;
`;

const TouchWrapper = styled.TouchableOpacity`
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;

type TProps = {
  checkData: () => void;
  arrayInfo: Array<Array<string>>;
};

export const ConfirmPay = ({ checkData, arrayInfo }: TProps) => {
  return (
    <Wrapper>
      <ConfirmPayInfo arrayInfo={arrayInfo} />
      <BigButton text={'Подтвердить'} checkData={checkData} />
      <TouchWrapper activeOpacity={0.7}>
        <Typography
          variant="caption2"
          style={{
            marginHorizontal: 24,
            textAlign: 'center',
            textDecorationLine: 'underline',
            color: '#C2C1C6',
          }}
        >
          Нажимая «Подтвердить», вы соглашаетесь с условиями проведения операции
        </Typography>
      </TouchWrapper>
    </Wrapper>
  );
};
