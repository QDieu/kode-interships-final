import React from 'react';
import { styled } from '@shared/ui/theme';
import { Icons } from '../icons';
import { View } from 'react-native';

const FirstWrapper = styled.View`
  margin: auto;
  padding: ${({ theme }) => theme.spacing(2.5)}px;
  background-color: #34303c;
  border-radius: ${({ theme }) => theme.spacing(9)}px;
  width: 150px;
`;

const SecondWrapper = styled.View`
  padding: ${({ theme }) => theme.spacing(2.5)}px;
  background-color: #3a3642;
  border-radius: ${({ theme }) => theme.spacing(9)}px;
`;

const ThirdWrapper = styled.View<TProps>`
  padding: ${({ theme }) => theme.spacing(2)}px;
  background-color: ${props => (props.success ? '#4cd563' : '#FB6176')};
  border-radius: ${({ theme }) => theme.spacing(5)}px;
`;

type TProps = {
  success: boolean;
};

export const Check = ({ success }: TProps) => {
  return (
    <FirstWrapper>
      <SecondWrapper>
        <ThirdWrapper success={success}>
          {success ? (
            <Icons.Check color={'#fff'} size={40} />
          ) : (
            <Icons.BigCancel />
          )}
        </ThirdWrapper>
      </SecondWrapper>
    </FirstWrapper>
  );
};
