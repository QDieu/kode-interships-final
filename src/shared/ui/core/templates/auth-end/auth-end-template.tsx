import React from 'react';
import { styled } from '@shared/ui/theme';

const Wrapper = styled.View`
  flex: 1;
`;

type TProps = {
  content: React.ReactNode;
};

export const AuthEndTemplate = ({ content }: TProps) => {
  return <Wrapper>{content}</Wrapper>;
};
