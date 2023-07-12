import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Platform,
  Alert,
  Image,
  Linking,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {BackSvg, FishDetailsSvg, ResultFlatlist} from '../assets/svg';
import {colors, fonts} from '../constants';
import {moderateScale, s} from 'react-native-size-matters';
import {screenHeight} from '../constants/screenResolution';
import {Loader} from '../components';
import { HistoryAuth, UserServices } from '../services';
import AppContext from '../context/AuthContext';

const axios = require('axios').default;
const baseURL = 'https://serpapi.com/search.json?';

const Result = ({navigation, route}) => {
  const context = useContext(AppContext);
  const userToken = context.userToken;
  const {getBase64} = route?.params;
  
  const [loading, setloading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [headerData, setHeaderData] = useState(null);
  // const [title, setTitle] = useState();
  // const [subtitle, setSubtitle] = useState();
  // const [thumbnail, setThumbnail] = useState('');
  useEffect(() => {
    // console.log(getBase64);
    postBase64(getBase64);
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{flex: 1, marginTop: moderateScale(20)}}
        onPress={() => Linking.openURL(item?.link)}>
        {item?.thumbnail !== null ? (
          <Image
            source={{
              uri: item?.thumbnail,
            }}
            resizeMode="cover"
            style={{
              height: moderateScale(150),
              width: moderateScale(150),
              borderRadius: 30,
            }}
          />
        ) : null}

        <View style={{marginLeft: moderateScale(5), width: moderateScale(133)}}>
          <Text
            style={{
              color: colors.black,
              ...fonts.buttonText,
              marginTop: moderateScale(5),
            }}>
            {item?.title.substring(0, 36) + '...'}
          </Text>
          <Text
            style={{
              color: colors.light_black,
              ...fonts.placeHolder2,
              marginTop: moderateScale(6),
            }}>
            {item?.link.substring(0, 16) + '...'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const postBase64 = base64 => {
    setloading(true);
    UserServices.uploadBase64({base64})
      .then(function (response) {
        let imgUrl = (response?.data?.data?.image_url)
        .replace(/\s+/g, '%20');
        setloading(false);
        console.log(imgUrl);
        hitApi(imgUrl);
        postUrlHistory(imgUrl)
      })
      .catch(function (error) {
        setloading(false);
        Alert.alert('Network/Server Error');
        console.log(error?.response);
      });
  };

  const postUrlHistory=(imgUrl)=>{
    HistoryAuth.postImgUrlhistory({imgUrl,userToken}).then((res)=>{
      console.log(res?.data);
    }).catch((err)=>{
      console.log(err?.response?.data);
    })
  }
  
  const hitApi = imgUrl => {
    // setApiData([]);
    // setloading(true);
    axios
      .get(baseURL, {
        params: {
          engine: 'google_lens',
          url: `${imgUrl}`,
          api_key:
            'abc4a7286c361910a689bd3bddc9f1f1bea6ca1b06cffc10911802d178e44fe1',
        },
      })
      .then(res => {
        let data = res?.data?.visual_matches;
        let dataHeader = res?.data?.knowledge_graph[0];
        dataHeader ? setHeaderData(dataHeader): null
        setApiData(data);
        setloading(false);
      })
      .catch(err => {
        Alert.alert('No Result Found');
        console.log(err, 'ERROR');
        setloading(false);
      });
  };

  console.log();
  return (
    <ImageBackground
      source={require('../assets/images/bg2.png')}
      resizeMode="stretch"
      style={{flex: 1, height: screenHeight}}>
      {loading ? <Loader /> : null}

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{margin: moderateScale(20), marginBottom: moderateScale(50)}}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.goBack();
          }}>
          <BackSvg width={20} height={20} />
        </TouchableOpacity>
        
          <View style={styles.containerView}>
            <View style={{marginLeft: moderateScale(5)}}>
              <Text
                style={{
                  color: colors.black,
                  ...fonts.fishDetail,
                  marginTop: moderateScale(6),
                }}>
                {headerData?.title}
              </Text>

              <Text
                style={{
                  color: colors.light_black,
                  ...fonts.subscriptionTrial_head,
                  marginTop: moderateScale(6),
                }}>
                {headerData?.subtitle}
              </Text>
            </View>
          </View>
        

        <FlatList renderItem={renderItem} data={apiData} numColumns={2} />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerView: {
    width: '77%',
    marginTop: Platform.OS === 'ios' ? moderateScale(60) : moderateScale(10),
  },

  icon: {
    alignSelf: 'flex-start',
    padding: moderateScale(10),
    top: Platform.OS === 'ios' ? moderateScale(40) : moderateScale(0),
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
