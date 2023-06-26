import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  
} from 'react-native';
import React, {useState} from 'react';
import {colors,} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import {Button, MainHeading} from '../components';
import {screenHeight} from '../constants/screenResolution';
import WavesAnimated from '../components/WavesAnimated';
import OTPInputView from '@twotalltotems/react-native-otp-input'

const OTP = ({navigation,route}) => {
  const email= route?.params;
console.log({email});
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/backgroundPlain.png')}
        resizeMode="stretch"
        style={{flex: 1, alignItems: 'center', height: screenHeight}}>
        <WavesAnimated />

        <MainHeading
          name={'OTP'}
          marginTop={moderateScale(60)}
          marginBottom={moderateScale(30)}
        />

        <OTPInputView
    style={{width: '80%', height: 200}}
    pinCount={4}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    autoFocusOnLoad={true}
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    selectionColor='#FFF'
    onCodeFilled = {(code => {
        navigation.navigate('ChangePassword',{OTPCode:code,email})
    })}
/>
        
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    borderStyleBase: {
        width: 30,
        height: 45
      },
    
      borderStyleHighLighted: {
        borderColor: colors.white,
      },
    
      underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 2,
      },
    
      underlineStyleHighLighted: {
        borderColor: colors.white,
      },
});
export default OTP;
