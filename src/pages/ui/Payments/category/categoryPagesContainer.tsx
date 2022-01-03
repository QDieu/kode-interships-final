import { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TNavigationParamsList } from '../stackPayments';
import { CategoryPages } from '@shared/ui/core/pages';
import { TMobileListParams } from '../categoryMobile/types';
import { useStore } from 'effector-react';
import {
  $payments,
  getPayInfoFx,
} from '../../../../bll/models/payments-model/payments-store';
import { setViewBar } from '../../../../bll/models/app-model/app-store';
import { useQuery } from 'react-query';

export type TPaymentsListParams = {};

type TProps = NativeStackScreenProps<TNavigationParamsList, 'payments'>;

export type TServices = {
  service_id: string;
  service_name: string;
  service_icon: string;
};

export type TCategory = {
  category_id: string;
  category_name: string;
  category_icon: string;
  services: Array<TServices>;
};

export type TInitialState = {
  category: Array<TCategory>;
  expireAt?: number;
};

export const categoryPagesContainer: React.FC<TProps> = ({ navigation }) => {
  // EFFECTOR STORE
  // useEffect(() => {
  //   getPayInfoFx();
  // }, []);

  // const paymentsInfoStore = useStore($payments);

  const query = useQuery('payments', async () => {
    const res = await fetch(
      'https://stoplight.io/mocks/kode-education/kode-bank/27774161/api/core/payment/list',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 123',
        },
      },
    );
    return res.json();
  });

  const pressLink = (services: TMobileListParams) => {
    navigation.navigate('mobile', services);
    setViewBar(false);
  };

  return (
    <View style={styles.container}>
      {query.isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <CategoryPages category={query.data} pressLink={pressLink} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#352F3D',
    height: '100%',
    paddingTop: 16,
  },
});
