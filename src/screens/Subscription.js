import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {BackSvg, SubscriptionSvg} from '../assets/svg';
import {moderateScale} from 'react-native-size-matters';
import {Bubbles, Button, CustomTexts, SubHeading} from '../components';
import {colors, fonts} from '../constants';

const Subscription = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/bg2.png')}
      resizeMode="stretch"
      style={{flex: 1}}>
      <TouchableOpacity style={styles.icon}>
        <BackSvg width={20} height={20} 
         onPress={()=>{
          navigation.goBack()
        }}/>
      </TouchableOpacity>

      <View style={styles.containerView}>
        <Bubbles
          width={40}
          height={40}
          right={moderateScale(260)}
          top={moderateScale(550)}
        />
        <Bubbles
          width={25}
          height={25}
          right={moderateScale(35)}
          bottom={moderateScale(240)}
        />
        <Bubbles
          width={52}
          height={52}
          right={moderateScale(290)}
          top={moderateScale(80)}
        />
        <Bubbles
          width={41}
          height={41}
          right={moderateScale(30)}
          top={moderateScale(0)}
        />
      
        <View style={{width: '80%', alignItems: 'center'}}>
          <SubHeading
            name={'Subscription'}
            marginTop={moderateScale(20)}
            marginBottom={moderateScale(20)}
          />
          <SubscriptionSvg width={170} height={200} />
          <Text
            style={{
              ...fonts.subscriptionTrial_head,
              color: colors.primary,
              marginTop: moderateScale(20),
              textAlign: 'center',
            }}>
            14 Days Free Trial Has Been Started
          </Text>
          <Text
            style={{
              ...fonts.text,
              color: colors.light_black,
              marginTop: moderateScale(20),
              textAlign: 'center',
            }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit,
          </Text>
          <Button
          onPress={()=>{
            navigation.navigate('Trial')
          }}
            width={moderateScale(270)}
            height={moderateScale(45)}
            text={'Start Your 14 Days Free Trial'}
            marginTop={moderateScale(20)}
            marginBottom={moderateScale(10)}
            borderRadius={15}
          />
          <Button
            width={moderateScale(270)}
            height={moderateScale(45)}
            text={'$499.00 Per Year Subscriptions'}
            marginTop={moderateScale(0)}
            borderRadius={15}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerView: {
    alignItems: 'center',
    marginTop: moderateScale(40),
  },
  inputContainer: {
    width: '93%',
    height: moderateScale(200),
    backgroundColor: colors.white,
    ...fonts.helpPlaceholder,
    marginTop: moderateScale(25),
    textAlignVertical: 'top',
    textAlign: 'center',
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
export default Subscription;
