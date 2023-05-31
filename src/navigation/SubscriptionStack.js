import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Subscription from '../screens/Subscription';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const SubscriptionStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Subscription'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  );
};

export default SubscriptionStack;