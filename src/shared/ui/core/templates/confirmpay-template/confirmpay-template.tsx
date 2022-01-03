import React from 'react';
import { styled } from '@shared/ui/theme';

const Wrapper = styled.View``;

type TProps = {
  main: React.ReactNode;
};

export const ConfirmPayTemplate = ({ main }: TProps) => {
  return <Wrapper>{main}</Wrapper>;
};
