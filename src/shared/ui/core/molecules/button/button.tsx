import React from 'react';
import styled from 'styled-components/native';
import { Typography } from '../../typography';

type PropsType = {
  flagKeyboard: boolean;
};

const Wrapper = styled.View<PropsType>`
  margin-bottom: ${({ theme, flagKeyboard }) =>
    flagKeyboard ? 0 : theme.spacing(3)}px;
  margin-left: ${({ theme }) => theme.spacing(2)}px;
  margin-right: ${({ theme }) => theme.spacing(2)}px;
`;

const TouchWrapper = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing(2)}px 0;
  width: 100%;
  background-color: #6c78e8;
  border-radius: ${({ theme }) => theme.spacing(3.25)}px;
`;

type TProps = {
  text: string;
  checkData: () => void;
  flagKeyboard?: boolean;
};

export const Button = ({ text, checkData, flagKeyboard = false }: TProps) => {
  return (
    <Wrapper flagKeyboard={flagKeyboard}>
      <TouchWrapper activeOpacity={0.7} onPress={() => checkData()}>
        <Typography
          variant="button"
          style={{
            textAlign: 'center',
            color: '#fff',
            fontWeight: '600',
            fontSize: 15,
          }}
        >
          {text}
        </Typography>
      </TouchWrapper>
    </Wrapper>
  );
};
