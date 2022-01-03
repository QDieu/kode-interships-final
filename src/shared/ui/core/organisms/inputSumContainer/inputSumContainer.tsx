import { styled } from '@shared/ui/theme';
import React from 'react';

const Wrapper = styled.View`
  background-color: #352f3d;
  margin-bottom: ${({ theme }) => theme.spacing(4)}px;
`;

type TProps = {
  up: React.ReactNode;
  down: React.ReactNode;
};

export const InputSumContainer = ({ up, down }: TProps) => {
  return (
    <Wrapper>
      {up}
      {down}
    </Wrapper>
  );
};
