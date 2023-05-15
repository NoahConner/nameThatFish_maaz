import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {BackSvg} from '../assets/svg';
import {colors, fonts} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import { MainHeading } from '../components';

const Notifications = () => {
  
  return (
    <ImageBackground
      source={require('../assets/images/Rectangle.png')}
      resizeMode="stretch"
      style={{flex: 1,alignItems:'center'}}>
      <TouchableOpacity style={styles.icon}>
        <BackSvg width={20} height={20} />
      </TouchableOpacity>
    <MainHeading name={'Notifications'} marginTop={moderateScale(60)}/>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth:1,
    // borderColor:colors.white,
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    left: moderateScale(15),
    top: moderateScale(15),
  },
  uploadIcon: {
    position: 'absolute',
    right: moderateScale(20),
    top: moderateScale(25),
    alignItems: 'center',
  },
  text: {
    ...fonts.trial_head,
    color: colors.white,
    width: moderateScale(290),
  },
});
export default Notifications;
