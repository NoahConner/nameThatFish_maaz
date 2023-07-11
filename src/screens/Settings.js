import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  Alert
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {BackSvg, BubbleSvg, ProfileRoundSvg, ProfileSvg} from '../assets/svg';
import {moderateScale} from 'react-native-size-matters';
import ImagePicker from 'react-native-image-crop-picker';
import {Bubbles, Button, CustomModal, Loader, SubHeading} from '../components';
import {colors, fonts} from '../constants';
import AppContext from '../context/AuthContext';
import {ScrollView} from 'react-native-gesture-handler';
import {screenHeight} from '../constants/screenResolution';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthServices, UserServices} from '../services';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useIsFocused } from '@react-navigation/native';

const Settings = ({navigation}) => {
  const context = useContext(AppContext);
  const id =context.userId;
  const userToken = context.userToken;
  const isFocused = useIsFocused();
  const [imgUri, setImgUri] = useState(null);
  const [loading, setloading] = useState(false)
  const [loading2, setloading2] = useState(false);
  const [name, setname] = useState(null)
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleDeleteAccount, setModalVisibleDeleteAccount] =
    useState(false);

    useEffect(() => {
      getInfo()
    
    }, [isFocused])

    const getInfo=()=>{
      UserServices.userProfile({userToken}).then((res)=>{
        setImgUri(res?.data?.data?.user_img);
        setname(res?.data?.data?.name)
        
       }).catch((err)=>{
        console.log(err?.response?.data);
      
       })
      
    }
    
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
      compressImageQuality: 0.8,
    }).then(image => {
      setModalVisible(false);
      // setImgUri(image?.path)
      uploadImage(image?.data)
      
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
      // setImgUri(image?.path)
      uploadImage(image?.data)
      
    });
  };

  const logOut = async () => {
    setloading(true)
    await AsyncStorage.clear();
    context.setuserToken(null);
    setloading(false)
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      console.log('Google Logout');
    }
    setTimeout(() => {
      navigation.navigate('SignIn');
    }, 1000);
  };

  const deleteAccount=async()=>{
    // setloading(true)
    UserServices.deleteUser({id}).then((res)=>{
      console.log(res?.data);
      // setloading(false)
    }).catch((err)=>{
      console.log(err,'Error');
      // setloading(false)
    })
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      console.log('Google Logout');
    }
  }

  const uploadImage=(base64)=>{
    UserServices.uploadBase64({base64}).then((res)=>{
      uploadProfileImg(res?.data?.data?.image_url);
      // uploadProfileImg(imageUrl)
      console.log(res?.data?.data?.image_url);
    }).catch((err)=>{
      console.log(err?.response,'Error');
    })
  }

  const uploadProfileImg=(imageUrl)=>{
    UserServices.uploadDp({id,imageUrl}).then((res)=>{
      // setimageUrl(res?.data?.data?.image_url);
      Alert.alert(res?.data?.message);
    }).catch((err)=>{
      console.log(err?.response,'Error');
    })
  }
// console.log(id,'user ID');
  return (
    <ImageBackground
      source={require('../assets/images/bg1.png')}
      resizeMode="stretch"
      style={{flex: 1, height: screenHeight}}>
        {loading2 ? <Loader /> : null}
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
            deleteAccount()
            setModalVisibleDeleteAccount(false);
            context.setuserToken(null);
            context.setuserId(null);
          }}
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

          <TouchableOpacity onPress={toggleModal} style={{...styles.imgCircle,}}>
          <View style={{position: 'relative'}}>
              <ProfileRoundSvg width={110} height={110} />
            </View>
          {imgUri ? (
            
              <Image source={{ uri: imgUri }} style={{...styles.imgCircle,position:'absolute'}} />
              
            ) : (
              <View style={{position: 'absolute'}}>
              <Icon name="user" size={82} color={colors.primary} />
              </View>
            )}
           
            {/* <View style={{position: 'absolute'}}>
              <ProfileSvg width={100} height={100} />
            </View>  */}
          </TouchableOpacity>
          <Text style={{...fonts.trial_head_sub, color: colors.primary}}>
            {name}
          </Text>
        </View>
        <View
          style={{
            marginTop: moderateScale(15),
            marginBottom: moderateScale(5),
          }}>
          <TouchableOpacity
            style={styles.items}
            onPress={() => navigation.navigate('PersonalInformation')}>
            <Text style={styles.subHead}>Personal Information</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.items}
            onPress={() => navigation.navigate('Help')}>
            <Text style={styles.subHead}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.items}
            onPress={() => navigation.navigate('TermsCondition')}>
            <Text style={styles.subHead}>Terms & Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.items}
            onPress={() => navigation.navigate('PrivacyPolicy')}>
            <Text style={styles.subHead}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.items}
            onPress={() => navigation.navigate('AboutUs')}>
            <Text style={styles.subHead}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.items}
            onPress={() => 
              navigation.navigate('ChangePassword2')
            }>
            <Text style={styles.subHead}>Change Password</Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center', marginBottom: moderateScale(50)}}>
          <Button
            onPress={() => {
              setTimeout(() => {
                logOut();
              });
            }}
            text={'Logout'}
            backgroundColor={colors.primary}
            marginTop={moderateScale(0)}
            indicator={loading ? true : false}
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
    marginTop: Platform.OS === 'ios' ? moderateScale(40) : moderateScale(20),
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
    
    // borderWidth:1,
    // borderColor:colors.black
  },
  bubbleIcon: {
    position: 'absolute',
  },
  icon: {
    alignSelf: 'flex-start',
    padding: moderateScale(10),
    marginLeft: moderateScale(10),
    top: Platform.OS === 'ios' ? moderateScale(40) : moderateScale(10),
  },
  subHead: {
    ...fonts.subscriptionTrial_head,
    color: colors.black,
    paddingBottom: moderateScale(2),
  },
});
export default Settings;
