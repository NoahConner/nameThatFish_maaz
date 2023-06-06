import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import {BackSvg} from '../assets/svg';
import {colors, fonts} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import { MainHeading,  } from '../components';
import WavesAnimated from '../components/WavesAnimated';
import { screenWidth } from '../constants/screenResolution';


const Notifications = () => {
 
  const DATA=
    {
      id:0,
      body:'John Smith, who you might know, is on Profile',
      time:' 4 Hours ago'
    }
  
  
  return (
    <ImageBackground
      source={require('../assets/images/backgroundPlain.png')}
      resizeMode="stretch"
      style={{flex: 1,alignItems:'center'}}>
      <WavesAnimated/>
{/*         
      <TouchableOpacity style={styles.icon}
      onPress={()=>{
        navigation.goBack()
      }}>
        <BackSvg  width={20} height={20} />
      </TouchableOpacity> */}
        <MainHeading name={'Notifications'}  marginTop={Platform.OS === 'ios' ? moderateScale(80) : moderateScale(60)}/>
        <View style={{marginTop:moderateScale(20),width:screenWidth-50}}>
        <View style={styles.notificationBody}>
          <Text style={{...fonts.sub_head_small,color:colors.white}}>{DATA.body} </Text>
          <Text style={{...fonts.notificationTime,color:colors.white}}>{DATA.time} </Text>
        </View>
        <View style={styles.notificationBody}>
          <Text style={{...fonts.sub_head_small,color:colors.white}}>{DATA.body} </Text>
          <Text style={{...fonts.notificationTime,color:colors.white}}>{DATA.time} </Text>
        </View>
        <View style={styles.notificationBody}>
          <Text style={{...fonts.sub_head_small,color:colors.white}}>{DATA.body} </Text>
          <Text style={{...fonts.notificationTime,color:colors.white,}}>{DATA.time} </Text>
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
  icon: {
    position: 'absolute',

    padding:moderateScale(10),
    alignSelf:'flex-start',
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
    
    borderBottomWidth:1,
    borderColor:colors.white,
    padding:moderateScale(10),
    marginTop:moderateScale(20)
  },
});
export default Notifications;
