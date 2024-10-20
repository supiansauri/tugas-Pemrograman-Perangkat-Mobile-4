import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import StartScreen from '../screens/StartScreen';
// import Main from '../screens/TabScreen/Main';
import Detail from '../screens/Detail';
import Order from '../screens/Order';
import TabNavigator from './TabNavigator';
import { CoffeeItem } from '../models/coffeeItem';

export type RootStackParamList = {
  StartScreen: undefined;
  MainTabs: undefined;
  Detail: { item: CoffeeItem };  // Here we specify that Detail takes a CoffeeItem
  Order: undefined;
};

type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Detail'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs" screenOptions={{headerShown: false}}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Order" component={Order} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
