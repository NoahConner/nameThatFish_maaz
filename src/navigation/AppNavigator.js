import React  from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './BottomTab';


const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={BottomTab} />
      <Stack.Screen name="SettingScreen" component={BottomTab} />
      <Stack.Screen name="SubscriptionScreen" component={BottomTab} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
