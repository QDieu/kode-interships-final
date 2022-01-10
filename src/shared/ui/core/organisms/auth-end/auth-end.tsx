import React from 'react';
import { styled } from '@shared/ui/theme';
import { AuthSuccess, Button } from '../../molecules';

const Wrapper = styled.View`
  flex: 1;
  background-color: #352f3d;
`;

type TProps = {
  checkData: () => void;
};

export const AuthEnd = ({ checkData }: TProps) => {
  return (
    <Wrapper>
      <AuthSuccess />
      <Button text={'Продолжить'} checkData={checkData} />
    </Wrapper>
  );
};
