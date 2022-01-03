import React from 'react';
import { styled } from '@shared/ui/theme';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

const Wrapper = styled.View`
  height: 100%;
`;

type TProps = {
  content: React.ReactNode;
};

export const AuthPasswordTemplate = ({ content }: TProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Wrapper>{content}</Wrapper>
    </TouchableWithoutFeedback>
  );
};
