import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import React, {useState} from 'react';
import {colors, fonts} from '../constants';
import {ActivityIndicate} from '.';

const Button = ({
  text,
  onPress,
  backgroundColor = colors.primary,
  height = moderateScale(28),
  width = moderateScale(92),
  marginTop = moderateScale(40),
  marginBottom = moderateScale(20),
  borderRadius = 24,
  indicator=false,
}) => {
  
  // const [indicator, setindicator] = useState(false);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.btnV,
        backgroundColor: backgroundColor,
        height: height,
        width: width,
        marginTop: marginTop,
        marginBottom: marginBottom,
        borderRadius: borderRadius,
      }}>
      <ActivityIndicate animating={indicator} />
      {indicator ? null : (
        <Text style={{...fonts.buttonText, color: colors.white}}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnV: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Button;
