import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PayformPages } from '@shared/ui/core/pages';
import { addError } from '../../../../bll/models/errors/custom-errors';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { TNavigationParamsList } from '../stackPayments';
import { useQuery } from 'react-query';

type TProps = NativeStackScreenProps<TNavigationParamsList, 'payform'>;

type TResponseType = {
  service_id: number;
  cashback_percentage?: number;
  recipient_mask: string;
  comment_mask?: string | null;
};

export const PayFormContainer: React.FC<TProps> = ({ navigation, route }) => {
  //Настройка шапки
  useEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.name,
      headerTitleStyle: { color: '#fff' },
      headerBackTitle: '',
      headerStyle: { backgroundColor: '#312C39' },
    });
  }, [route, navigation]);

  const { data } = useQuery(
    `services${route.params.id}`,
    async (): Promise<TResponseType> => {
      const res = await fetch(
        `https://stoplight.io/mocks/kode-education/kode-bank/27774161/api/core/payment/${route.params.id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer 123',
          },
        },
      );
      return res.json();
    },
  );

  const parseMask = (mask: string | undefined) => {
    if (mask == undefined) return;
    let temp =
      '+{7} ' + mask.replace(new RegExp('X', 'g'), '0').replace('9', '{9}');
    return temp;
  };

  const setCashback = (cashback: number | undefined) => {
    if (cashback == undefined) return 10;
    return cashback / 100;
  };
  let cashback = setCashback(data?.cashback_percentage);

  const [valueNumber, setValueNumber] = useState('');
  const [valueSum, setValueSum] = useState('');
  const onFocusNumber = () => {
    if (!valueNumber) setValueNumber('+7');
  };

  const onChangeTextNumber = (number: string) => {
    setValueNumber(number);
  };

  const resetTextNumber = () => {
    setValueNumber('');
  };

  const onChangeTextSum = (sum: string) => {
    setValueSum(sum);
  };

  const onPressChips = (sum: string) => {
    setValueSum(sum);
  };

  const checkData = () => {
    if (valueNumber.length !== 16)
      addError({ text: 'Проверьте номер телефона', delay: 3000 });
    else if (!(+valueSum > 1 && +valueSum < 2000))
      addError({ text: 'Проверьте сумму', delay: 3000 });
    else
      navigation.navigate('confirmpay', {
        number: valueNumber,
        sum: valueSum,
        cashback: Math.floor(+valueSum / cashback),
        namePay: route.params.name,
        id: route.params.id,
      });
  };

  const numberFunction = {
    onFocusNumber,
    onChangeTextNumber,
    resetTextNumber,
    valueNumber,
    mask: parseMask(data?.recipient_mask),
  };

  const sumFunction = {
    onChangeTextSum,
    valueSum,
    cashback: cashback,
  };

  const chipsFunction = {
    onPressChips,
  };

  return (
    <PayformPages
      uri={route.params.uri}
      numberFunction={numberFunction}
      sumFunction={sumFunction}
      chipsFunction={chipsFunction}
      checkData={checkData}
    />
  );
};

const styles = StyleSheet.create({});
