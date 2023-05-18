import {View, Text} from 'react-native';
import React from 'react';
import { colors, fonts } from '../constants';
import { moderateScale } from 'react-native-size-matters';

const CustomTexts = ({marginTop, marginBottom}) => {
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
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
      nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing
      elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet,
      consectetuer adipiscing elit, sed diam nonummy nibh euismod
      tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
      diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet,
      consectetuer adipiscing elit, sed diam nonummy nibh euismod
      tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
      diam nonummy nibh euismod tincidunt.{' '}
    </Text>
  );
};

export default CustomTexts;
