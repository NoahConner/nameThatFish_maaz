import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ChangePassword,
  ForgotPassword,
  Intro,
  OTP,
  ResetPassword,
  SignIn,
  Signup,
  Slider,
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
      <Stack.Screen name="OTP" component={OTP} />
      
    </Stack.Navigator>
  );
};

export default AuthNavigator;
