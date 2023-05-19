import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {BackSvg, BubbleSvg, ProfileRoundSvg, ProfileSvg} from '../assets/svg';
import {moderateScale} from 'react-native-size-matters';
import ImagePicker from 'react-native-image-crop-picker';
import {Bubbles, Button, CustomModal, SubHeading} from '../components';
import {Image} from 'react-native-svg';
import {colors, fonts} from '../constants';
import AppContext from '../context/AuthContext';

const Settings = ({navigation}) => {
  const [imgUri, setImgUri] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const context = useContext(AppContext);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const openCamera = () => {
    toggleModal;
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
    toggleModal;
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

  return (
    <ImageBackground
      source={require('../assets/images/bg1.png')}
      resizeMode="stretch"
      style={{flex: 1}}>
      <CustomModal
        animationIn={'zoomin'}
        animationOut={'zoomout'}
        text1={'Camera'}
        text2={'Gallery'}
        onPress1={openCamera}
        onPress2={openGallery}
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />

      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <BackSvg width={20} height={20} />
      </TouchableOpacity>

      <View style={styles.containerView}>
        <Bubbles
          width={38}
          height={38}
          right={moderateScale(60)}
          bottom={moderateScale(230)}
        />
        <Bubbles
          width={23}
          height={23}
          right={moderateScale(15)}
          bottom={moderateScale(190)}
        />
        <Bubbles
          width={50}
          height={50}
          right={moderateScale(30)}
          bottom={moderateScale(110)}
        />
        <Bubbles
          width={31}
          height={31}
          left={moderateScale(20)}
          top={moderateScale(530)}
        />
        <Bubbles
          width={13}
          height={13}
          left={moderateScale(10)}
          top={moderateScale(580)}
        />
        <Bubbles
          width={24}
          height={24}
          left={moderateScale(50)}
          top={moderateScale(590)}
        />
        <SubHeading name={'Settings'} />
        <View style={{position: 'absolute', top: moderateScale(58)}}>
          <ProfileRoundSvg width={119} height={119} />
        </View>
        <TouchableOpacity onPress={toggleModal} style={styles.imgCircle}>
          {/* {imgUri !==null ? (
            <Image source={{uri: imgUri}} />
          ) : (
            <ProfileSvg width={108} height={108} />
          )} */}
          <ProfileSvg width={108} height={108} />
        </TouchableOpacity>
        <Text style={{...fonts.trial_head_sub, color: colors.primary}}>
          David Junior
        </Text>
      </View>

      <View style={{marginTop: moderateScale(15),marginBottom:moderateScale(5)}}>
        <TouchableOpacity
          style={styles.items}
          onPress={() => navigation.navigate('PersonalInformation')}>
          <Text
            style={{
              ...fonts.subscriptionTrial_head,
              color: colors.black,
              paddingBottom: moderateScale(5),
            }}>
            Personal Information
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => navigation.navigate('Help')}>
          <Text
            style={{
              ...fonts.subscriptionTrial_head,
              color: colors.black,
              paddingBottom: moderateScale(5),
            }}>
            Help
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => navigation.navigate('TermsCondition')}>
          <Text
            style={{
              ...fonts.subscriptionTrial_head,
              color: colors.black,
              paddingBottom: moderateScale(5),
            }}>
            Terms & Conditions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => navigation.navigate('PrivacyPolicy')}>
          <Text
            style={{
              ...fonts.subscriptionTrial_head,
              color: colors.black,
              paddingBottom: moderateScale(5),
            }}>
            Privacy Policy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => navigation.navigate('AboutUs')}>
          <Text
            style={{
              ...fonts.subscriptionTrial_head,
              color: colors.black,
              paddingBottom: moderateScale(5),
            }}>
            About Us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            context.setuserToken(null)
            setTimeout(() => {
              navigation.navigate('ChangePassword')
            });
          }
            
          }
          >
          <Text
            style={{
              ...fonts.subscriptionTrial_head,
              color: colors.black,
              paddingBottom: moderateScale(5),
            }}>
            Change Password
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <Button
          onPress={() => {
            context.setuserToken(null)
            setTimeout(() => {
              navigation.navigate('SignIn')
            });
          }
            
          }
          text={'Logout'}
          backgroundColor={colors.primary}
          marginTop={moderateScale(0)}
        />
         <Button
          
          text={'Delete Account'}
          width={moderateScale(150)}
          backgroundColor={colors.primary}
          marginTop={moderateScale(0)}
          marginBottom={moderateScale(30)}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerView: {
    alignItems: 'center',
    marginTop: moderateScale(40),
  },
  items: {
    width: '82%',
    borderBottomWidth: 2,
    borderColor: colors.black,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: moderateScale(20),
  },
  imgCircle: {
    marginVertical: moderateScale(25),
    width: 108,
    height: 108,
    borderRadius: 54,

    alignItems: 'center',
    justifyContent: 'center',
  },
  bubbleIcon: {
    position: 'absolute',
  },
  icon: {
    // position: 'absolute',
    left: moderateScale(15),
    top: moderateScale(15),
  },
});
export default Settings;
