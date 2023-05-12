import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {BackSvg, DeleteSvg} from '../assets/svg';
import {colors, fonts} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import FlatlistHistory from '../components/FlatlistHistory';

const History = () => {
  return (
    <ImageBackground
      source={require('../assets/images/Rectangle.png')}
      resizeMode="stretch"
      style={{flex: 1, justifyContent: 'center'}}>
      <TouchableOpacity style={styles.icon}>
        <BackSvg width={20} height={20} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.uploadIcon}>
        <DeleteSvg width={16} height={18} />
        <Text
          style={{
            ...fonts.sub_head_small,
            color: colors.black,
            marginTop: moderateScale(3),
          }}>
          Clear All
        </Text>
      </TouchableOpacity>

      <View style={{alignItems: 'center',marginTop:moderateScale(80)}}>
        <Text style={{...fonts.HeadAuth, color: colors.white}}>History</Text>
      </View>
      <ScrollView
        style={{marginVertical: moderateScale(20),marginBottom:moderateScale(50)}}
        showsVerticalScrollIndicator={false}>
        <FlatlistHistory />
        <FlatlistHistory />
        <FlatlistHistory />
        <FlatlistHistory />
        <FlatlistHistory />
        <FlatlistHistory />
        <FlatlistHistory />
        <FlatlistHistory />
        <FlatlistHistory />
        <FlatlistHistory />
        <FlatlistHistory />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth:1,
    // borderColor:colors.white,
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
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
export default History;
