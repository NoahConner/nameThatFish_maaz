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
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppleSvg, BackSvg, GoogleSvg, PasswordSvg} from '../assets/svg';
import {colors, fonts} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import {Button, CustomInput, MainHeading} from '../components';
import Icon from 'react-native-vector-icons/Entypo';
import {CountryPicker} from 'react-native-country-codes-picker';
import {screenHeight, screenWidth} from '../constants/screenResolution';
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
              Platform.OS === 'ios' ? moderateScale(70) : moderateScale(30)
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
              marginTop: moderateScale(20),
              width: '85%',
            }}>
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
 <TouchableOpacity
            style={{
              marginLeft:moderateScale(10),
              marginTop:moderateScale(10)
              
            }}
            onPress={() => {
              setShow(true);
            }}>
            <Text style={{...fonts.placeHolder,color:colors.white}}>{countryCode} - </Text>
          </TouchableOpacity>
            <CustomInput
              // paddingLeft={moderateScale(10)}
              maxLength={11}
              placeholder={''}
              value={contact}
              setValue={e => setContact(e)}
              keyboardType={'numeric'}
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
              navigation.navigate('SignIn');
            }}
            text={'Register'}
            marginBottom={moderateScale(10)}
            marginTop={moderateScale(40)}
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
