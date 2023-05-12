import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import React from 'react';
import { colors, fonts } from '../constants';

const Button = ({
  text,
  onPress,
  backgroundColor=colors.primary,
  height=moderateScale(28),
  width=moderateScale(99),
  marginTop=moderateScale(40),
  marginBottom=moderateScale(20)
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.btnV,
        backgroundColor: backgroundColor,
        height:height,
        width:width,
        marginTop:marginTop,
        marginBottom:marginBottom
        
      }}>
      <Text style={{ ...styles.btntext,color:colors.white }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnV: {
    
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  btntext: {
    ...fonts.buttonText,
    
  },
}});
export default Button;