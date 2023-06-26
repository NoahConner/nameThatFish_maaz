import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import History from '../screens/History';
import Result from '../screens/Result';
import { ResultHistory } from '../screens';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="ResultHistory" component={ResultHistory} />
      
    </Stack.Navigator>
  );
};


export default HomeStack;