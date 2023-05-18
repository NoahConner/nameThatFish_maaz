import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Settings from '../screens/Settings';
import PersonalInformation from '../screens/PersonalInformation';
import Help from '../screens/Help';
import TermsCondition from '../screens/TermsCondition';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import AboutUs from '../screens/AboutUs';

const Stack = createStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Settings'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="TermsCondition" component={TermsCondition} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
    </Stack.Navigator>
  );
};


export default SettingStack;