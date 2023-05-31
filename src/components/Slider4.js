import {
  View,
  Text,
  ImageBackground,
  
  StyleSheet,
  
  FlatList,
} from 'react-native';
import React from 'react';
import {
  
  Slider4ResultSvg,
  Slider4Svg,
} from '../assets/svg';
import {colors, fonts} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import MainHeading from './MainHeading';
import { WavesAnimated } from '.';


const Slider4 = () => {
  const DATA = [
    {
      id: 1,
      image: Slider4ResultSvg,
      fishName: 'Fish Details',
      text1: 'Lorem ipsum dolor sit amet,',
      text2:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt',
    },
    {
      id: 2,
      image: Slider4ResultSvg,
      fishName: 'Fish Details',
      text1: 'Lorem ipsum dolor sit amet,',
      text2:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={{flex: 1, marginTop: moderateScale(20)}}>
        <item.image width={165} height={147} />
        <View style={{marginLeft: moderateScale(5), width: moderateScale(170)}}>
          <Text
            style={{
              color: colors.white,
              ...fonts.buttonText,
              marginTop: moderateScale(5),
            }}>
            {item?.fishName}
          </Text>
          <Text
            style={{
              color: colors.white,
              ...fonts.placeHolder2,
              marginTop: moderateScale(6),
            }}>
            {item?.text1}
          </Text>
          <Text
            style={{
              color: colors.white,
              ...fonts.sub_head_small,
              marginTop: moderateScale(6),
            }}>
            {item?.text2}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <ImageBackground
      source={require('../assets/images/Rectangle.png')}
      resizeMode="stretch"
      style={{flex: 1}}>
        {/* <WavesAnimated /> */}
      <View
        style={{
          margin: moderateScale(10),
          marginBottom: moderateScale(110),
          marginTop: moderateScale(20),
        }}>
   
        <MainHeading
          name={'Show Result'}
          marginBottom={moderateScale(10)}
          marginTop={moderateScale(10)}
        />
        <View style={styles.containerView}>
          <Slider4Svg width={270} height={150} />
          <View style={{marginLeft: moderateScale(5)}}>
            <Text
              style={{
                color: colors.white,
                ...fonts.fishDetail,
                marginTop: moderateScale(6),
              }}>
              Fish Details
            </Text>

            <Text
              style={{
                color: colors.white,
                ...fonts.subscriptionTrial_head,
                marginTop: moderateScale(6),
              }}>
              Lorem ipsum dolor sit amet,
            </Text>
            <Text
              style={{
                color: colors.white,
                ...fonts.text,
                marginTop: moderateScale(6),
              }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit,
            </Text>
          </View>
        </View>
        <FlatList renderItem={renderItem} data={DATA} numColumns={2} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerView: {
    width: '77%',
    marginTop: moderateScale(10),
  },

  icon: {
    left: moderateScale(15),
    top: moderateScale(15),
  },
  uploadIcon: {
    position: 'absolute',
    right: moderateScale(20),
    top: moderateScale(25),
    alignItems: 'center',
  },
  text: {
    ...fonts.trial_head,
    color: colors.white,
    width: moderateScale(290),
  },
});
export default Slider4;
