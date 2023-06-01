import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Animated,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  AppleSvg,
  BackSvg,
  EmailSvg,
  GoogleSvg,
  PasswordSvg,
} from '../assets/svg';
import {colors, fonts} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import {Button, CustomInput, MainHeading, WavesAnimated} from '../components';
import Icon from 'react-native-vector-icons/Entypo';
import {screenWidth} from '../constants/screenResolution';

const SignIn = ({navigation}) => {
  const [email, setemail] = useState(null);
  const [password, setPassword] = useState(null);
  const [eyeIconName, setEyeIconName] = useState(true);
  const GirlAnimation = new Animated.Value(screenWidth + 250);
  const MobileAnimation = new Animated.Value(screenWidth + 250);

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
    <KeyboardAvoidingView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/backgroundPlain.png')}
        resizeMode="stretch"
        style={{flex: 1, alignItems: 'center'}}>
        <WavesAnimated/>

        <MainHeading
          name={'Sign In'}
          marginTop= {Platform.OS === 'ios' ? moderateScale(110) : moderateScale(60)}
          marginBottom={moderateScale(10)}
        />

        <View
          style={{
            right: moderateScale(130),
            top: Platform.OS === 'ios' ? moderateScale(46) : moderateScale(65),
          }}>
          <EmailSvg width={18} height={15} />
        </View>
        <View
          style={{
            right: moderateScale(130),
            top: Platform.OS === 'ios' ? moderateScale(72) : moderateScale(110),
          }}>
          <PasswordSvg width={18} height={15} />
        </View>
        <TouchableOpacity
          onPress={() => {
            setEyeIconName(!eyeIconName);
          }}
          style={{
            top: Platform.OS === 'ios' ? moderateScale(58) : moderateScale(95),
            left: moderateScale(130),
            zIndex: 1,
          }}>
          <Icon
            name={eyeIconName ? 'eye-with-line' : 'eye'}
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
          secureTextEntry={eyeIconName}
        />
        <Button
          onPress={() => {
            navigation.navigate('Trial');
          }}
          text={'Log in'}
          width={moderateScale(95)}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          <Text style={styles.text}>
            Forgot{' '}
            <Text style={{...styles.text, color: colors.white}}>Password</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginTop: moderateScale(110)}}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text style={styles.textBottom}>
            Don’t have an account?{' '}
            <Text style={{...styles.textBottom, color: colors.black}}>
              Sign up now
            </Text>
          </Text>
        </TouchableOpacity>

        <Animated.View
          style={{
            ...styles.socialLogins,
            transform: [{translateY: MobileAnimation}],
          }}>
          <View
            style={{
              left: moderateScale(32),
              top: moderateScale(9),
              zIndex: 1,
            }}>
            <GoogleSvg width={20} height={23} />
          </View>
          <Button
            text={'Sign In'}
            backgroundColor={colors.black}
            height={moderateScale(32)}
            width={moderateScale(135)}
          />
          <View
            style={{
              left: moderateScale(32),
              top: moderateScale(9),
              zIndex: 1,
              // position: 'absolute',
            }}>
            <AppleSvg width={20} height={23} />
          </View>
          <Button
            text={'Sign In'}
            backgroundColor={colors.black}
            height={moderateScale(32)}
            width={moderateScale(137)}
          />
        </Animated.View>
        {/* </View> */}
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
    width: '90%',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    //    borderWidth:1,
    // color:colors.white
  },
});
export default SignIn;
