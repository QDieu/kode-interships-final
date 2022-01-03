import React from 'react';
import { PaySuccess } from '../../organisms';
import { PaySuccessTemplate } from '../../templates';

type TProps = {
  checkData: () => void;
  success: boolean;
  sum: string;
};

export const PaySuccessPages: React.FC<TProps> = ({
  checkData,
  success,
  sum,
}) => {
  return (
    <PaySuccessTemplate
      paysuccess={
        <PaySuccess checkData={checkData} success={success} sum={sum} />
      }
    />
  );
};
