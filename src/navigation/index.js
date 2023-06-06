
import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import {SafeAreaView, View} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { notificationService,requestUserPermission } from '../utils/PushNotifications';


const AppContainer = () => {
  
  useEffect(() => {
    requestUserPermission()
    notificationService()
    
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 3000);
    
    GoogleSignin.configure({
      webClientId: '571425081993-522nlivuhap4a14p5fqhp7gp14i0021j.apps.googleusercontent.com',
    });
   
  }, []);

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    
      
    </View>
  );
};

export default AppContainer;
