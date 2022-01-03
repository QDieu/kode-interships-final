import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PaySuccessPages } from '@shared/ui/core/pages';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useQuery } from 'react-query';
import { TNavigationParamsList } from '../stackPayments';

type TProps = NativeStackScreenProps<TNavigationParamsList, 'paysuccess'>;

export const PaySuccessConnector: React.FC<TProps> = ({
  navigation,
  route,
}) => {
  const query = useQuery('post', async () => {
    const res = await fetch(
      `https://stoplight.io/mocks/kode-education/kode-bank/27774161/api/core/history`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 123',
        },
        body: route.params.data,
      },
    )
      .then(response => response.json())
      .catch(err => err);
    return res;
  });

  let success = false,
    isLoading = query.isLoading;
  if (query != undefined && !isLoading) {
    if (query.data.success == true) success = true;
  }

  const checkData = () => {
    navigation.navigate('payments', {});
    query.remove();
  };
  return (
    <>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <PaySuccessPages
          success={success}
          sum={route.params.sum}
          checkData={checkData}
        />
      )}
    </>
  );
};
