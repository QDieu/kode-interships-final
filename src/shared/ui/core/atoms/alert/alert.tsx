import React from 'react';
import { Modal, View } from 'react-native';
import { Typography } from '../../typography';
import { Icons } from '../icons';
import { styled } from '@shared/ui/theme';

const Wrapper = styled.View`
  margin-right: ${({ theme }) => theme.spacing(1)}px;
  margin-left: ${({ theme }) => theme.spacing(1)}px;
  padding: ${({ theme }) => theme.spacing(2)}px;
  background-color: #fb6176;
  border-radius: ${({ theme }) => theme.spacing(1.75)}px;

  flex-direction: row;

  top: 24;
  z-index: 2;
  position: absolute;
  width: 94%;
`;

const TouchWrapper = styled.TouchableOpacity`
  margin-left: auto;
`;

const Flex1 = styled.View`
  flex: 1;
`;

type TProps = {
  text: string;
  onPress: () => void;
};

export const AlertView: React.FC<TProps> = ({ text, onPress }) => {
  return (
    <Wrapper>
      <Typography
        variant="body15Regular"
        style={{
          fontSize: 15,
          lineHeight: 20,
          color: '#fff',
        }}
      >
        {text}
      </Typography>
      <Flex1 />
      <TouchWrapper onPress={() => onPress()}>
        <Icons.SmallCancel color={'#fff'} />
      </TouchWrapper>
    </Wrapper>
  );
};
