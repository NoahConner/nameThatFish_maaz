import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import React from 'react';
import { colors, fonts } from '../constants';

const Button = ({
  text,
  onPress,
  backgroundColor=colors.primary,
  height=moderateScale(28),
  width=moderateScale(92),
  marginTop=moderateScale(40),
  marginBottom=moderateScale(20),
  borderRadius=24
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
        marginBottom:marginBottom,
        borderRadius:borderRadius
        
      }}>
      <Text style={{ ...fonts.buttonText,color:colors.white, }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnV: {
    
    alignItems: 'center',
    justifyContent: 'center',
    
 
}});
export default Button;