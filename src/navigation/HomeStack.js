import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Trial from '../screens/Trial';
import Home from '../screens/Home';
import History from '../screens/History';
import Result from '../screens/Result';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Trial'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="TrialScreen" component={Trial} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
};


export default HomeStack;