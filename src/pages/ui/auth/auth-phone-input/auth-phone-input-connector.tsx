import { AuthPhonePages } from '@shared/ui/core/pages';
import {
  $auth,
  setKeyboardView,
  setOtpData,
} from '@bll/models/auth-model/auth-store';
import { useStore } from 'effector-react';
import React, { useEffect, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { addError } from '@bll/models/errors/custom-errors';
import { useQuery } from 'react-query';
import { TResponseType } from './types';
import { TNavigationParamsList } from '../auth-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type TProps = NativeStackScreenProps<TNavigationParamsList, 'phone'>;

let array = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'Отмена',
  '0',
  'delete',
];

export const AuthPhoneInputConnector = ({ navigation }: TProps) => {
  const [valueNumber, setValueNumber] = useState('');

  const flagKeyboard = useStore($auth).flagKeyboard;
  const onFocusNumber = () => {
    setKeyboardView(true);
  };

  const dismissKeyboard = () => {
    //Keyboard.dismiss для разфокусировки инпута
    Keyboard.dismiss();
    setKeyboardView(false);
  };

  const onPressKey = (value: string) => {
    if (valueNumber == '') {
      value = '+79' + value;
    }
    if (value === 'Отмена') dismissKeyboard();
    else if (value == '')
      setValueNumber(valueNumber.slice(0, valueNumber.length - 1));
    else if (valueNumber.length < 12) {
      setValueNumber(valueNumber + value);
      console.log(valueNumber);
    }
  };

  const resetTextNumber = () => {
    setValueNumber('');
  };

  const [isLoading, setIsLoading] = useState(false);

  const checkData = () => {
    if (valueNumber.length != 12) {
      console.log(valueNumber);
      addError({
        text: 'Пожалуйста, убедитесь, что вы правильно ввели номер телефона',
        delay: 2000,
      });
    } else {
      setIsLoading(true);
      //искуственная задержка
      setTimeout(() => {
        fetch(
          `https://stoplight.io/mocks/kode-education/kode-bank/27774162/api/auth/login`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer 123',
            },
            body: valueNumber,
          },
        )
          .then(response => response.json())
          .then(data => {
            setIsLoading(false);
            if (data.otpCode != undefined) {
              setOtpData({
                otpCode: data.otpCode,
                otpId: data.otpId,
                phone: valueNumber,
              });
              navigation.navigate('otp', {});
            } else navigation.navigate('error', {});
          })
          .catch(err => {
            setIsLoading(false);
            navigation.navigate('error', {});
          });
      }, 1000);
    }
  };

  return (
    <AuthPhonePages
      checkData={checkData}
      flagKeyboard={flagKeyboard}
      keyArray={array}
      onFocusNumber={onFocusNumber}
      valueNumber={valueNumber}
      dismissKeyboard={dismissKeyboard}
      onPressKey={onPressKey}
      isLoading={isLoading}
      resetTextNumber={resetTextNumber}
    />
  );
};
