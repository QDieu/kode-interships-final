import React, { useEffect, useRef, useState } from 'react';
import { Typography } from '../../typography';
import { styled } from '../../../theme';

const Wrapper = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing(1.75)}px 0;
  flex: 33.3%;
  justify-content: center;
  align-items: center;
`;

type TProps = {
  text: string;
  children?: React.ReactNode;
  onPressKey: (value: string) => void;
};

export const Key = ({ text, children, onPressKey }: TProps) => {
  return (
    <>
      {!children ? (
        <Wrapper activeOpacity={0.5} onPress={() => onPressKey(text)}>
          {isNaN(+text) ? (
            <Typography
              variant="caption1"
              style={{
                textAlign: 'center',
              }}
            >
              {text}
            </Typography>
          ) : (
            <Typography variant="title" style={{ textAlign: 'center' }}>
              {text}
            </Typography>
          )}
        </Wrapper>
      ) : (
        <Wrapper style={{ paddingVertical: 5 }} onPress={() => onPressKey('')}>
          {children}
        </Wrapper>
      )}
    </>
  );
};
