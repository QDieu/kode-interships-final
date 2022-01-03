import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ConfrimpayPages } from '@shared/ui/core/pages';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { TNavigationParamsList } from '../stackPayments';

type TProps = NativeStackScreenProps<TNavigationParamsList, 'confirmpay'>;

export const ConfrimPayConnector: React.FC<TProps> = ({
  navigation,
  route,
}) => {
  //Шапка
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Подтверждение',
      headerTitleStyle: { color: '#fff' },
      headerBackTitle: '',
      headerStyle: { backgroundColor: '#312C39' },
    });
  }, [navigation]);

  const postData = {
    card_id: 1,
    service_id: route.params.id,
    size: +route.params.sum,
    size_cashback: route.params.cashback,
    period_from: '123',
  };

  const array = [
    ['Карта для оплаты', 'Карта зарплатная'],
    ['Телефон получателя', route.params.number],
    ['Мобильный оператор', route.params.namePay],
    ['Имя получателя', 'Иван Иванович И.'],
    ['Сумма платежа', route.params.sum],
    ['Кешбек', route.params.cashback.toString()],
  ];

  const checkData = () => {
    navigation.navigate('paysuccess', {
      data: JSON.stringify(postData),
      sum: route.params.sum,
    });
  };

  return <ConfrimpayPages checkData={checkData} arrayInfo={array} />;
};
