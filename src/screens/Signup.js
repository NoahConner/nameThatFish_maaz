import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Animated,
  Platform,
  Alert,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {AppleSvg, BackSvg, GoogleSvg, PasswordSvg} from '../assets/svg';
import {colors, fonts} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import {Button, CustomInput, MainHeading} from '../components';
import Icon from 'react-native-vector-icons/Entypo';
import {CountryPicker} from 'react-native-country-codes-picker';
import {screenHeight, screenWidth} from '../constants/screenResolution';
import WavesAnimated from '../components/WavesAnimated';
import PhoneInput from 'react-native-phone-input';
import {AuthServices} from '../services';
import AppContext from '../context/AuthContext';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({navigation}) => {
  const [fullname, setFullname] = useState(null);
  const [email, setemail] = useState(null);
  const [contact, setContact] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [eyeIconName, setEyeIconName] = useState(true);
  const [eyeIconName2, setEyeIconName2] = useState(true);
  const [loading, setloading] = useState(false);
  const [borderColor, setborderColor] = useState(colors.white);

  // country code picker
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('1');
  const GirlAnimation = new Animated.Value(screenWidth + 250);
  const MobileAnimation = new Animated.Value(screenWidth + 250);
  const [loading2, setloading2] = useState(false)
  
  const phonenum = useRef();

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
        AuthServices.googleLogin({email,name,user_img,password,device_token}).then((res)=>{
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

  const onSignUp = () => {
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailReg.test(email)) return Alert.alert('Invalid Email ');

    // if (!email || !password || !firstName || !lastName)
    //   return Alert.alert('Fill all the fields');
    setloading(true);
    AuthServices.signup({
      fullname,
      password,
      email,
      contact,
      confirmPassword,
      countryCode,
    })
      .then(res => {
        Alert.alert(res?.data?.message);
        navigation.navigate('SignIn');
        setloading(false);
      })
      .catch(err => {
        Alert.alert(err.response?.data?.message, 'Error');
        setloading(false);
      });
  };
  return (
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#000'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../assets/images/backgroundPlain.png')}
          resizeMode="stretch"
          style={{alignItems: 'center', flex: 1, height: screenHeight}}>
          <WavesAnimated />
          <CountryPicker
            show={show}
            // when picker button press you will get the country object with dial code
            pickerButtonOnPress={item => {
              setCountryCode(item.dial_code);
              console.log(countryCode, 'Country Code');
              setShow(false);
            }}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              navigation.goBack();
            }}>
            <BackSvg width={20} height={20} />
          </TouchableOpacity>

          <MainHeading
            name={'Sign Up'}
            marginTop={
              Platform.OS === 'ios' ? moderateScale(90) : moderateScale(50)
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
              marginTop:Platform.OS==='ios' ? moderateScale(40):moderateScale(20),
              width: '85%',
            }}>
            <CustomInput
              paddingLeft={moderateScale(10)}
              placeholder={'Full Name'}
              value={fullname}
              setValue={e => setFullname(e)}
            />
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              borderBottomWidth: 2,
              borderColor: colors.white,
              alignItems: 'center',
              marginTop:Platform.OS==='ios' ? moderateScale(30):moderateScale(20),
              width: '85%',
            }}>
            <CustomInput
              paddingLeft={moderateScale(10)}
              placeholder={'Email Address'}
              value={email}
              autoCapitalize={'none'}
              setValue={e => setemail(e)}
              keyboardType={'email-address'}
            />
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              borderBottomWidth: 2,
              borderColor: borderColor,
              alignItems: 'center',
              marginTop:Platform.OS==='ios' ? moderateScale(10):moderateScale(20),
              width: '85%',
            }}>
            <PhoneInput
              initialCountry={'us'}
              textProps={{
                placeholder: 'Enter Phone Number',
                placeholderTextColor: colors.white,
              }}
              autoFormat={true}
              flagStyle={{width: 20, height: 15}}
              pickerBackgroundColor={'#d3d3d3'}
              style={{
                // borderWidth: 1,
                // borderColor: '#000',
                marginTop: moderateScale(10),
                paddingBottom:moderateScale(5),
                marginLeft:moderateScale(10)
              }}
              textStyle={[{color: colors.white, ...fonts.placeHolder}]}
              isValidNumber={e => console.log(e, 'here')}
              ref={phonenum}
              onChangePhoneNumber={phNumber => {
                console.log(phonenum.current)
                if (phonenum.current.isValidNumber()) {
                  setborderColor(colors.white);
                  setContact(phNumber);
                } else {
                  setborderColor('red');
                }
              }}
            />
          </View>

          

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              borderBottomWidth: 2,
              borderColor: colors.white,
              alignItems: 'center',
              marginTop:Platform.OS==='ios' ? moderateScale(30):moderateScale(20),
            }}>
            <CustomInput
              paddingLeft={moderateScale(10)}
              placeholder={'Create Password'}
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

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              borderBottomWidth: 2,
              borderColor: colors.white,
              alignItems: 'center',
              marginTop:Platform.OS==='ios' ? moderateScale(30):moderateScale(20),
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
            onPress={() => onSignUp()}
            text={'Register'}
            marginBottom={moderateScale(10)}
            marginTop={moderateScale(40)}
            width={moderateScale(95)}
            indicator={loading ? true : false}
            disabled={loading ? true : false}
          />

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
      </ScrollView>
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
    width: '100%',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    flexDirection: 'row',
    // height:screenHeight
  },
});
export default Signup;
