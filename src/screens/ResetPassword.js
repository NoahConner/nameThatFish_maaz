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
import Icon from 'react-native-vector-icons/Entypo';
const ResetPassword = () => {
  const [password, setPassword] = useState(null);
  const [eyeIconName, setEyeIconName] = useState(true);
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/Rectangle.png')}
        resizeMode="stretch"
        style={{flex: 1, alignItems: 'center'}}>
        <TouchableOpacity style={styles.icon}>
          <BackSvg width={20} height={20} />
        </TouchableOpacity>
        <MainHeading
          name={'Reset Password'}
          marginTop={moderateScale(70)}
          marginBottom={moderateScale(85)}
        />
        <TouchableOpacity
          onPress={() => {
            setEyeIconName(!eyeIconName);
          }}
          style={{
            top: moderateScale(34),
            left: moderateScale(130),
            zIndex: 1,
          }}>
          <Icon
            name={eyeIconName ? 'eye' : 'eye-with-line'}
            size={20}
            color={colors.white}
          />
        </TouchableOpacity>

        <CustomInput
          placeholder={'Reset Password'}
          value={password}
          setValue={e => setPassword(e)}
          secureTextEntry={true}
        />
        <Button
          onPress={() => {
            console.warn('Pressed');
          }}
          text={'Update'}
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
export default ResetPassword;
