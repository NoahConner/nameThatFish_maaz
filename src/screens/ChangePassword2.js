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
import React, {useContext, useEffect, useState} from 'react';
import {BackSvg} from '../assets/svg';
import {colors, fonts} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import {Button, CustomInput, MainHeading} from '../components';
import Icon from 'react-native-vector-icons/Entypo';
import {screenHeight} from '../constants/screenResolution';
import WavesAnimated from '../components/WavesAnimated';
import {AuthServices} from '../services';
import AppContext from '../context/AuthContext';

const ChangePassword2 = ({navigation}) => {
  const context = useContext(AppContext);
  const userToken = context.userToken;
  const [Password, setPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [eyeIconName, setEyeIconName] = useState(true);
  const [eyeIconName2, setEyeIconName2] = useState(true);
  const [eyeIconName3, setEyeIconName3] = useState(true);
  const [loading, setloading] = useState(false)

    useEffect(() => {
      console.log(userToken,'user token');
    }, [])

  const onChangePass = () => {
    setloading(true)
    AuthServices.changePassword({
      confirmPassword,
      newPassword,
      Password,
      userToken,
    })
      .then(res => {
        // console.log(res?.data?.message);
        Alert.alert(res?.data?.message);
        context.setuserToken(null);
        setTimeout(() => {
            navigation.navigate('SignIn');
          }, 1000);
      })
      .catch(err => {
        // Alert.alert(err?.response?.data?.message?.confirm_password[0]);
        // console.log(err?.response?.data?.message?.confirm_password[0])
       Alert.alert(err?.response?.data?.message)
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
          marginTop={moderateScale(80)}
          marginBottom={moderateScale(25)}
        />

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderBottomWidth: 2,
            borderColor: colors.white,
            alignItems: 'center',
            marginTop: moderateScale(30),
          }}>
          <CustomInput
            paddingLeft={moderateScale(10)}
            placeholder={'Old Password'}
            value={Password}
            setValue={e => setPassword(e)}
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
            marginTop: moderateScale(30),
          }}>
          <CustomInput
            paddingLeft={moderateScale(10)}
            placeholder={'New Password'}
            value={newPassword}
            setValue={e => setNewPassword(e)}
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
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderBottomWidth: 2,
            borderColor: colors.white,
            alignItems: 'center',
            marginTop: moderateScale(30),
          }}>
          <CustomInput
            paddingLeft={moderateScale(10)}
            placeholder={'Confirm Password'}
            value={confirmPassword}
            setValue={e => setConfirmPassword(e)}
            secureTextEntry={eyeIconName3}
          />
          <TouchableOpacity
            onPress={() => {
              setEyeIconName3(!eyeIconName3);
            }}>
            <Icon
              name={eyeIconName3 ? 'eye-with-line' : 'eye'}
              size={20}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
        <Button
          onPress={() => {
            onChangePass();
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
export default ChangePassword2;
