import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  Alert,
  Image
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
import {Button, CustomModal, Loader} from '../components';
import ImagePicker from 'react-native-image-crop-picker';
import FlatlistHistory from '../components/FlatlistHistory';
import {screenHeight, screenWidth} from '../constants/screenResolution';
import WavesAnimated from '../components/WavesAnimated';
import AppContext from '../context/AuthContext';
import { HistoryAuth } from '../services';
import { FlatList } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';

const axios = require('axios').default;

const Home = ({navigation}) => {
  const context = useContext(AppContext);
  const userToken = context.userToken;
  const device_token = context.fcmToken;
  const id = context.userId;
  const [History, setHistory] = useState(null);
  const [imgUri, setImgUri] = useState(null);
  const [loading, setloading] = useState(false);
  const [showViewMore, setshowViewMore] = useState(false)
  const [showRecentHistory, setshowRecentHistory] = useState(true)
  const [fishExist, setFishExist] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const isFocused = useIsFocused();

  const openCamera = () => {
    ImagePicker.openCamera({
      cropping: true,
      includeBase64: true,
      freeStyleCropEnabled: true,
      compressImageQuality: 0.8,
    }).then(image => {
      setloading(true);
      setModalVisible(false);
      getLabel(image?.data);
    });
  };

  const openGallery = () => {
    ImagePicker.openPicker({
      cropping: true,
      includeBase64: true,
      freeStyleCropEnabled: true,
      compressImageQuality: 0.8,
    }).then(image => {
      console.log(image?.data, 'base64');
      setloading(true);
      setModalVisible(false);
      getLabel(image?.data);
    });
  };

  const cleanImagePicker = () => {
    ImagePicker.clean()
      .then(() => {
        console.log('removed all tmp images from tmp directory');
      })
      .catch(e => {
        Alert.alert(e);
      });
  };

  useEffect(() => {
    cleanImagePicker();
    viewHistory()
    console.log(userToken,'userToken');
    console.log(id,'user IDD');
    console.log(device_token,'device_token');
  }, [isFocused]);
  const getLabel = base64 => {
    const apiKey = 'AIzaSyDEWD5MLAof7UnDMH5mVf9Fpwr_dLtH5X0';
    const endpoint = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;

    const requestBody = {
      requests: [
        {
          image: {
            content: base64,
          },
          features: [
            {
              type: 'LABEL_DETECTION',
            },
          ],
        },
      ],
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    axios
      .post(endpoint, requestBody, config)
      .then(res => {
        console.log(res?.data?.responses[0]?.labelAnnotations);
        let data = res?.data?.responses[0]?.labelAnnotations;
        const isFishExist = data.some(item =>
          Object.values(item).includes('Fish'),
        );
        // setFishExist(isFishExist);
        {
          isFishExist
            ? navigation.navigate('Result', {getBase64: base64})
            : setModalVisible(true);
        }
        console.log(isFishExist, 'fish exist');

        setloading(false);
      })
      .catch(err => {
        if (err) {
          Alert.alert('No Fish found in Image!!');
        }
      });
  };
 
 const viewHistory=()=>{
  // setloading(true)
  HistoryAuth.getImgUrlhistory({userToken})
  .then(res => {
    let recentHistory=res?.data?.history.slice(0,9);
    setHistory(recentHistory);
    recentHistory.length == 9 ? setshowViewMore(true): setshowViewMore(false)
    recentHistory.length == 0 ? setshowRecentHistory(false): setshowRecentHistory(true)
    console.log(recentHistory.length);
    })

  .catch(err => {
    console.log(err?.response?.data);
  });
// setloading(false)
}

const renderItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{
      navigation.navigate('ResultHistory',{getImgUrl: item?.img_url})
    }}>
      <Image
        source={{uri: item?.img_url}}
        resizeMode="contain"
        style={{width: '100%', height: '100%',borderRadius:15}}
      />
    </TouchableOpacity>
  );
};

  return (
    <ImageBackground
      source={require('../assets/images/backgroundPlain.png')}
      resizeMode="stretch"
      style={{flex: 1, height: screenHeight}}>
      {loading ? <Loader /> : null}
      <WavesAnimated />
      <CustomModal
        animationIn={'zoomin'}
        animationOut={'zoomout'}
        text1={'Upload'}
        text2={'Scan'}
        onPress2={() => {
          openCamera();
          setModalVisible(false);
        }}
        onPress1={() => {
          openGallery();
          setModalVisible(false);
        }}
        text3={'Alert ! This App rechognize Fish Image only'}
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
      <TouchableOpacity style={styles.uploadIcon} onPress={openGallery}>
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
            width: moderateScale(120),
            alignSelf: 'center',
            marginTop:
              Platform.OS === 'ios' ? moderateScale(20) : moderateScale(0),
          }}
          onPress={openCamera}>
          <ScannerSvg width={110} height={110} />
        </TouchableOpacity>
        <View style={{alignItems:'center'}}>
          <Button onPress={openCamera} text={'Scan'} />
          {showRecentHistory ? <Text style={{...fonts.subHeadHistory, color: colors.white}}>
            Recent History
          </Text>  : null}
          
        </View> 
        
        <View style={{width: screenWidth, padding: '5%'}}>
        {/* {/ <View style={{alignItems: 'center'}}> /} */}
          <FlatList renderItem={renderItem} data={History} numColumns={3} />
        {/* {/ </View> /} */}
        </View>
        {showViewMore ?  <View style={{alignItems:'center'}}>
          <Button
            marginTop={moderateScale(10)}
            onPress={() => {
              navigation.navigate('History');
            }}
            text={'View More'}
          />
        </View> : null }
       
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(7),
    marginRight: moderateScale(7),
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#000',
    width: moderateScale(106),
    height: moderateScale(69),
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
