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
const SignIn = () => {
  const [email, setemail] = useState(null);
  const [password, setPassword] = useState(null);
  const [eyeIconName, setEyeIconName] = useState(true);
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
          name={'Sign In'}
          marginTop={moderateScale(100)}
          marginBottom={moderateScale(10)}
        />
        <View style={{right: moderateScale(130), top: moderateScale(65)}}>
          <EmailSvg width={18} height={15} />
        </View>
        <View style={{right: moderateScale(130), top: moderateScale(115)}}>
          <PasswordSvg width={18} height={15} />
        </View>
        <TouchableOpacity
          onPress={() => {
            // console.warn('press');
            setEyeIconName(!eyeIconName);
          }}
          style={{
            top: moderateScale(100),
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
          paddingLeft={moderateScale(40)}
          placeholder={'Email Address'}
          value={email}
          setValue={e => setemail(e)}
          keyboardType={'email-address'}
        />
        <CustomInput
          paddingLeft={moderateScale(40)}
          placeholder={'Password'}
          value={password}
          setValue={e => setPassword(e)}
          secureTextEntry={true}
        />
        <Button
          onPress={() => {
            console.warn('Pressed');
          }}
          text={'Log in'}
          width={moderateScale(95)}
        />
        <TouchableOpacity>
          <Text style={styles.text}>
            Forget{' '}
            <Text style={{...styles.text, color: colors.white}}>Password</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop: moderateScale(110)}}>
          <Text style={styles.textBottom}>
            Don’t Have An Account?{' '}
            <Text style={{...styles.textBottom, color: colors.black}}>
              Sign Up Now
            </Text>
          </Text>
        </TouchableOpacity>
        <View
          style={{
            right: moderateScale(127),
            top: moderateScale(50),
            zIndex: 1,
            // position: 'absolute',
          }}>
          <GoogleSvg width={20} height={23} />
        </View>
        <View
          style={{
            left: moderateScale(32),
            top: moderateScale(28),
            zIndex: 1,
            // position: 'absolute',
          }}>
          <AppleSvg width={20} height={23} />
        </View>
        <View style={styles.socialLogins}>
          <Button
            text={'Sign In'}
            backgroundColor={colors.black}
            height={moderateScale(32)}
            width={moderateScale(135)}
          />
          <Button
            text={'Sign In'}
            backgroundColor={colors.black}
            height={moderateScale(32)}
            width={moderateScale(137)}
          />
        </View>
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
export default SignIn;
