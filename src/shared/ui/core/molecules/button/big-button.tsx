import React from 'react';
import styled from 'styled-components/native';
import { Typography } from '../../typography';

const Wrapper = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing(4)}px;
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
};

export const BigButton = ({ text, checkData }: TProps) => {
  return (
    <Wrapper>
      <TouchWrapper activeOpacity={0.7} onPress={() => checkData()}>
        <Typography
          variant="subtitle"
          style={{
            textAlign: 'center',
            color: '#fff',
            fontWeight: '600',
            fontSize: 17,
            lineHeight: 22,
          }}
        >
          {text}
        </Typography>
      </TouchWrapper>
    </Wrapper>
  );
};
