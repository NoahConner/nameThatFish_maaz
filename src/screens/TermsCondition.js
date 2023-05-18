import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import React, {useState} from 'react';
import {BackSvg} from '../assets/svg';
import {moderateScale} from 'react-native-size-matters';
import {Bubbles, Button, CustomTexts, SubHeading} from '../components';
import {colors, fonts} from '../constants';



const TermsCondition = () => {
  
  return (
    <ImageBackground
      source={require('../assets/images/bg2.png')}
      resizeMode="stretch"
      style={{flex: 1}}>
      <TouchableOpacity style={styles.icon}>
        <BackSvg width={20} height={20} />
      </TouchableOpacity>

      <View style={styles.containerView}>
        <Bubbles
          width={40}
          height={40}
          right={moderateScale(60)}
          top={moderateScale(540)}
        />
        <Bubbles
          width={25}
          height={25}
          right={moderateScale(25)}
          top={moderateScale(0)}
        />
        <Bubbles
          width={52}
          height={52}
          right={moderateScale(130)}
          bottom={moderateScale(370)}
        />
        <Bubbles
          width={41}
          height={41}
          left={moderateScale(60)}
          top={moderateScale(440)}
        />
        <Bubbles
          width={25}
          height={25}
          left={moderateScale(130)}
          top={moderateScale(480)}
        />
        <Bubbles
          width={52}
          height={52}
          left={moderateScale(90)}
          top={moderateScale(540)}
        />
          <Bubbles
          width={25}
          height={25}
          left={moderateScale(220)}
          top={moderateScale(410)}
        />
        <SubHeading name={'Terms & Condition'} marginTop={moderateScale(30)}/>
    <CustomTexts marginTop={moderateScale(20)}/>
    <CustomTexts marginTop={moderateScale(20)}/>
      </View>
    
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerView: {
    alignItems: 'center',
    marginTop: moderateScale(40),
  },
  inputContainer:{
    width:'93%',
    height:moderateScale(200),
    backgroundColor:colors.white,
    ...fonts.helpPlaceholder,
    marginTop:moderateScale(25),
    textAlignVertical:'top',
    textAlign:'center'
    
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
export default TermsCondition;
