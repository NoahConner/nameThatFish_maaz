import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {LogoSvg} from '../assets/svg';
import {Button, MainHeading, } from '../components';
import {moderateScale} from 'react-native-size-matters';
import WavesAnimated from '../components/WavesAnimated';

const Intro = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/Rectangle.png')}
      resizeMode="stretch"
      style={{flex: 1,alignItems:'center'}}>
      {/* <WavesAnimated/> */}
      
        <View
          style={{
            marginTop: moderateScale(115),
            marginBottom: moderateScale(115),
            
          }}>
          <LogoSvg width={270} height={120} />
        </View>
        <MainHeading name={'Welcome'} />
        <Button
          onPress={() => {
            navigation.navigate('Trial');
          }}
          text={'Get Started'}
          width={moderateScale(123)}
        />
      
    </ImageBackground>
  );
};

export default Intro;
