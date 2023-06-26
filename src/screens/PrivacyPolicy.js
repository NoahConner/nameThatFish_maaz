import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BackSvg} from '../assets/svg';
import {moderateScale} from 'react-native-size-matters';
import {Bubbles, Button, CustomTexts, SubHeading} from '../components';
import {colors, fonts} from '../constants';
import { screenHeight, screenWidth } from '../constants/screenResolution';
import { AdminServices } from '../services';
import { ScrollView } from 'react-native-gesture-handler';



const PrivacyPolicy = ({navigation}) => {
  const [description, setdescription] = useState(null)
  useEffect(() => {
    AdminServices.getPrivacyPolicy().then((res)=>{
      setdescription(res?.data?.data[0]?.description);
      
    }).catch((err)=>{
      console.log(err?.response?.data);
    })
  }, [])
  return (
    <ImageBackground
      source={require('../assets/images/bg1.png')}
      resizeMode="stretch"
      style={{flex: 1,height:screenHeight,width:screenWidth}}>
      <TouchableOpacity style={styles.icon}
      onPress={()=>{
        navigation.goBack()
      }}>
        <BackSvg width={20} height={20} />
      </TouchableOpacity>
      <View style={{alignItems:'center'}}>
      <SubHeading name={'Privacy Policy'} marginTop={moderateScale(30)}/>
      </View>
      <ScrollView style={styles.containerView}>
        <Bubbles
          width={37}
          height={37}
          right={moderateScale(60)}
          top={moderateScale(400)}
        />
        <Bubbles
          width={23}
          height={23}
          right={moderateScale(5)}
          bottom={moderateScale(40)}
        />
        <Bubbles
          width={46}
          height={46}
          right={moderateScale(30)}
          top={moderateScale(40)}
        />
        <Bubbles
          width={38}
          height={38}
          left={moderateScale(60)}
          top={moderateScale(440)}
        />
        <Bubbles
          width={22}
          height={22}
          left={moderateScale(130)}
          top={moderateScale(480)}
        />
        <Bubbles
          width={46}
          height={46}
          left={moderateScale(90)}
          top={moderateScale(540)}
        />
          <Bubbles
          width={22}
          height={22}
          left={moderateScale(220)}
          top={moderateScale(610)}
        />
        
    <CustomTexts marginTop={moderateScale(20)} text={description}/>
    <CustomTexts marginTop={moderateScale(20)}/>
      </ScrollView>
    
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerView: {
    // alignItems: 'center',
    marginTop: moderateScale(10),
  },
  inputContainer:{
    width:'93%',
    height:moderateScale(200),
    backgroundColor:colors.white,
    ...fonts.helpPlaceholder,
    marginTop:moderateScale(25),
    textAlignVertical:'top',
    textAlign:'center'
    
  },
  bubbleIcon: {
    position: 'absolute',
  },
  icon: {
    left: moderateScale(15),
    alignSelf:'flex-start',
    padding:moderateScale(10),
    top: Platform.OS === 'ios' ? moderateScale(40) :  moderateScale(15),
  },
});
export default PrivacyPolicy;
