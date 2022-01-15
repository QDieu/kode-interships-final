import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Button } from '../../molecules';
import { AuthPhoneInput, KeyboardCustom } from '../../organisms';
import { AuthPhoneTemplate } from '../../templates/auth-phone-template';

type TProps = {
  onFocusNumber: () => void;
  valueNumber: string;
  checkData: () => void;
  keyArray: Array<string>;
  flagKeyboard: boolean;
  dismissKeyboard: () => void;
  onPressKey: (value: string) => void;
  isLoading: boolean;
  resetTextNumber: () => void;
};

export const AuthPhonePages = ({
  onFocusNumber,
  valueNumber,
  checkData,
  keyArray,
  flagKeyboard,
  dismissKeyboard,
  onPressKey,
  isLoading,
  resetTextNumber,
}: TProps) => {
  return (
    <AuthPhoneTemplate
      top={
        <AuthPhoneInput
          onFocusNumber={onFocusNumber}
          valueNumber={valueNumber}
          flagKeyboard={flagKeyboard}
          dismissKeyboard={dismissKeyboard}
          isLoading={isLoading}
          resetTextNumber={resetTextNumber}
        />
      }
      bottom={
        !flagKeyboard ? (
          <Button text={'Войти'} checkData={checkData} />
        ) : (
          <>
            <Button
              text={'Войти'}
              checkData={checkData}
              flagKeyboard={flagKeyboard}
            />
            <KeyboardCustom
              keyArray={keyArray}
              onPressKey={onPressKey}
              repeatRequest={() => {}}
            />
          </>
        )
      }
    />
  );
};
