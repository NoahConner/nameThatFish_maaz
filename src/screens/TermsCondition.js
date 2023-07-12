import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  SafeAreaView
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BackSvg} from '../assets/svg';
import {moderateScale} from 'react-native-size-matters';
import {Bubbles, Button, CustomTexts, Loader, SubHeading} from '../components';
import {colors, fonts} from '../constants';
import { AdminServices } from '../services';
import { ScrollView } from 'react-native-gesture-handler';
import { screenHeight } from '../constants/screenResolution';




const TermsCondition = ({navigation}) => {
const [description, setdescription] = useState(null)
const [loading, setloading] = useState(false)
  useEffect(() => {
    setloading(true)
    AdminServices.getTermsCondition().then((res)=>{
      
      setdescription(res?.data?.data[0]?.description);
      setloading(false)
    }).catch((err)=>{
      console.log(err?.response?.data);
    })
  }, [])
  
  
  return (
    <SafeAreaView style={{ flex: 1 ,height:screenHeight}}>
<ImageBackground
      source={require('../assets/images/bg1.png')}
      resizeMode="stretch"
      style={{ flex: 1 ,height:screenHeight}}
      >
        {loading ? <Loader/> : null}
        <TouchableOpacity
          style={{ width:moderateScale(40),padding:moderateScale(10) 
            // ,backgroundColor:colors.black
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <BackSvg width={20} height={20} />
        </TouchableOpacity>
        <View style={{ alignItems: 'center' }}>
          <SubHeading name={'Terms & Condition'} marginTop={moderateScale(10)} />
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

          <CustomTexts marginTop={moderateScale(20)} text={description} />
          <CustomTexts marginTop={moderateScale(20)} />
        </ScrollView>
    



    </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerView: {
    // alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? moderateScale(10) : moderateScale(10),
    marginBottom:moderateScale(50)
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
export default TermsCondition;
