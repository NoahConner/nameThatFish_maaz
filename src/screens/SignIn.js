import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Animated,
  Platform,
  Alert,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
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
import AppContext from '../context/AuthContext';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthServices} from '../services';

const SignIn = ({navigation}) => {
  const [email, setemail] = useState(null);
  const [password, setPassword] = useState(null);
  const [eyeIconName, setEyeIconName] = useState(true);
  const [loading, setloading] = useState(false)
  const [loading2, setloading2] = useState(false)
  const GirlAnimation = new Animated.Value(screenWidth + 250);
  const MobileAnimation = new Animated.Value(screenWidth + 250);
  const context = useContext(AppContext);

  const storeUserToken = async value => {
    try {
      await AsyncStorage.setItem('@auth_token', value);
      context.setuserToken(value);
    } catch (e) {}
  };
  
  const storeUserID = async value => {
    try {
      await AsyncStorage.setItem('@user_Id', value);
      context.setuserId(value);
    } catch (e) {}
  };
  const googleLogin = async () => {
    setloading2(true)
    await GoogleSignin.hasPlayServices();
    await GoogleSignin.signIn()
      .then(user => {
        // storeUserToken(user?.idToken.toString());
        const email=user?.user?.email;
        const name=user?.user?.name;
        const password=user?.user?.id;
        const user_img=user?.user?.photo;
        AuthServices.googleLogin({email,name,user_img,password}).then((res)=>{
          storeUserToken(res?.data?.token);
          storeUserID(res?.data?.user_id.toString())
        }).catch((err)=>{
          Alert.alert(err?.response?.data?.message);
        })
        
      })
      .catch(error => {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
          Alert.alert('Cancel');
        } else if (error.code === statusCodes.IN_PROGRESS) {
          Alert.alert('Signin in progress'); // operation (f.e. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          Alert.alert('PLAY_SERVICES_NOT_AVAILABLE'); // play services not available or outdated
        } else {
          console.log('some other', error); // some other error happened
        }
        setloading2(false)
      });
  };

  const onSignIn=()=>{
    setloading(true)
    AuthServices.login({email, password})
    .then(res => {
      // {res?.data?.message ==='User Profile' ? Alert.alert('Succesfully Login') :null }
      storeUserToken(res?.data?.token)
      storeUserID(res?.data?.user_id.toString())
      // setloading(false)
    })
    .catch(err => {
      Alert.alert(err.response?.data?.error);
      setloading(false)
    });

  }
 
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
          onPress={() => onSignIn()}
          text={'Log in'}
          width={moderateScale(95)}
          indicator={loading ? true : false}
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

          {Platform.OS==='ios' ? 
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
            }}
            indicator={loading2 ? true : false}
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
        </Animated.View> : 

        <Animated.View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
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
          }}
          indicator={loading2 ? true : false}
        />
      </Animated.View>}
        
        
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
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
       borderWidth:1,
    color:colors.white
  },
});
export default SignIn;
