import React from 'react';
import { styled } from '@shared/ui/theme';

const Wrapper = styled.View`
  flex: 1;
  background-color: #352f3d;
`;

type TProps = {
  top: React.ReactNode;
  bottom: React.ReactNode;
};

export const AuthPhoneTemplate = ({ top, bottom }: TProps) => {
  return (
    <Wrapper>
      {top}
      {bottom}
    </Wrapper>
  );
};
