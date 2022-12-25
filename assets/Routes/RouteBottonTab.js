import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

import { Register } from '../Pages/Register';
import { List } from '../Pages/List';

const Tab = createBottomTabNavigator();

export function RoutesTab() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Register" component={Register}  options={{
            tabBarIcon: ({ color }) => <FontAwesome name="calendar-plus-o" size={24} color="black" /> ,
            title: 'Register',
            headerShown: false,
            unmountOnBlur: true,
        }}/>
        
        <Tab.Screen name="List" component={List} options={{
            tabBarIcon: ({ color }) => <FontAwesome5 name="tasks" size={24} color="black" /> ,
            title: 'List',
            headerShown: false,
            unmountOnBlur: true,
        }} />
    </Tab.Navigator>
  );
}