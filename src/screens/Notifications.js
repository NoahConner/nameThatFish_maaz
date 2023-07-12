import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {colors, fonts} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import {MainHeading} from '../components';
import WavesAnimated from '../components/WavesAnimated';
import {screenWidth} from '../constants/screenResolution';
import AppContext from '../context/AuthContext';
import {AdminServices} from '../services';
import {FlatList} from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Notifications = () => {
  const [notifications, setNotifications] = useState(null);
  const context = useContext(AppContext);
  const userToken = context.userToken;
  const isFocused = useIsFocused();

  
  const getNotifications = () => {
    AdminServices.getNotifications({userToken})
      .then(res => {
        let data=res?.data.reverse();
        data.map((item)=>{
          console.log(item?.body);
        })
        setNotifications(data);
      })
      .catch(err => {
        console.log(err?.response?.data);
      });
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.notificationBody}>
        <Text style={{...fonts.sub_head_small, color: colors.white}}>
          {item.body}{' '}
        </Text>
        <Text style={{...fonts.sub_head_small, color: colors.white,fontSize:14}}>
          {item.created_at.substring(2,10)} At {item.created_at.substring(11,16)}
        </Text>
      </View>
    );
  };

  useEffect(() => {
    getNotifications();
    // console.log(userToken, 'User Token : Notifications');
  }, [isFocused]);
  return (
    <ImageBackground
      source={require('../assets/images/backgroundPlain.png')}
      resizeMode="stretch"
      style={{flex: 1, alignItems: 'center'}}>
      <WavesAnimated />

      <MainHeading
        name={'Notifications'}
        marginTop={
          Platform.OS === 'ios' ? moderateScale(80) : moderateScale(60)
        }
      />
      <View style={{marginTop: moderateScale(20), width: screenWidth - 50}}>
        <FlatList data={notifications} renderItem={renderItem} showsVerticalScrollIndicator={false}
        style={{marginBottom:moderateScale(50)}} 
         />
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
  icon: {
    position: 'absolute',

    padding: moderateScale(10),
    alignSelf: 'flex-start',
    left: moderateScale(15),
    top: Platform.OS === 'ios' ? moderateScale(60) : moderateScale(15),
    // backgroundColor:'red'
  },
  uploadIcon: {
    position: 'absolute',
    right: moderateScale(20),
    top: moderateScale(25),
    alignItems: 'center',
  },
  notificationBody: {
    borderBottomWidth: 1,
    borderColor: colors.white,
    padding: moderateScale(10),
    marginTop: moderateScale(20),
  },
});
export default Notifications;
