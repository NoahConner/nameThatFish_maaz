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
  paddingLeft=moderateScale(10)
}) => (
    
  <TextInput
    style={{ ...style.inpurText, paddingLeft}}
    placeholderTextColor={colors.white}
    value={value}
    onChangeText={setValue}
    secureTextEntry={secureTextEntry} 
    placeholder={placeholder}
    keyboardType={keyboardType} 
    autoCapitalize={autoCapitalize}
  />
);

const style = StyleSheet.create({
  inpurText: {
    borderBottomWidth: 1,
    color: colors.white,
    ...fonts.placeHolder,
    borderColor: colors.white,
    marginBottom: moderateScale(20),
    width:'80%'
    
    
  },
});
export default CustomInput;