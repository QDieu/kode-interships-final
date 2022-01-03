import { $guessToken } from '@bll/models/auth-model/auth-store';
import { addError } from '@bll/models/errors/custom-errors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthPasswordPages } from '@shared/ui/core/pages';
import { useStore } from 'effector-react';
import { useState } from 'react';
import { TNavigationParamsList } from '../auth-stack';

type TProps = NativeStackScreenProps<TNavigationParamsList, 'password'>;

export const AuthPasswordConnector = ({ navigation }: TProps) => {
  const [password, setPassword] = useState('');
  const guestToken = useStore($guessToken);

  const onChangeText = (text: string) => setPassword(text);

  const checkData = () => {
    if (password.length < 5)
      addError({
        text: 'Длина пароля должна быть не менее 5 символов',
        delay: 3000,
      });
    else if (password.match(/^[a-zA-Z0-9]+$/) == null)
      addError({
        text: 'Пароль может содержать только цифры и буквы',
        delay: 3000,
      });
    else {
      fetch(
        `https://stoplight.io/mocks/kode-education/kode-bank/27774162/api/auth/enter`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer 123',
          },
          body: JSON.stringify({
            guestToken: guestToken,
            password: password,
          }),
        },
      )
        .then(response => response.json())
        .then(data => {
          if (data.accessToken && data.refreshToken)
            navigation.navigate('end', {});
          else console.log('Окно ошибки');
        })

        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <AuthPasswordPages
        password={password}
        onChangeText={onChangeText}
        checkData={checkData}
      />
    </>
  );
};
