import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Platform,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { BackSvg, FishDetailsSvg, ResultFlatlist } from '../assets/svg';
import { colors, fonts } from '../constants';
import { moderateScale, s } from 'react-native-size-matters';
import { screenHeight } from '../constants/screenResolution';

const Result = ({ navigation }) => {
  const DATA = [
    {
      id: 1,
      image: ResultFlatlist,
      fishName: 'Fish Details',
      text1: 'Lorem ipsum dolor sit amet,',
      text2:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit,',
    },
    {
      id: 2,
      image: ResultFlatlist,
      fishName: 'Fish Details',
      text1: 'Lorem ipsum dolor sit amet,',
      text2:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit,',
    },
    {
      id: 3,
      image: ResultFlatlist,
      fishName: 'Fish Details',
      text1: 'Lorem ipsum dolor sit amet,',
      text2:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit,',
    },
    {
      id: 4,
      image: ResultFlatlist,
      fishName: 'Fish Details',
      text1: 'Lorem ipsum dolor sit amet,',
      text2:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit,',
    },

  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ flex: 1, marginTop: moderateScale(20) }}>
        <item.image width={150} height={144} />
        <View style={{ marginLeft: moderateScale(5), width: moderateScale(133) }}>
          <Text
            style={{
              color: colors.black,
              ...fonts.buttonText,
              marginTop: moderateScale(5),
            }}>
            {item?.fishName}
          </Text>
          <Text
            style={{
              color: colors.light_black,
              ...fonts.placeHolder2,
              marginTop: moderateScale(6),
            }}>
            {item?.text1}
          </Text>
          <Text
            style={{
              color: colors.light_black,
              ...fonts.sub_head_small,
              marginTop: moderateScale(6),
            }}>
            {item?.text2}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ImageBackground
      source={require('../assets/images/bg2.png')}
      resizeMode="stretch"
      style={{ flex: 1, height: screenHeight }}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ margin: moderateScale(20), marginBottom: moderateScale(50) }}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.goBack()
          }}>

          <BackSvg width={20} height={20} />
        </TouchableOpacity>
        <View style={styles.containerView}>
          <FishDetailsSvg width={270} height={150} />
          <View style={{ marginLeft: moderateScale(5) }}>

            <Text
              style={{
                color: colors.black,
                ...fonts.fishDetail,
                marginTop: moderateScale(6),
              }}>
              Fish Details
            </Text>

            <Text
              style={{
                color: colors.light_black,
                ...fonts.subscriptionTrial_head,
                marginTop: moderateScale(6),
              }}>
              Lorem ipsum dolor sit amet,
            </Text>
            <Text
              style={{
                color: colors.light_black,
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
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerView: {

    width: '77%',
    marginTop: Platform.OS ? moderateScale(60) : moderateScale(10),
  },

  icon: {
    alignSelf:'flex-start',
    padding:moderateScale(10),
    top: Platform.OS ? moderateScale(40) :  moderateScale(15),
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
export default Result;
