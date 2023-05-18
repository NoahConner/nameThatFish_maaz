import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Signup from '../screens/Signup';
import ForgotPassword from '../screens/ForgotPassword';
import ChangePassword from '../screens/ChangePassword';
import ResetPassword from '../screens/ResetPassword';
import  SignIn  from '../screens/SignIn';



const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      
    </Stack.Navigator>
  );
};

export default AuthNavigator;