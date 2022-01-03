import React from 'react';
import { Typography } from '../../typography';
import { styled } from '../../../theme';
import { Icons } from '../icons';

const Wrapper = styled.View`
  padding: ${({ theme }) => theme.spacing(1)}px
    ${({ theme }) => theme.spacing(2)}px;
  background-color: #352f3d;
`;

const WrapperInfo = styled.View`
  padding-bottom: ${({ theme }) => theme.spacing(0.875)}px;
`;

type TProps = {
  info: string;
  title: string;
  last?: boolean;
};

export const FieldConfirmPay = ({ info, title, last = true }: TProps) => {
  return (
    <Wrapper>
      <WrapperInfo>
        <Typography
          variant="caption1"
          style={{
            fontSize: 13,
            lineHeight: 16,
            color: '#706D76',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body15Regular"
          style={{
            fontSize: 15,
            lineHeight: 20,
            color: '#fff',
          }}
        >
          {info}
        </Typography>
      </WrapperInfo>
      {last ? <Icons.DashedLine /> : null}
    </Wrapper>
  );
};
