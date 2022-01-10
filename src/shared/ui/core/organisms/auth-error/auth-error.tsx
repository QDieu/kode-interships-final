import React from 'react';
import { styled } from '@shared/ui/theme';
import { AuthError, Button } from '../../molecules';
import { Icons } from '../../atoms';

const Wrapper = styled.View`
  flex: 1;
  background-color: #352f3d;
`;

const TouchWrapper = styled.TouchableOpacity`
  position: absolute;
  top: ${({ theme }) => theme.spacing(2)}px;
  left: ${({ theme }) => theme.spacing(2)}px;
`;

type TProps = {
  onPress: () => void;
};

export const AuthErrorMolec = ({ onPress }: TProps) => {
  return (
    <Wrapper>
      <TouchWrapper activeOpacity={0.7} onPress={() => onPress()}>
        <Icons.Cancel color={'#fff'} />
      </TouchWrapper>
      <AuthError />
      <Button text={'Повторить'} checkData={onPress} />
    </Wrapper>
  );
};
