import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AlertView } from '@shared/ui/core/atoms';
import { IconBank } from '@shared/ui/icons/tabs/bank';
import { IconMain } from '@shared/ui/icons/tabs/main';
import { IconPayments } from '@shared/ui/icons/tabs/payments';
import { IconProfile } from '@shared/ui/icons/tabs/profile';
import { StyleSheet, View } from 'react-native';
import { Bank } from '../Bank';
import { Main } from '../Main';
import { StackPayments } from '../Payments/stackPayments';
import { Profile } from '../Profile';

import { useStore } from 'effector-react';
import {
  $currentError,
  clearCurrentError,
} from '../../../bll/models/errors/custom-errors';
import { $app } from '../../../bll/models/app-model/app-store';
import { useEffect, useState } from 'react';
import { SplashScreenPages } from '@shared/ui/core/pages';
import { AuthPhoneInputConnector } from '../auth/auth-phone-input';
import { AuthStack } from '../auth';

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
  'Отмена',
  '0',
  'delete',
];

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
  const tabBar = useStore($app).tabBar;

  const currentError = useStore($currentError);

  const [loadingApp, setLoadingApp] = useState(true);
  if (loadingApp) setTimeout(() => setLoadingApp(false), 1000);
  return (
    <>
      {currentError.text ? (
        <AlertView text={currentError.text} onPress={clearCurrentError} />
      ) : null}
      {
        loadingApp ? <SplashScreenPages /> : <AuthStack />
        // <View style={styles.container}>

        //   <Tab.Navigator
        //     screenOptions={{
        //       tabBarStyle: {
        //         display: tabBar ? 'flex' : 'flex',
        //         backgroundColor: '#312C39',
        //         borderTopColor: '#312C39',
        //       },
        //       headerShown: tabBar,
        //     }}
        //   >
        //     <Tab.Screen
        //       name="Main"
        //       options={{
        //         tabBarLabel: 'Главная',
        //         tabBarLabelStyle: {
        //           lineHeight: 20,
        //         },
        //         headerTitle: 'Главная',
        //         tabBarIcon: ({ focused }) => {
        //           if (focused) return <IconMain color="#F678BA" />;
        //           return <IconMain color="#C2C1C6" />;
        //         },
        //         tabBarIconStyle: {
        //           marginBottom: -8,
        //         },
        //         headerStyle: {
        //           height: 116,
        //           backgroundColor: '#312C39',
        //           shadowColor: 'transparent',
        //         },
        //         headerTitleAlign: 'left',
        //         headerTitleStyle: {
        //           color: '#fff',
        //           fontWeight: '700',
        //           fontSize: 34,
        //         },
        //         headerTitleContainerStyle: {
        //           marginTop: 50,
        //         },
        //       }}
        //     >
        //       {props => <Main />}
        //     </Tab.Screen>
        //     <Tab.Screen
        //       name="Payments"
        //       options={{
        //         tabBarLabel: 'Платежи',
        //         tabBarLabelStyle: {
        //           lineHeight: 20,
        //         },
        //         headerTitle: 'Платежи',
        //         tabBarIcon: ({ focused }) => {
        //           if (focused) return <IconPayments color="#F678BA" />;
        //           return <IconPayments color="#C2C1C6" />;
        //         },
        //         tabBarIconStyle: {
        //           marginBottom: -13,
        //         },
        //         headerStyle: {
        //           height: 115,
        //           backgroundColor: '#312C39',
        //           shadowColor: 'transparent',
        //         },
        //         headerTitleAlign: 'left',
        //         headerTitleStyle: {
        //           color: '#fff',
        //           fontWeight: '700',
        //           fontSize: 34,
        //         },
        //         headerTitleContainerStyle: {
        //           marginTop: 50,
        //         },
        //       }}
        //     >
        //       {props => <StackPayments />}
        //     </Tab.Screen>
        //     <Tab.Screen
        //       name="Bank"
        //       options={{
        //         tabBarLabel: 'Банкоматы',
        //         headerTitle: 'Банкоматы',
        //         tabBarLabelStyle: {
        //           lineHeight: 20,
        //         },
        //         tabBarIcon: ({ focused }) => {
        //           if (focused) return <IconBank color="#F678BA" />;
        //           return <IconBank color="#C2C1C6" />;
        //         },
        //         tabBarIconStyle: {
        //           marginBottom: -8,
        //         },
        //         headerStyle: {
        //           height: 116,
        //           backgroundColor: '#312C39',
        //           shadowColor: 'transparent',
        //         },
        //         headerTitleAlign: 'left',
        //         headerTitleStyle: {
        //           color: '#fff',
        //           fontWeight: '700',
        //           fontSize: 34,
        //         },
        //         headerTitleContainerStyle: {
        //           marginTop: 50,
        //         },
        //       }}
        //     >
        //       {props => <Bank />}
        //     </Tab.Screen>
        //     <Tab.Screen
        //       name="Profile"
        //       options={{
        //         tabBarLabel: 'Профиль',
        //         headerTitle: 'Профиль',
        //         tabBarLabelStyle: {
        //           lineHeight: 20,
        //         },
        //         tabBarIcon: ({ focused }) => {
        //           if (focused) return <IconProfile color="#F678BA" />;
        //           return <IconProfile color="#C2C1C6" />;
        //         },
        //         tabBarIconStyle: {
        //           marginBottom: -8,
        //         },
        //         headerStyle: {
        //           height: 116,
        //           backgroundColor: '#312C39',
        //           shadowColor: 'transparent',
        //         },
        //         headerTitleAlign: 'left',
        //         headerTitleStyle: {
        //           color: '#fff',
        //           fontWeight: '700',
        //           fontSize: 34,
        //         },
        //         headerTitleContainerStyle: {
        //           marginTop: 50,
        //         },
        //       }}
        //     >
        //       {props => <Profile />}
        //     </Tab.Screen>
        //   </Tab.Navigator>
        // </View>
        //)
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
});
