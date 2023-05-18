import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTab';
import Slider from '../screens/Slider';
import Intro from '../screens/Intro';
import Signup from '../screens/Signup';
import ForgotPassword from '../screens/ForgotPassword';
import ChangePassword from '../screens/ChangePassword';
import ResetPassword from '../screens/ResetPassword';
import { SignIn } from '../screens';
import Home from '../screens/Home';
import Trial from '../screens/Trial';
import History from '../screens/History';
import Result from '../screens/Result';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Slider"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SettingScreen" component={BottomTab} />
      {/* <Stack.Screen name="HomeScreen" component={BottomTab} /> */}
      <Stack.Screen name="Slider" component={Slider} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />

      {/* <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Trial" component={Trial} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Result" component={Result} /> */}

    </Stack.Navigator>
  );
};

export default StackNavigation;