import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Animated,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  AppleSvg,
  BackSvg,
  GoogleSvg,
  
} from '../assets/svg';
import {colors, fonts} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import {Button, CustomInput, MainHeading, } from '../components';
import Icon from 'react-native-vector-icons/Entypo';
import {CountryPicker} from 'react-native-country-codes-picker';
import { screenHeight, screenWidth } from '../constants/screenResolution';
import WavesAnimated from '../components/WavesAnimated';

const Signup = ({navigation}) => {
  const [email, setemail] = useState(null);
  const [password, setPassword] = useState(null);
  const [fullname, setFullname] = useState(null);
  const [contact, setContact] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [eyeIconName, setEyeIconName] = useState(true);
  const [eyeIconName2, setEyeIconName2] = useState(true);
  // country code picker
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+1');
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
    <KeyboardAvoidingView style={{flex: 1,backgroundColor:'#000'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../assets/images/Rectangle.png')}
          resizeMode="stretch"
          style={{alignItems: 'center', flex: 1,height:screenHeight}}>
{/* <WavesAnimated/> */}
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
            marginTop={moderateScale(70)}
            marginBottom={moderateScale(10)}
          />

          <TouchableOpacity
            onPress={() => {
              // console.warn('press');
              setEyeIconName(!eyeIconName);
            }}
            style={{
              top: moderateScale(230),
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
              // console.warn('press');
              setEyeIconName2(!eyeIconName2);
            }}
            style={{
              top: moderateScale(270),
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
            placeholder={'Full Name'}
            value={fullname}
            setValue={e => setFullname(e)}
          />
          <CustomInput
            placeholder={'Email Address'}
            value={email}
            setValue={e => setemail(e)}
            keyboardType={'email-address'}
          />
          <TouchableOpacity
            style={{
              width: moderateScale(32),
              height: moderateScale(20),
              // borderColor: colors.white,
              // borderWidth: 1,
              alignItems:'center',
              justifyContent:'center',
              position:'absolute',
              top:moderateScale(303),
              left:moderateScale(42),
              zIndex:1
            }}
            onPress={() => {
              setShow(true);
            }}>
            <Text style={{...fonts.placeHolder,color:colors.white}}>{countryCode}</Text>
          </TouchableOpacity>

          <CustomInput
          paddingLeft={moderateScale(37)}
            maxLength={11}
            placeholder={''}
            value={contact}
            setValue={e => setContact(e)}
            keyboardType={'numeric'}
          />
          <CustomInput
            placeholder={'Create Password'}
            value={password}
            setValue={e => setPassword(e)}
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
              navigation.navigate('SignIn');
            }}
            text={'Register'}
            marginBottom={moderateScale(10)}
            marginTop={moderateScale(20)}
            width={moderateScale(95)}
          />
         
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
        </ImageBackground>
      </ScrollView>
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
    // justifyContent: 'space-between',
    flexDirection: 'row',
    // height:screenHeight
    
    
  },
});
export default Signup;
