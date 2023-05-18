import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
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
const Signup = ({navigation}) => {
  const [email, setemail] = useState(null);
  const [password, setPassword] = useState(null);
  const [fullname, setFullname] = useState(null);
  const [contact, setContact] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [eyeIconName, setEyeIconName] = useState(false);
  const [eyeIconName2, setEyeIconName2] = useState(false);
  return (
    
  <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView  showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require('../assets/images/Rectangle.png')}
        resizeMode='stretch'
        style={{ alignItems: 'center',flex:1}}>
        <TouchableOpacity style={styles.icon}
         onPress={() => {
          navigation.goBack()
        }}>
          <BackSvg width={20} height={20} />
        </TouchableOpacity>

        <MainHeading
          name={'Sign Up'}
          marginTop={moderateScale(80)}
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
        
          <CustomInput
          maxLength={11}
          placeholder={'Contact No'}
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
            navigation.navigate('SignIn')
          }}
          text={'Register'}
          marginBottom={moderateScale(40)}
          width={moderateScale(95)}
        />

        <View
          style={{
            left: moderateScale(52),
            bottom: moderateScale(85),
            zIndex: 1,
            position: 'absolute',
          }}>
          <GoogleSvg width={20} height={23} />
        </View>
        <View
          style={{
            right: moderateScale(142),
            bottom: moderateScale(85),
            zIndex: 1,
            position: 'absolute',
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
    width: '80%',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: moderateScale(150),
    marginTop:moderateScale(10),
    paddingBottom:moderateScale(60)
  },
});
export default Signup;
