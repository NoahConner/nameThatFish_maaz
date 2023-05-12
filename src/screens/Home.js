import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import React from 'react';
import {BackSvg, ManWithFishSvg, ScannerSvg, UploadPhotoSvg} from '../assets/svg';
import {colors, fonts} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import {Button} from '../components';
import FlatlistHistory from '../components/FlatlistHistory';

const Home = () => {
  return (
    <ImageBackground
      source={require('../assets/images/Rectangle.png')}
      resizeMode="stretch"
      style={{flex: 1, justifyContent: 'center'}}>
      <TouchableOpacity style={styles.icon}>
        <BackSvg width={20} height={20} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.uploadIcon}>
        <UploadPhotoSvg width={30} height={23} />
        <Text
          style={{
            ...fonts.sub_head_small,
            color: colors.white,
            marginTop: moderateScale(3),
          }}>
          Upload
        </Text>
      </TouchableOpacity>
      
        <TouchableOpacity style={{alignItems:'center'}}>
          <ScannerSvg width={140} height={140} />
        </TouchableOpacity>
        <View style={styles.container}>
        <Button
          onPress={() => {
            console.warn('Pressed');
          }}
          text={'Scan'}
        />
        <Text style={{...fonts.subHeadHistory,color:colors.white}}>History</Text>
        </View>
        <View style={{marginVertical:moderateScale(20)}}>
        <FlatlistHistory/>
        <FlatlistHistory/>
        <FlatlistHistory/>
        </View>
        <View style={{...styles.container}}>
        <Button
        marginTop={moderateScale(0)}
          onPress={() => {
            console.warn('Pressed');
          }}
          text={'View More'}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
// borderWidth:1,
// borderColor:colors.white,
alignItems:'center'


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
export default Home;
