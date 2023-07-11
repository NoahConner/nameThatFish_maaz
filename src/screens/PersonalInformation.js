import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import React, {useContext, useEffect, useState,useRef} from 'react';
import {BackSvg} from '../assets/svg';
import {moderateScale} from 'react-native-size-matters';
import {ActivityIndicate, Bubbles, Button, CustomInput, Loader, SubHeading} from '../components';
import {colors, fonts} from '../constants';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {CountryPicker} from 'react-native-country-codes-picker';
import {UserServices} from '../services';
import PhoneInput from 'react-native-phone-input';
import AppContext from '../context/AuthContext';

const PersonalInformation = ({navigation}) => {
  const context = useContext(AppContext);
  const userToken = context.userToken;
  const id =context.userId;
  const [name, setName] = useState(null);
  const [contactNumber, setContactNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [borderColor, setborderColor] = useState(colors.black);
  const phonenum = useRef();
  // const [id, setid] = useState(null);
  // country code picker
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState(null);
  const [loading, setloading] = useState(false)

  useEffect(() => {
    getUserInfo()
  }, []);

  const getUserInfo=()=>{
    setloading(true)
    UserServices.userProfile({userToken})
    .then(res => {
        setName(res?.data?.data?.name);
        setContactNumber(res?.data?.data?.phone);
        setEmail(res?.data?.data?.email);
        setAddress(res?.data?.data?.address);
        setCountryCode(res?.data?.data?.code);
        phonenum.current.setValue(res?.data?.data?.phone)
        // context.setuserId(res?.data?.data?.id);
        // console.log(id,'User ID');
        
      })
      .catch(err => {
        Alert.alert(err,'Did not getting Information');
      });
      setloading(false)
  }
  const onSave = () => {
    UserServices.updateUserProfile({address, email, id, name, contactNumber,countryCode})
      .then(res => {
        console.log(res?.data);
      })
      .catch(err => {
        console.log(err?.data, 'Error');
      });
  };

  return (
    <ImageBackground
      source={require('../assets/images/bg2.png')}
      resizeMode="stretch"
      style={{flex: 1}}>
        {loading ? <Loader/> : null}
      <CountryPicker
        show={show}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={item => {
          setCountryCode(item.dial_code);
          console.log(countryCode, 'Country Code');
          setShow(false);
        }}
      />
      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <BackSvg width={20} height={20} />
      </TouchableOpacity>

      <View style={styles.containerView}>
        <Bubbles
          width={34}
          height={34}
          right={moderateScale(60)}
          bottom={moderateScale(50)}
        />
        <Bubbles
          width={20}
          height={20}
          right={moderateScale(5)}
          bottom={moderateScale(40)}
        />
        <Bubbles
          width={47}
          height={47}
          right={moderateScale(20)}
          top={moderateScale(50)}
        />
        <Bubbles
          width={37}
          height={37}
          left={moderateScale(60)}
          top={moderateScale(440)}
        />
        <Bubbles
          width={20}
          height={20}
          left={moderateScale(130)}
          top={moderateScale(480)}
        />
        <Bubbles
          width={47}
          height={47}
          left={moderateScale(90)}
          top={moderateScale(540)}
        />
        <Bubbles
          width={21}
          height={21}
          left={moderateScale(220)}
          top={moderateScale(600)}
        />
        <SubHeading name={'Personal Information'} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: moderateScale(60)}}>
          <View style={styles.items}>
            <TextInput
              value={name}
              onChangeText={setName}
              style={{
                ...fonts.subscriptionTrial_head,
                color: colors.black,
                paddingBottom: moderateScale(5),
              }}
            />
          </View>
          <View style={styles.items}>
            <Text
              style={{
                ...fonts.subscriptionTrial_head,
                color: colors.black,
                paddingBottom: moderateScale(5),
                marginTop:moderateScale(10),
                paddingLeft:moderateScale(4)
              }}>{email}</Text>
          </View>
          <View
            style={{
             ...styles.items,
             borderColor:borderColor
            }}>
              
            <PhoneInput
            initialValue={contactNumber}
              initialCountry={'us'}
              textProps={{
                placeholder: 'Enter Phone Number',
                placeholderTextColor: colors.black,
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
              textStyle={[{color: colors.black, ...fonts.subscriptionTrial_head}]}
              isValidNumber={e => console.log(e, 'here')}
              ref={phonenum}
              
              onChangePhoneNumber={phNumber => {
                console.log(phonenum.current.getValue(),'nummmm');
                if (phonenum.current.isValidNumber()) {
                  setborderColor(colors.black);
                  setContactNumber(phonenum.current.getValue());
                } else {
                  setborderColor('red');
                }
              }}
            />
          </View>
          <View style={styles.items}>
            <TextInput
            placeholder=' Your Address'
              style={{
                ...fonts.subscriptionTrial_head,
                color: colors.black,
                paddingBottom: moderateScale(5),
                
              }}
              value={address}
              onChangeText={setAddress}
            />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Button
            onPress={() => {
              onSave();
              navigation.navigate('Settings');
            }}
            text={'Save'}
            backgroundColor={colors.primary}
            marginTop={moderateScale(20)}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerView: {
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? moderateScale(60) : moderateScale(40),
  },
  items: {
    width: '82%',
    borderBottomWidth: 2,
    borderColor: colors.black,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: moderateScale(20),
    
  },
  imgCircle: {
    marginVertical: moderateScale(25),
    width: 108,
    height: 108,
    borderRadius: 54,

    alignItems: 'center',
    justifyContent: 'center',
  },
  bubbleIcon: {
    position: 'absolute',
  },
  icon: {
    left: moderateScale(15),
    alignSelf: 'flex-start',
    padding: moderateScale(10),
    top: Platform.OS === 'ios' ? moderateScale(40) : moderateScale(15),
  },
});
export default PersonalInformation;
