import React from 'react';

import { OtpInput } from '../../molecules';
import { KeyboardCustom } from '../../organisms';
import { AuthOtpTemplate } from '../../templates';

type TProps = {
  keyArray: Array<string>;
  onPressKey: (text: string) => void;
  symbol: string;
  checkData: (value: string) => void;
  error: [number, boolean];
};

export const AuthOtpPages = ({
  keyArray,
  onPressKey,
  symbol,
  checkData,
  error,
}: TProps) => {
  return (
    <>
      <AuthOtpTemplate
        top={<OtpInput symbol={symbol} checkData={checkData} error={error} />}
        bottom={<KeyboardCustom keyArray={keyArray} onPressKey={onPressKey} />}
      />
    </>
  );
};
