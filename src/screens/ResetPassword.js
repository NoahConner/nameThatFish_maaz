import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Platform,
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
import {Button, CustomInput, MainHeading,} from '../components';
import Icon from 'react-native-vector-icons/Entypo';
import { screenHeight } from '../constants/screenResolution';
import WavesAnimated from '../components/WavesAnimated';
const ResetPassword = ({navigation}) => {
  const [password, setPassword] = useState(null);
  const [eyeIconName, setEyeIconName] = useState(true);
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/backgroundPlain.png')}
        resizeMode="stretch"
        style={{flex: 1, alignItems: 'center',height:screenHeight}}>
          <WavesAnimated/>
        <TouchableOpacity style={styles.icon}
          onPress={() => {
            navigation.goBack()
          }}>
          <BackSvg width={20} height={20} />
        </TouchableOpacity>
        <MainHeading
          name={'Reset Password'}
          marginTop={moderateScale(60)}
          marginBottom={moderateScale(30)}
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
            placeholder={'Reset Password'}
            value={password}
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
        <Button
          onPress={() => {
            navigation.navigate('ChangePassword')
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
    left: moderateScale(15),
    alignSelf:'flex-start',
    padding:moderateScale(10),
    top: Platform.OS === 'ios' ? moderateScale(40) :  moderateScale(15),
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
