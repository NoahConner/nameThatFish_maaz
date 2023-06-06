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
import {GoogleSignin,statusCodes} from '@react-native-google-signin/google-signin';

const SignIn = ({navigation}) => {
  const [email, setemail] = useState(null);
  const [password, setPassword] = useState(null);
  const [eyeIconName, setEyeIconName] = useState(true);
  const GirlAnimation = new Animated.Value(screenWidth + 250);
  const MobileAnimation = new Animated.Value(screenWidth + 250);

  const googleLogin = async () => {
    await GoogleSignin.hasPlayServices();
    await GoogleSignin.signIn()
      .then(user => {
        console.log('user', user);
        // storeData(user.idToken.toString());
      })
      .catch(error => {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
          alert('Cancel');
        } else if (error.code === statusCodes.IN_PROGRESS) {
          alert('Signin in progress'); // operation (f.e. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          alert('PLAY_SERVICES_NOT_AVAILABLE'); // play services not available or outdated
        } else {
          console.log('some other', error); // some other error happened
        }
      });
  };

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
        <WavesAnimated />

        <MainHeading
          name={'Sign In'}
          marginTop={
            Platform.OS === 'ios' ? moderateScale(110) : moderateScale(60)
          }
          marginBottom={moderateScale(10)}
        />

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderBottomWidth: 2,
            borderColor: colors.white,
            alignItems: 'center',
            marginTop: moderateScale(20),
            // width:'80%',
          }}>
          <EmailSvg width={15} height={15} />

          <CustomInput
            paddingLeft={moderateScale(10)}
            placeholder={'Email Address'}
            value={email}
            setValue={e => setemail(e)}
            keyboardType={'email-address'}
          />
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderBottomWidth: 2,
            borderColor: colors.white,
            alignItems: 'center',
            marginTop: moderateScale(20),
            width: '85%',
          }}>
          <PasswordSvg width={15} height={15} />
          <CustomInput
            paddingLeft={moderateScale(10)}
            placeholder={'Password'}
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
          style={{marginTop: moderateScale(80)}}
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
            onPress={() => {
              googleLogin();
              navigation.navigate('Trial');
            }}
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
