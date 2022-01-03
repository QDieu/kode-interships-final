import React from 'react';
import { styled } from '@shared/ui/theme';
import { Key, KeyTimer } from '../../atoms';
import { View } from 'react-native';
import { Icons } from '../../atoms/icons';

const Wrapper = styled.View`
  margin-top: auto;
  padding: ${({ theme }) => theme.spacing(1.75)}px
    ${({ theme }) => theme.spacing(2)}px;
  background-color: #312c39;
  flex-direction: row;
  flex-wrap: wrap;
`;

type TProps = {
  keyArray: Array<string>;
  onPressKey: (value: string) => void;
  onPressKeyTimer?: () => void;
};

export const KeyboardCustom = ({
  keyArray,
  onPressKey,
  onPressKeyTimer,
}: TProps) => {
  return (
    <Wrapper>
      {keyArray.map((item, index) =>
        item == 'Again' ? (
          <KeyTimer text={item} key={index} onPressKey={onPressKeyTimer} />
        ) : index + 1 !== keyArray.length ? (
          <Key text={item} key={index} onPressKey={onPressKey} />
        ) : (
          <Key text="" onPressKey={onPressKey}>
            <Icons.Delete />
          </Key>
        ),
      )}
    </Wrapper>
  );
};
