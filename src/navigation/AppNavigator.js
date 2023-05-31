import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './BottomTab';
import Slider from '../screens/Slider';
import Intro from '../screens/Intro';
import Signup from '../screens/Signup';
import ForgotPassword from '../screens/ForgotPassword';
import ChangePassword from '../screens/ChangePassword';
import ResetPassword from '../screens/ResetPassword';
import {SignIn} from '../screens';
import Trial from '../screens/Trial';
import AppContext from '../context/AuthContext';
import Subscription from '../screens/Subscription';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const context = useContext(AppContext);
// console.log(context.userToken,'fdgf')
  return (
    <Stack.Navigator
      initialRouteName="Slider"
      screenOptions={{headerShown: false}}>
      {context.userToken == null ? (
        <>
          <Stack.Screen name="Slider" component={Slider} />
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Trial" component={Trial} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="Subscription" component={Subscription} />
          <Stack.Screen name="HomeScreen" component={BottomTab} />
        </>
      ) : (
        <>
          <Stack.Screen name="HomeScreen" component={BottomTab} />
          <Stack.Screen name="SettingScreen" component={BottomTab} />
          <Stack.Screen name="SubscriptionScreen" component={BottomTab} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
