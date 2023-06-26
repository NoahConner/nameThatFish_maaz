import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import { screenHeight, screenWidth } from '../constants/screenResolution';

const Loader = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/newLoader.gif')}
        resizeMode={'contain'}
        
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#FFF',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    height: screenHeight,
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    
  },
  logo: {
    width: moderateScale(150, 0.1),
    height: moderateScale(150, 0.1),


  },
});