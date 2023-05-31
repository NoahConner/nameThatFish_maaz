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
  BackSvg,
} from '../assets/svg';
import {colors, fonts} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import {Button, CustomInput, MainHeading} from '../components';
import Icon from 'react-native-vector-icons/Entypo';
import { screenHeight } from '../constants/screenResolution';
import WavesAnimated from '../components/WavesAnimated';
const ChangePassword = ({navigation}) => {
  const [changePassword, setChangePassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [eyeIconName, setEyeIconName] = useState(true);
  const [eyeIconName2, setEyeIconName2] = useState(true);
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/Rectangle.png')}
        resizeMode="stretch"
        style={{flex: 1, alignItems: 'center',height:screenHeight}}>
          {/* <WavesAnimated /> */}
        <TouchableOpacity style={styles.icon}
         onPress={() => {
          navigation.goBack()
        }}>
          <BackSvg width={20} height={20} />
        </TouchableOpacity>
        <MainHeading
          name={'Change Password'}
          marginTop={moderateScale(100)}
          marginBottom={moderateScale(75)}
        />
        <TouchableOpacity
          onPress={() => {
            setEyeIconName(!eyeIconName);
          }}
          style={{
            top: moderateScale(50),
            left: moderateScale(130),
            zIndex: 1,
          }}>
          <Icon
            name={eyeIconName ? 'eye-with-line' : 'eye'}
            size={20}
            color={colors.white}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setEyeIconName2(!eyeIconName2);
          }}
          style={{
            top: moderateScale(93),
            left: moderateScale(130),
            zIndex: 1,
          }}>
          <Icon
            name={eyeIconName2 ? 'eye-with-line' : 'eye'}
            size={20}
            color={colors.white}
          />
        </TouchableOpacity>

        <CustomInput
          placeholder={'Change Password'}
          value={changePassword}
          setValue={e => setChangePassword(e)}
          secureTextEntry={eyeIconName}
        />
        <CustomInput
          placeholder={'Confirm Password'}
          value={confirmPassword}
          setValue={e => setConfirmPassword(e)}
          secureTextEntry={eyeIconName2}
        />

        <Button
          onPress={() => {
            navigation.navigate('SignIn')
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
export default ChangePassword;
