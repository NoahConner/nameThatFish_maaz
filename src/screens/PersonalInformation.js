import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {BackSvg} from '../assets/svg';
import {moderateScale} from 'react-native-size-matters';
import {Bubbles, Button, CustomInput, SubHeading} from '../components';
import {colors, fonts} from '../constants';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

const PersonalInformation = ({navigation}) => {
  const [name, setName] = useState('David Junior');
  const [contactNumber, setContactNumber] = useState('123-456-789-0');
  const [email, setEmail] = useState('abc@exmaple.com');
  const [address, setAddress] = useState('123 street NY 123456  USA');

  return (
    <ImageBackground
      source={require('../assets/images/bg2.png')}
      resizeMode="stretch"
      style={{flex: 1}}>
      <TouchableOpacity style={styles.icon}
      onPress={()=>navigation.goBack()}>
        <BackSvg width={20} height={20} />
      </TouchableOpacity>

      <View style={styles.containerView}>
        <Bubbles
          width={37}
          height={37}
          right={moderateScale(60)}
          bottom={moderateScale(50)}
        />
        <Bubbles
          width={22}
          height={22}
          right={moderateScale(5)}
          bottom={moderateScale(40)}
        />
        <Bubbles
          width={50}
          height={50}
          right={moderateScale(20)}
          top={moderateScale(50)}
        />
        <Bubbles
          width={39}
          height={39}
          left={moderateScale(60)}
          top={moderateScale(440)}
        />
        <Bubbles
          width={23}
          height={23}
          left={moderateScale(130)}
          top={moderateScale(480)}
        />
        <Bubbles
          width={50}
          height={50}
          left={moderateScale(90)}
          top={moderateScale(540)}
        />
          <Bubbles
          width={23}
          height={23}
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
          <TextInput
            style={{
              ...fonts.subscriptionTrial_head,
              color: colors.black,
              paddingBottom: moderateScale(5),
            }}
            value={contactNumber}
            onChangeText={setContactNumber}
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
    marginTop: moderateScale(40),
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
    // position: 'absolute',
    left: moderateScale(15),
    top: moderateScale(15),
  },
});
export default PersonalInformation;
