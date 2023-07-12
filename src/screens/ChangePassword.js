import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {BackSvg} from '../assets/svg';
import {colors, fonts} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import {Button, CustomInput, MainHeading} from '../components';
import Icon from 'react-native-vector-icons/Entypo';
import {screenHeight} from '../constants/screenResolution';
import WavesAnimated from '../components/WavesAnimated';
import {AuthServices} from '../services';
const ChangePassword = ({navigation, route}) => {
  const [changePassword, setChangePassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [eyeIconName, setEyeIconName] = useState(true);
  const [eyeIconName2, setEyeIconName2] = useState(true);
  const [loading, setloading] = useState(false)

  const routes = route?.params;
  // let otp = routes?.OTPCode;
  let email = routes?.email;
  console.log(email);
  
  const onUpdatePass = () => {
    setloading(true)
    AuthServices.forgotPass({email, changePassword, confirmPassword})
      .then(res => {
        Alert.alert(res?.data?.message);
        navigation.navigate('SignIn');
        setloading(false)
      })
      .catch(err => {
        Alert.alert(err?.response?.data?.message);
        // navigation.navigate('SignIn');
        setloading(false)
      });
  };

  
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/backgroundPlain.png')}
        resizeMode="stretch"
        style={{flex: 1, alignItems: 'center', height: screenHeight}}>
        <WavesAnimated />
        <MainHeading
          name={'Change Password'}
          marginTop={moderateScale(60)}
          marginBottom={moderateScale(25)}
        />

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderBottomWidth: 2,
            borderColor: colors.white,
            alignItems: 'center',
            marginTop: moderateScale(20),
          }}>
          <CustomInput
            paddingLeft={moderateScale(10)}
            placeholder={'New Password'}
            value={changePassword}
            setValue={e => setChangePassword(e)}
            secureTextEntry={eyeIconName}
          />
          <TouchableOpacity
            onPress={() => {
              setEyeIconName(!eyeIconName);
            }}>
            <Icon
              name={eyeIconName ? 'eye-with-line' : 'eye'}
              size={20}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderBottomWidth: 2,
            borderColor: colors.white,
            alignItems: 'center',
            marginTop: moderateScale(20),
          }}>
          <CustomInput
            paddingLeft={moderateScale(10)}
            placeholder={'Confirm Password'}
            value={confirmPassword}
            setValue={e => setConfirmPassword(e)}
            secureTextEntry={eyeIconName2}
          />
          <TouchableOpacity
            onPress={() => {
              setEyeIconName2(!eyeIconName2);
            }}>
            <Icon
              name={eyeIconName2 ? 'eye-with-line' : 'eye'}
              size={20}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
        <Button
          onPress={() => {
            onUpdatePass()
          }}
          text={'Update'}
          width={moderateScale(95)}
          indicator={loading ? true : false}
          disabled={loading ? true : false}
        />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  icon: {
    left: moderateScale(15),
    alignSelf: 'flex-start',
    padding: moderateScale(10),
    top: Platform.OS === 'ios' ? moderateScale(40) : moderateScale(15),
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
