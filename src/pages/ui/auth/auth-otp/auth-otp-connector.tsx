import {
  $otp,
  setGuessToken,
  setOtpData,
} from '@bll/models/auth-model/auth-store';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthOtpPages } from '@shared/ui/core/pages';
import { useStore } from 'effector-react';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import { TNavigationParamsList } from '../auth-stack';

type TProps = NativeStackScreenProps<TNavigationParamsList, 'otp'>;

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
  'Again',
  '0',
  'delete',
];

export const AuthOtpConnector = ({ navigation }: TProps) => {
  const [symbol, setSymbol] = useState('');
  const otp = useStore($otp);
  const [error, setError] = useState<[number, boolean]>([5, false]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const quitError = () => {
    Alert.alert(
      'Вы ввели неверно код 5 раз',
      'Данная сессия авторизации будет сброшена! ',
      [
        {
          text: 'Выход',
          onPress: () => {
            navigation.popToTop();
            navigation.navigate('phone', {});
          },
          style: 'cancel',
        },
      ],
    );
  };

  const checkData = (value: string) => {
    if (value == otp.otpCode) {
      setIsLoading(true);
      fetch(
        `https://stoplight.io/mocks/kode-education/kode-bank/27774162/api/auth/confirm`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer 123',
          },
          body: JSON.stringify(otp),
        },
      )
        .then(response => response.json())
        .then(data => {
          setIsLoading(false);
          if (data.guestToken != undefined) {
            setGuessToken(data.guestToken);
            navigation.navigate('password', {});
          } else navigation.navigate('error', {});
        })
        .catch(err => {
          setIsLoading(false);
          navigation.navigate('error', {});
        });
    } else {
      setError([--error[0], true]);
      if (error[0] == 0) quitError();
    }
  };

  const pressKey = (value: string) => {
    if (value == '')
      setSymbol(prevState => prevState.slice(0, prevState.length - 1));
    else if (symbol.length == 4) return;
    else setSymbol(prevState => prevState + value);
  };

  useEffect(() => {
    if (symbol.length == 4) checkData(symbol);
  }, [symbol]);

  const repeatRequest = () => {
    fetch(
      `https://stoplight.io/mocks/kode-education/kode-bank/27774162/api/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 123',
        },
        body: JSON.stringify(otp.phone),
      },
    )
      .then(response => response.json())
      .then(data => {
        if (data.otpCode != undefined) {
          setOtpData({
            otpCode: data.otpCode,
            otpId: data.otpId,
            phone: otp.phone,
          });
          navigation.navigate('otp', {});
        } else navigation.navigate('error', {});
      })
      .catch(err => {
        navigation.navigate('error', {});
      });
  };

  return (
    <>
      <View
        style={{
          height: '100%',
          backgroundColor: '#312C39',
          justifyContent: 'center',
          display: isLoading ? 'flex' : 'none',
        }}
      >
        <ActivityIndicator size="large" color="#fff" />
      </View>
      <AuthOtpPages
        keyArray={array}
        onPressKey={pressKey}
        otp={symbol}
        error={error}
        repeatRequest={repeatRequest}
      />
    </>
  );
};
