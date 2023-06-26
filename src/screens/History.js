import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
  Image,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {BackSvg, DeleteSvg} from '../assets/svg';
import {colors, fonts} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import FlatlistHistory from '../components/FlatlistHistory';
import {CustomModal, MainHeading, WavesAnimated} from '../components';
import {screenHeight, screenWidth} from '../constants/screenResolution';
import {HistoryAuth} from '../services';
import AppContext from '../context/AuthContext';
// import { useIsFocused } from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';

const History = ({navigation}) => {
  const context = useContext(AppContext);
  const userToken = context.userToken;
  const [History, setHistory] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  // const isFocused = useIsFocused();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
  viewHistory()
  }, []);

  const deleteSearchHistory=()=>{
    HistoryAuth.deleteHistory({userToken}).then((res)=>{
      console.log(res?.data);
    }).catch((err)=>{
      console.log(err?.response?.data);
    })
  }
  const viewHistory=()=>{
    HistoryAuth.getImgUrlhistory({userToken})
      .then(res => {
        setHistory(res?.data?.history);
      
      })
      .catch(err => {
        console.log(err?.response?.data);
      });

    }
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.container} onPress={()=>{
        navigation.navigate('ResultHistory',{getImgUrl: item?.img_url})
      }}>
        <Image
          source={{uri: item?.img_url}}
          resizeMode="contain"
          style={{width: '100%', height: '100%',
          borderRadius:15,}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      source={require('../assets/images/backgroundPlain.png')}
      resizeMode="stretch"
      style={{
        flex: 1,
        alignItems: 'center',
        height: screenHeight,
        width: screenWidth,
      }}>
      <WavesAnimated />
      <CustomModal
          animationIn={'zoomin'}
          animationOut={'zoomout'}
          text1={'Yes'}
          text2={'No'}
          text3={'Are you sure ? Want to clear all the history?'}
          onPress1={()=>{deleteSearchHistory()
            viewHistory()
          toggleModal()
        }}
          onPress2={toggleModal}
          isVisible={isModalVisible}
          onClose={() => setModalVisible(false)}
        />
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          navigation.goBack();
        }}>
        <BackSvg width={20} height={20} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.uploadIcon}
        onPress={() => {
          toggleModal()
        }}>
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

      <MainHeading
        name={'History'}
        marginTop={
          Platform.OS === 'ios' ? moderateScale(100) : moderateScale(50)
        }
      />
      <ScrollView
        style={{
          marginVertical: moderateScale(20),
          marginBottom: moderateScale(55),
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
          <FlatList renderItem={renderItem} data={History} numColumns={3} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(7),
    marginRight: moderateScale(7),
    alignItems: 'center',
    
    width: moderateScale(106),
    height: moderateScale(69),
  },
  icon: {
    position: 'absolute',
    left: moderateScale(15),
    top: Platform.OS === 'ios' ? moderateScale(60) : moderateScale(20),
    padding: moderateScale(10),
  },
  uploadIcon: {
    position: 'absolute',
    right: moderateScale(20),
    top: Platform.OS === 'ios' ? moderateScale(60) : moderateScale(25),
    alignItems: 'center',
  },
  text: {
    ...fonts.trial_head,
    color: colors.white,
    width: moderateScale(290),
  },
});
export default History;
