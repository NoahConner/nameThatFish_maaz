import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {
  AppleSvg,
  BackSvg,
  BubbleSvg,
  EmailSvg,
  GoogleSvg,
  PasswordSvg,
} from '../assets/svg';
import {colors, fonts} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import {Button, CustomInput, MainHeading} from '../components';

const ForgotPassword = () => {
  const [email, setemail] = useState(null);
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/Rectangle.png')}
        resizeMode='stretch'
        style={{flex: 1, alignItems: 'center'}}>
        <TouchableOpacity style={styles.icon}>
          <BackSvg width={20} height={20} />
        </TouchableOpacity>
        <MainHeading
          name={'Forget Password'}
          marginTop={moderateScale(100)}
          marginBottom={moderateScale(70)}
        />
        <View style={{right: moderateScale(130), top: moderateScale(30)}}>
          <EmailSvg width={18} height={15} />
        </View>
     
      
        <CustomInput
          paddingLeft={moderateScale(40)}
          placeholder={'Email Address'}
          value={email}
          setValue={e => setemail(e)}
          keyboardType={'email-address'}
        />
     
        <Button
          onPress={() => {
            console.warn('Pressed');
          }}
          text={'Send'}
          width={moderateScale(95)}
        />
   
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    left: moderateScale(15),
    top: moderateScale(15),
    // borderWidth:1,
    // color:colors.white
  },
  text: {
    ...fonts.placeHolder2,
    color: colors.black,
  },
  textBottom: {
    ...fonts.sub_head_small,
    color: colors.white,
  },
  socialLogins: {
    display: 'flex',
    width: '80%',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: moderateScale(15),
    // marginTop:moderateScale(15)
  },
});
export default ForgotPassword;
