import React from 'react';
import { styled } from '@shared/ui/theme';

const Wrapper = styled.View`
  flex: 1;
  background-color: #312c39;
`;

type TProps = {
  top: React.ReactNode;
  bottom: React.ReactNode;
};

export const AuthOtpTemplate = ({ top, bottom }: TProps) => {
  return (
    <Wrapper>
      {top}
      {bottom}
    </Wrapper>
  );
};
