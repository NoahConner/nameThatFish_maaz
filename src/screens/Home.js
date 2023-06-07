import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Platform,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {
  BackSvg,
  ManWithFishSvg,
  ScannerSvg,
  UploadPhotoSvg,
} from '../assets/svg';
import {colors, fonts} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import {Button} from '../components';
import ImagePicker from 'react-native-image-crop-picker';
import FlatlistHistory from '../components/FlatlistHistory';
import {screenHeight, screenWidth} from '../constants/screenResolution';
import WavesAnimated from '../components/WavesAnimated';
import AppContext from '../context/AuthContext';

const Home = ({navigation}) => {
  const context = useContext(AppContext);
  const [imgUri, setImgUri] = useState(null);

  const openCamera = () => {
    ImagePicker.openCamera({
      cropping: true,
      includeBase64: true,
      freeStyleCropEnabled: true,
    }).then(image => {
      setModalVisible(false);
      setImgUri(image?.path);
      console.log(imgUri, 'Image uri');
    });
  };
  const openGallery = () => {
    ImagePicker.openPicker({
      cropping: true,
      includeBase64: true,
      freeStyleCropEnabled: true,
    }).then(image => {
      setModalVisible(false);
      setImgUri(image?.path);
      console.log(imgUri, 'Image uri');
    });
  };
 
  
useEffect(() => {
  console.log(context.userToken,'User Token In Home');
}, [])

  return (
    <ImageBackground
      source={require('../assets/images/backgroundPlain.png')}
      resizeMode="stretch"
      style={{flex: 1, height: screenHeight}}>
      <WavesAnimated/>
      <TouchableOpacity
        style={styles.uploadIcon}
        onPress={() => {
          openGallery();
        }}>
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

      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            width:moderateScale(120) ,
            alignSelf: 'center',
            marginTop: Platform.OS === 'ios' ? moderateScale(20) : moderateScale(0),
          }}
          onPress={() => {
            openCamera();
          }}>
          <ScannerSvg width={110} height={110} />
        </TouchableOpacity>
        <View style={styles.container}>
          <Button
            onPress={() => {
              navigation.navigate('Result');
            }}
            text={'Scan'}
          />
          <Text style={{...fonts.subHeadHistory, color: colors.white}}>
            Recent History
          </Text>
        </View>
        <View style={{width: screenWidth, padding: '5%'}}>
          <FlatlistHistory />
          <FlatlistHistory />
          <FlatlistHistory />
        </View>
        <View style={{...styles.container}}>
          <Button
            marginTop={moderateScale(10)}
            onPress={() => {
              navigation.navigate('History');
            }}
            text={'View More'}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth:1,
    // borderColor:colors.white,
    alignItems: 'center',
  },
  mainContainer: {
    // borderColor:'#000',
    // borderWidth:1,
    marginTop: moderateScale(30),
  },

  icon: {
    position: 'absolute',
    left: moderateScale(15),
    top: moderateScale(15),
  },
  uploadIcon: {
    right: moderateScale(15),
    top: Platform.OS === 'ios' ? moderateScale(60) : moderateScale(20),
    alignItems: 'flex-end',
  },
  text: {
    ...fonts.trial_head,
    color: colors.white,
    width: moderateScale(290),
  },
});
export default Home;
