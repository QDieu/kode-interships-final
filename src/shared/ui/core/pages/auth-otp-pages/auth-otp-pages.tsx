import React from 'react';

import { OtpInput } from '../../molecules';
import { KeyboardCustom } from '../../organisms';
import { AuthOtpTemplate } from '../../templates';

type TProps = {
  keyArray: Array<string>;
  onPressKey: (text: string) => void;
  otp: string;
  error: [number, boolean];
  repeatRequest: () => void;
};

export const AuthOtpPages = ({
  keyArray,
  onPressKey,
  otp,
  error,
  repeatRequest,
}: TProps) => {
  return (
    <>
      <AuthOtpTemplate
        top={<OtpInput otp={otp} error={error} />}
        bottom={
          <KeyboardCustom
            keyArray={keyArray}
            onPressKey={onPressKey}
            repeatRequest={repeatRequest}
          />
        }
      />
    </>
  );
};
