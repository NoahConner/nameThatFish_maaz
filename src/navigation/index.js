
import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import {SafeAreaView, View} from 'react-native';




const AppContainer = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 3000);
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
