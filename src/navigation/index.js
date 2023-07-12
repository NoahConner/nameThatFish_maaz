import React, {useContext, useEffect, useState} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  notificationService,
  requestUserPermission,
} from '../utils/PushNotifications';
import AppContext from '../context/AuthContext';
import {View} from 'react-native';
import AuthNavigator from './AuthNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loader, LoadingButton } from '../components';
import { OTP } from '../screens';
import ActivityIndicate from '../components/ActivityIndicate';


const AppContainer = () => {
  const context = useContext(AppContext);
  const [loading, setloading] = useState(true);

  const getUserToken = async () => {
    const value = await AsyncStorage.getItem('@auth_token');
    if (value !== null) {
     context.setuserToken(value);
     
    } else {
      context.setuserToken(null);
      
    }
  };
  const getUserId = async () => {
    const value = await AsyncStorage.getItem('@user_Id');
    if (value !== null) {
     context.setuserId(value);
     
    } else {
      context.setuserId(null);
      
    }
  };
  const getFcmToken = async () => {
    const value = await AsyncStorage.getItem('@user_Fcm');
    if (value !== null) {
     context.setFcmToken(value);
     
    } else {
      context.setFcmToken(null);
      
    }
  };

  const getUserDetails = async () => {
    await getUserToken();
    await getUserId();
    await getFcmToken();
  }; 
  useEffect(() => {
    // requestUserPermission();
    // notificationService();
    console.log(context.fcmToken,'Fcm Device Token');
     getUserDetails()
     
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 3000);

    GoogleSignin.configure({
      webClientId:
        '571425081993-522nlivuhap4a14p5fqhp7gp14i0021j.apps.googleusercontent.com',
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        {context.userToken ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      
    {/* <Loader/> */}
    </View>
  );
};

export default AppContainer;
