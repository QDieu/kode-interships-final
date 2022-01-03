import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  categoryPagesContainer,
  ConfrimPayConnector,
  PaySuccessConnector,
} from '.';
import { TPaymentsListParams } from './category/categoryPagesContainer';
import { categoryMobileContainer } from './categoryMobile';
import { TMobileListParams } from './categoryMobile/types';
import { TConfrimPayConnector } from './confrim-pay/types';
import { TPaySuccessConnector } from './pay-success/types';
import { PayFormContainer } from './payForm';
import { TPayFormContainer } from './payForm/types';

export type TNavigationParamsList = {
  payments: TPaymentsListParams;
  mobile: TMobileListParams;
  payform: TPayFormContainer;
  confirmpay: TConfrimPayConnector;
  paysuccess: TPaySuccessConnector;
};

const Stack = createNativeStackNavigator<TNavigationParamsList>();

export const StackPayments = () => {
  return (
    <Stack.Navigator initialRouteName="payments">
      <Stack.Screen
        name="payments"
        component={categoryPagesContainer}
        options={({ navigation }) => ({
          title: 'Payments',
          navigation: navigation,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="mobile"
        component={categoryMobileContainer}
        options={({ navigation }) => ({
          title: 'Mobile',
        })}
      />
      <Stack.Screen
        name="payform"
        component={PayFormContainer}
        options={({ navigation }) => ({
          title: 'Payform',
        })}
      />
      <Stack.Screen
        name="confirmpay"
        component={ConfrimPayConnector}
        options={({ navigation }) => ({
          title: 'Confrimpay',
        })}
      />
      <Stack.Screen
        name="paysuccess"
        component={PaySuccessConnector}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};
