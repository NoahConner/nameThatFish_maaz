import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../constants';
import SettingStack from './SettingStack';
import Notifications from '../screens/Notifications';
import Subscription from '../screens/Subscription';
import { Bell, HomeSvg, SettingSvg, SubscriptionBottomSvg } from '../assets/svg';
import HomeStack from './HomeStack';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.gray_100,
        tabBarStyle: {
          zIndex:1,
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          backgroundColor:colors.primary,
          paddingBottom: 0,
          height: moderateScale(48),
          position:'absolute',
          borderColor:colors.primary
          
        },
        tabBarIcon: () => {
          let Icon;

          if (route.name == 'SettingStack') {
            // focused ? (Icon = FocusedChatSvg) : (Icon = MessageSvg);
            Icon=SettingSvg
          } else if (route.name == 'Notifications') {
            // focused ? (Icon = FocusedUserSvg) : (Icon = UserOutlineSvg);
            Icon=Bell
          } else if (route.name == 'Subscription') {
            // focused ? (Icon = FocusedUsersquareSvg) : (Icon = ContactsSvg);
            Icon=SubscriptionBottomSvg
          }
          else if (route.name == 'Home') {
            // focused ? (Icon = FocusedUsersquareSvg) : (Icon = ContactsSvg);
            Icon=HomeSvg
          }

          return <Icon width={20} height={22} />;
        },
      })}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Subscription" component={Subscription} />
      <Tab.Screen name="SettingStack" component={SettingStack} />
    </Tab.Navigator>
  );
};

export default BottomTab;