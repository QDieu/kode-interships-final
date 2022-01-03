import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TNavigationParamsList } from '../stackPayments';
import { CategoryPages } from '@shared/ui/core/pages';
import { TPayFormContainer } from '../payForm/types';
import { setViewBar } from '../../../../bll/models/app-model/app-store';
import { useStore } from 'effector-react';
import {
  $filterData,
  setData,
  setFilter,
  clearData,
} from '../../../../bll/models/search-model/payments-store';

type TProps = NativeStackScreenProps<TNavigationParamsList, 'mobile'>;

export const categoryMobileContainer: React.FC<TProps> = ({
  navigation,
  route,
}) => {
  const services = route.params.serviсes;

  useEffect(() => {
    setData(services);
    return () => {
      clearData();
    };
  }, []);

  let filterData = useStore($filterData);

  useEffect(() => {
    navigation.addListener('beforeRemove', () => {
      setViewBar(true);
    });

    navigation.setOptions({
      headerTitle: 'Мобильная связь',
      headerTitleStyle: { color: '#fff' },
      headerBackTitle: '',
      headerStyle: { backgroundColor: '#312C39' },
    });
  }, [navigation]);

  navigation.setOptions({
    headerSearchBarOptions: {
      onChangeText: event => setFilter(event.nativeEvent.text),
      placeholder: 'Поиск',
    },
  });

  const categoryMobile = {
    category: filterData.map(item => ({
      category_icon: item.service_icon,
      category_id: item.service_id,
      category_name: item.service_name,
      services: null,
      bigIcon: true,
    })),
  };

  const pressLink = (services: TPayFormContainer) => {
    navigation.navigate('payform', services);
  };

  return (
    <View style={styles.container}>
      {categoryMobile.category.length ? (
        <CategoryPages category={categoryMobile} pressLink={pressLink} />
      ) : (
        <Text style={styles.text}>По вашему запросу ничего не найдено</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#352F3D',
    height: '100%',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
