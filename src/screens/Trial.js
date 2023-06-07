import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Animated,
  Dimensions,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {BackSvg, ManWithFishSvg} from '../assets/svg';
import {colors, fonts} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import {Button, WavesAnimated} from '../components';
import AppContext from '../context/AuthContext';
import {screenHeight, screenWidth} from '../constants/screenResolution';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Trial = ({navigation}) => {
  const context = useContext(AppContext);
  const GirlAnimation = new Animated.Value(screenWidth + 250);
  const MobileAnimation = new Animated.Value(screenWidth + 250);
  
  const storeUserToken = async value => {
    try {
      await AsyncStorage.setItem('@auth_token', value);
     context.setuserToken(value);
     
    } catch (e) {}
  };

  useEffect(() => {
    startAnimations();
    
  }, []);

  const startAnimations = () => {
    Animated.timing(GirlAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(MobileAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ImageBackground
      source={require('../assets/images/backgroundPlain.png')}
      resizeMode="stretch"
      style={{flex: 1, height: screenHeight}}>
      <WavesAnimated/>

      <Animated.View
        style={{
          ...styles.fishIcon,
          transform: [{translateX: MobileAnimation}],
        }}>
        <ManWithFishSvg width={180} height={270} />
      </Animated.View>

      <Animated.View
        style={{...styles.container, transform: [{translateY: GirlAnimation}]}}>
        <Text style={{...styles.text}}>14 Days{'\n'}Free Trial</Text>
        <Text
          style={{
            ...styles.text,
            ...fonts.trial_head_sub,
            fontFamily:'Montserrat-Bold',
            marginLeft: moderateScale(5),
            marginVertical: moderateScale(10),
          }}>
          Our Subscriptions
        </Text>
        <Text style={{...styles.text, ...fonts.subHead}}>$499.00 / Year</Text>
        <Button
          marginTop={moderateScale(20)}
          onPress={() => {
            storeUserToken('122345')
            // setTimeout(() => {
            //   navigation.navigate('Subscription');
              
            // }, 2000);
          }}
          text={'Buy Now'}
        />
        <Text style={{...styles.text, ...fonts.trial_head_sub,fontFamily:'Montserrat-Bold',}}>
          Start Your Free Trial
        </Text>

        <Text
          style={{
            ...styles.text,
            ...fonts.text,
            marginVertical: moderateScale(20),
          }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </Text>
        <Button
          marginBottom={moderateScale(5)}
          marginTop={moderateScale(5)}
          onPress={() => {
            storeUserToken('122345')
            // setTimeout(() => {
            //   navigation.navigate('HomeScreen');
            // }, 2000);
          }}
          text={'Start'}
        />
      </Animated.View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: moderateScale(20),
    width: moderateScale(323),
    marginTop: moderateScale(155),
    left:moderateScale(0)
    // marginBottom:moderateScale(30),
    // borderWidth:1,
    // borderColor:'#000'
  },
  icon: {
    position: 'absolute',
    left: moderateScale(15),
    top: moderateScale(15),
  },
  fishIcon: {
    position: 'absolute',
    right: moderateScale(0),
    top: moderateScale(45),
    width: moderateScale(screenWidth - 210)
  },
  text: {
    ...fonts.trial_head,
    fontFamily:'Montserrat-Bold',
    color: colors.white,
    width: moderateScale(290),
  },
});
export default Trial;
