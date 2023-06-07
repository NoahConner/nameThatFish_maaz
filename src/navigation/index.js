import React, {useContext, useEffect} from 'react';
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

const AppContainer = () => {
  const context = useContext(AppContext);

  const getUserToken = async () => {
    const value = await AsyncStorage.getItem('@auth_token');
    if (value !== null) {
     context.setuserToken(value);
     
    } else {
      context.setuserToken(null);
      
    }
  };

  useEffect(() => {
    requestUserPermission();
    notificationService();
     getUserToken();
    
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
    </View>
  );
};

export default AppContainer;
