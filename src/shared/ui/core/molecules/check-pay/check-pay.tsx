import React from 'react';
import { styled } from '@shared/ui/theme';
import { Check } from '../../atoms';
import { Typography } from '../../typography';

const Wrapper = styled.View`
  margin: auto;
  margin-bottom: 0;
`;

const Description = styled.View`
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`;

const Title = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;

const Sum = styled.View``;

type TProps = {
  success: boolean;
  sum: string;
};

export const CheckPay = ({ success, sum }: TProps) => {
  return (
    <Wrapper>
      <Check success={success} />
      <Description>
        <Title>
          <Typography
            variant="body17Regular"
            style={{ color: '#706D76', textAlign: 'center' }}
          >
            {success ? 'Оплачено' : 'Платеж отклонен'}
          </Typography>
        </Title>
        <Sum>
          <Typography
            variant="largeTitle"
            style={{ color: '#fff', textAlign: 'center' }}
          >
            {sum + ' ₽'}
          </Typography>
        </Sum>
      </Description>
    </Wrapper>
  );
};
