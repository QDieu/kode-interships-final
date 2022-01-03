import React from 'react';
import { styled } from '@shared/ui/theme';
import { Icons } from '../../atoms/icons';
import { Button, InputPassword, Logo } from '../../molecules';
import { Typography } from '../../typography';
import { KeyboardAvoidingView, Platform } from 'react-native';

const Wrapper = styled.View`
  flex: 1;
  background-color: #352f3d;
  align-items: center;
  justify-content: center;
`;

const TouchWrapper = styled.TouchableOpacity`
  position: absolute;
  top: ${({ theme }) => theme.spacing(4)}px;
  left: ${({ theme }) => theme.spacing(2)}px;
`;

const InputWrapper = styled.View`
  margin-bottom: auto;
`;

const LogoTop = styled.View`
  /* position: absolute;
  top: ${({ theme }) => theme.spacing(5)}px; */
  margin-top: ${({ theme }) => theme.spacing(5)}px;
  margin-bottom: auto;
`;

const ButtonWrapper = styled.View`
  margin-top: auto;
  width: 100%;
`;

type TProps = {
  password: string;
  onChangeText: (text: string) => void;
  checkData: () => void;
};

export const AuthPasswordInput = ({
  password,
  onChangeText,
  checkData,
}: TProps) => {
  return (
    <Wrapper>
      <TouchWrapper activeOpacity={0.7}>
        <Icons.Cancel color={'#fff'} />
      </TouchWrapper>
      <LogoTop>
        <Logo bigSize="very_small" />
      </LogoTop>

      <InputWrapper>
        <Typography variant="body15Regular" style={{ textAlign: 'center' }}>
          Введите пароль
        </Typography>
        <InputPassword
          left={<Icons.Lock />}
          password={password}
          onChangeText={onChangeText}
        />
      </InputWrapper>
      <KeyboardAvoidingView
        behavior={'padding'}
        enabled={Platform.OS === 'ios'}
        style={{
          width: '100%',
        }}
      >
        <ButtonWrapper>
          <Button text="Войти" checkData={checkData} />
        </ButtonWrapper>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};
