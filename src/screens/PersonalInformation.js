import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {BackSvg} from '../assets/svg';
import {moderateScale} from 'react-native-size-matters';
import {Bubbles, Button, CustomInput, SubHeading} from '../components';
import {colors, fonts} from '../constants';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {CountryPicker} from 'react-native-country-codes-picker';

const PersonalInformation = ({navigation}) => {
  const [name, setName] = useState('David Junior');
  const [contactNumber, setContactNumber] = useState(null);
  const [email, setEmail] = useState('abc@exmaple.com');
  const [address, setAddress] = useState('123 street NY 123456  USA');
  // country code picker
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+1');

  return (
    <ImageBackground
      source={require('../assets/images/bg2.png')}
      resizeMode="stretch"
      style={{flex: 1}}>
         <CountryPicker
            show={show}
            // when picker button press you will get the country object with dial code
            pickerButtonOnPress={item => {
              setCountryCode(item.dial_code);
              console.log(countryCode, 'Country Code');
              setShow(false);
            }}
          />
      <TouchableOpacity style={styles.icon}
      onPress={()=>navigation.goBack()}>
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
          <TextInput
            style={{
              ...fonts.subscriptionTrial_head,
              color: colors.black,
              paddingBottom: moderateScale(5),
            }}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.items}>
        <TouchableOpacity
            style={{
              width: moderateScale(45),
              height: moderateScale(22),
              // borderColor: colors.black,
              // borderWidth: 1,
              alignItems:'flex-start',
              justifyContent:'center',
              position:'absolute',
              top:moderateScale(12),
              left:moderateScale(5),
              zIndex:1
            }}
            onPress={() => {
              setShow(true);
            }}>
            <Text style={{...fonts.subscriptionTrial_head,color:colors.black}}>{countryCode} -</Text>
          </TouchableOpacity>
          <TextInput
            style={{
              ...fonts.subscriptionTrial_head,
              color: colors.black,
              paddingBottom: moderateScale(5),
              paddingLeft:moderateScale(48)
            }}
            maxLength={11}
            value={contactNumber}
            keyboardType='numeric'
            onChangeText={e=>setContactNumber(e)}
          />
        </View>
        <View style={styles.items}>
          <TextInput
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
        onPress={()=>navigation.navigate('Settings')}
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
    marginTop: Platform.OS ? moderateScale(60) : moderateScale(40),
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
    alignSelf:'flex-start',
    padding:moderateScale(10),
    top: Platform.OS ? moderateScale(40) :  moderateScale(15),
  },
});
export default PersonalInformation;
