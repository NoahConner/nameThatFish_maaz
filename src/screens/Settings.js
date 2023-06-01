import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {BackSvg, BubbleSvg, ProfileRoundSvg, ProfileSvg} from '../assets/svg';
import {moderateScale} from 'react-native-size-matters';
import ImagePicker from 'react-native-image-crop-picker';
import {Bubbles, Button, CustomModal, SubHeading} from '../components';
import {Image} from 'react-native-svg';
import {colors, fonts} from '../constants';
import AppContext from '../context/AuthContext';
import { ScrollView } from 'react-native-gesture-handler';
import { screenHeight } from '../constants/screenResolution';

const Settings = ({navigation}) => {
  const [imgUri, setImgUri] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleDeleteAccount, setModalVisibleDeleteAccount] = useState(false);
  const context = useContext(AppContext);
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModalDeleteAccount = () => {
    setModalVisibleDeleteAccount(!isModalVisibleDeleteAccount);
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
      style={{flex: 1,height:screenHeight}}>
        <ScrollView>
        <CustomModal
        animationIn={'zoomin'}
        animationOut={'zoomout'}
        text1={'Camera'}
        text2={'Gallery'}
        text3={'Do you want to update your profile picture?'}
        onPress1={openCamera}
        onPress2={openGallery}
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
 <CustomModal
        animationIn={'zoomin'}
        animationOut={'zoomout'}
        text1={'Yes'}
        text2={'No'}
        text3={'Are you sure ? Want to delete your account?'}
        onPress1={() => {
          setModalVisibleDeleteAccount(false)
          context.setuserToken(null)}}
        onPress2={() => setModalVisibleDeleteAccount(false)}
        isVisible={isModalVisibleDeleteAccount}
        onClose={() => setModalVisibleDeleteAccount(false)}
      />
      {/* <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <BackSvg width={20} height={20} />
      </TouchableOpacity> */}

      <View style={styles.containerView}>
        <Bubbles
          width={35}
          height={35}
          right={moderateScale(60)}
          bottom={moderateScale(180)}
        />
        <Bubbles
          width={21}
          height={21}
          right={moderateScale(15)}
          bottom={moderateScale(150)}
        />
        <Bubbles
          width={47}
          height={47}
          right={moderateScale(30)}
          bottom={moderateScale(80)}
        />
        <Bubbles
          width={30}
          height={30}
          left={moderateScale(20)}
          top={moderateScale(490)}
        />
        <Bubbles
          width={12}
          height={12}
          left={moderateScale(10)}
          top={moderateScale(530)}
        />
        <Bubbles
          width={21}
          height={21}
          left={moderateScale(50)}
          top={moderateScale(530)}
        />
        
        <SubHeading name={'Settings'} />
        
        <View style={{position: 'absolute', top: moderateScale(58)}}>
          <ProfileRoundSvg width={110} height={110} />
        </View>
        <TouchableOpacity onPress={toggleModal} style={styles.imgCircle}>
          {/* {imgUri !==null ? (
            <Image source={{uri: imgUri}} />
          ) : (
            <ProfileSvg width={108} height={108} />
          )} */}
          <ProfileSvg width={100} height={100} />
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
            style={styles.subHead}>
            Personal Information
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => navigation.navigate('Help')}>
          <Text
            style={styles.subHead}>
            Help
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => navigation.navigate('TermsCondition')}>
          <Text
            style={styles.subHead}>
            Terms & Conditions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => navigation.navigate('PrivacyPolicy')}>
          <Text
            style={styles.subHead}>
            Privacy Policy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => navigation.navigate('AboutUs')}>
          <Text
            style={styles.subHead}>
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
            style={styles.subHead}>
            Change Password
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center',marginBottom:moderateScale(50)}}>
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
          onPress={toggleModalDeleteAccount}
          text={'Delete Account'}
          width={moderateScale(150)}
          backgroundColor={colors.primary}
          marginTop={moderateScale(0)}
          marginBottom={moderateScale(30)}
        />
      </View>
      
        </ScrollView>
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerView: {
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? moderateScale(20) :  moderateScale(20),
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
    width: 100,
    height: 100,
    borderRadius: 50,

    alignItems: 'center',
    justifyContent: 'center',
  },
  bubbleIcon: {
    position: 'absolute',
  },
  icon: {
    alignSelf:'flex-start',
    padding:moderateScale(10),
    marginLeft:moderateScale(10),
    top: Platform.OS === 'ios' ? moderateScale(40) :  moderateScale(10),
  },
  subHead:{
    ...fonts.subscriptionTrial_head,
    color: colors.black,
    paddingBottom: moderateScale(2),
  }

});
export default Settings;
