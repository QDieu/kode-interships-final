import { styled } from '@shared/ui/theme';
import React, { ReactNode, useState } from 'react';
import { Icons } from '../../atoms/icons';

const Wrapper = styled.View`
  padding: ${({ theme }) => theme.spacing(2)}px;
  background-color: #352f3d;
  /* margin-bottom: ${({ theme }) => theme.spacing(2)}px; */
`;

const WrapperInput = styled.View`
  padding: 14px 24px;
  background-color: #3b3542;
  flex-direction: row;
  border-radius: ${({ theme }) => theme.spacing(3.25)}px;
  width: 100%;
`;

const CInput = styled.TextInput`
  width: 100%;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: #fff;
  margin-left: ${({ theme }) => theme.spacing(2)}px;
`;

const WrapperTouch = styled.TouchableOpacity`
  margin-left: auto;
`;

type TProps = {
  left: ReactNode;
  password: string;
  onChangeText: (text: string) => void;
};

export const InputPassword = ({ left, password, onChangeText }: TProps) => {
  const [passwordFlag, setPasswordFlag] = useState(true);

  return (
    <Wrapper>
      <WrapperInput>
        {left}
        <CInput
          value={password}
          placeholder="Пароль"
          placeholderTextColor={'#706D76'}
          secureTextEntry={passwordFlag}
          onChangeText={text => {
            onChangeText(text);
          }}
        />

        <WrapperTouch
          onPress={() => {
            setPasswordFlag(!passwordFlag);
          }}
          activeOpacity={0.7}
        >
          <Icons.Eye />
        </WrapperTouch>
      </WrapperInput>
    </Wrapper>
  );
};
