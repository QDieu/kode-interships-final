import React from 'react';
import { styled } from '@shared/ui/theme';
import { BigButton, CheckPay } from '../../molecules';

const Wrapper = styled.View`
  background-color: #312c39;
  flex: 1;
`;

const BottomWrapper = styled.View`
  margin-top: auto;
`;

type TProps = {
  success: boolean;
  sum: string;
  checkData: () => void;
};

export const PaySuccess = ({ success, sum, checkData }: TProps) => {
  return (
    <Wrapper>
      <CheckPay success={success} sum={sum} />
      <BottomWrapper>
        <BigButton checkData={checkData} text={'Готово'} />
      </BottomWrapper>
    </Wrapper>
  );
};
