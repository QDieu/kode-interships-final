import { styled } from '@shared/ui/theme';
import React from 'react';
import { Text, TextInput } from 'react-native';
import { Typography } from '../../typography';

const Wrapper = styled.View`
  padding: ${({ theme }) => theme.spacing(2)}px;
  padding-bottom: 0;
`;

const InputWrapper = styled.View`
  margin-top: ${({ theme }) => theme.spacing(2.5)}px;
  flex-direction: row;
`;

const InputField = styled.View`
  width: 100%
  border-bottom-width: 1px;
  border-bottom-color: #403a47;
  padding-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

const CInput = styled.TextInput`
  font-family: ${({ theme }) => theme.typography['title'].fontFamily};
  font-weight: 500;
  font-size: ${({ theme }) => theme.spacing(3.5)}px;
  line-height: ${({ theme }) => theme.spacing(4.25)}px;
  letter-spacing: 0.34px;
  color: #fff;
`;

type TProps = {
  value?: string;
  onChangeTextSum: (value: string) => void;
};

export const InputSum = ({ value, onChangeTextSum }: TProps) => {
  return (
    <Wrapper>
      <Typography
        variant="body15Semibold"
        style={{
          fontWeight: '600',
          fontSize: 15,
          lineHeight: 20,
          letterSpacing: -0.24,
          color: '#706D76',
        }}
      >
        Сумма
      </Typography>
      <InputField>
        <InputWrapper>
          <CInput
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="#fff"
            value={value}
            onChangeText={value => onChangeTextSum(value)}
          />
          <Typography
            variant="title"
            style={{
              fontWeight: '500',
              fontSize: 28,
              lineHeight: 34,
              color: '#fff',
            }}
          >
            &nbsp;₽
          </Typography>
        </InputWrapper>
      </InputField>
    </Wrapper>
  );
};
