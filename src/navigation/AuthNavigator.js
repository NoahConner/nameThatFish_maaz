import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ChangePassword,
  ForgotPassword,
  Intro,
  ResetPassword,
  SignIn,
  Signup,
  Slider,
  Subscription,
  Trial,
} from '../screens';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Slider"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Slider" component={Slider} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Trial" component={Trial} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      {/* <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="HomeScreen" component={BottomTab} /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
