import { paymentsAPI } from '../../api/api';
import { createStore, createEvent, createEffect } from 'effector';
import { TInitialState } from './types';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const $payments = createStore<TInitialState>({} as TInitialState);

export const setData = createEvent<TInitialState>();

$payments.on(setData, (state, payload) => {
  return { ...state, ...payload };
});

export const getPayInfoFx = createEffect(async () => {
  let dataStorage = await getStoragePaymentsJSONFx().then(res => res);
  if (dataStorage == null) {
    let data = await paymentsAPI.getCategory();
    setStoragePaymentsJSONFx(data);
    setData(data);
  }
  setData(dataStorage);
});

const setStoragePaymentsJSONFx = createEffect(async (value: TInitialState) => {
  try {
    value.expireAt = Date.now();
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('payments', jsonValue);
  } catch (e) {
    console.log(e);
  }
});

const getStoragePaymentsJSONFx = createEffect(async () => {
  try {
    const value = await AsyncStorage.getItem('payments');
    if (value != null) {
      let data = JSON.parse(value);
      let time = Date.now() - data.expireAt;
      if (time < 86400000) return data;
      else AsyncStorage.removeItem('payments');
    }
    return null;
  } catch (e) {
    console.log(e);
  }
});
