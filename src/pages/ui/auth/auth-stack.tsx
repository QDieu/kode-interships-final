import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AuthPhoneInputConnector, AuthOtpConnector } from '.';
import { AuthEndConnector } from './auth-end';
import { TParamsEndAuth } from './auth-end/types';
import { TParamsOtp } from './auth-otp/types';
import { AuthPasswordConnector } from './auth-password';
import { TParamsPassword } from './auth-password/types';
import { TParamsPhoneInput } from './auth-phone-input/types';

export type TNavigationParamsList = {
  phone: TParamsPhoneInput;
  otp: TParamsOtp;
  password: TParamsPassword;
  end: TParamsEndAuth;
};

const Stack = createNativeStackNavigator<TNavigationParamsList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="phone">
      <Stack.Screen
        name="phone"
        component={AuthPhoneInputConnector}
        options={({ navigation }) => ({
          navigation: navigation,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="otp"
        component={AuthOtpConnector}
        options={({ navigation }) => ({
          navigation: navigation,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="password"
        component={AuthPasswordConnector}
        options={({ navigation }) => ({
          navigation: navigation,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="end"
        component={AuthEndConnector}
        options={({ navigation }) => ({
          navigation: navigation,
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};
