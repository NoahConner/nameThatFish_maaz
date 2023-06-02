import { TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import { colors, fonts } from '../constants';

const CustomInput = ({
  value,
  setValue,
  secureTextEntry=false,
  placeholder,
  keyboardType,
  autoCapitalize,
  paddingLeft=moderateScale(0),
  paddingBottom=moderateScale(0),
  maxLength
}) => (
    
  <TextInput
    style={{ ...style.inpurText, paddingLeft,paddingBottom}}
    placeholderTextColor={colors.white}
    value={value}
    onChangeText={setValue}
    secureTextEntry={secureTextEntry} 
    placeholder={placeholder}
    keyboardType={keyboardType} 
    autoCapitalize={autoCapitalize}
    maxLength={maxLength}
  />
);

const style = StyleSheet.create({
  inpurText: {
    
    ...fonts.placeHolder,
    color:colors.white,
    
    width:'80%'
    
    
  },
});
export default CustomInput;