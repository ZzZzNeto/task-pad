import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../Pages/Home';
import { RoutesTab } from './RouteBottonTab'; 

const Stack = createNativeStackNavigator();

export function RoutesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}  />
      <Stack.Screen name="teste" component={RoutesTab}  options={{ headerShown: false }}  />
    </Stack.Navigator>
  );
}