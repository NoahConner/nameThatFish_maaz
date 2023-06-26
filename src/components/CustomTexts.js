import {View, Text} from 'react-native';
import React from 'react';
import { colors, fonts } from '../constants';
import { moderateScale } from 'react-native-size-matters';

const CustomTexts = ({marginTop, marginBottom,text}) => {
  return (
    <Text
      style={{
        ...fonts.text,
        color: colors.light_black,
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginHorizontal:moderateScale(20),
        textAlign:'center'
      }}>
        {text}
    </Text>
  );
};

export default CustomTexts;
