import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import React, {useState} from 'react';
import {BackSvg} from '../assets/svg';
import {moderateScale} from 'react-native-size-matters';
import {Bubbles, Button, SubHeading} from '../components';
import {colors, fonts} from '../constants';
import { TextInput} from 'react-native-gesture-handler';


const Help = ({navigation}) => {
  const [helpQuery, setHelpQuery] = useState(null);
  return (
    <ImageBackground
      source={require('../assets/images/bg1.png')}
      resizeMode="stretch"
      style={{flex: 1}}>
      <TouchableOpacity style={styles.icon}
        onPress={
          ()=>{
            
            navigation.goBack()
          }
        }>
        <BackSvg width={20} height={20} />
      </TouchableOpacity>

      <View style={styles.containerView}>
        <Bubbles
          width={40}
          height={40}
          right={moderateScale(60)}
          bottom={moderateScale(50)}
        />
        <Bubbles
          width={25}
          height={25}
          right={moderateScale(5)}
          bottom={moderateScale(40)}
        />
        <Bubbles
          width={52}
          height={52}
          right={moderateScale(30)}
          top={moderateScale(40)}
        />
        <Bubbles
          width={41}
          height={41}
          left={moderateScale(60)}
          top={moderateScale(440)}
        />
        <Bubbles
          width={25}
          height={25}
          left={moderateScale(130)}
          top={moderateScale(480)}
        />
        <Bubbles
          width={52}
          height={52}
          left={moderateScale(90)}
          top={moderateScale(540)}
        />
          <Bubbles
          width={25}
          height={25}
          left={moderateScale(220)}
          top={moderateScale(610)}
        />
        <SubHeading name={'Help'} />
        <TextInput
        placeholder='Type Here...'
        placeholderTextColor={colors.gray_100}
        value={helpQuery}
        onChangeText={setHelpQuery}
        style={styles.inputContainer}
        multiline={true}
        numberOfLines={10}/>
        <Button
        onPress={
          ()=>{
            Keyboard.dismiss()
            navigation.navigate('Settings')
          }
        }
          text={'Send'}
          backgroundColor={colors.primary}
          marginTop={moderateScale(20)}
        />
      </View>
      <View style={{margin:moderateScale(12)}}>
        <Text style={{...fonts.placeHolder,color:colors.light_black}}>If you have any query or want to contact with us {'\n'}
Email Us at: <Text style={{color:colors.light_blue}}>abc@example.com</Text> {'\n'}
Contact Us at: <Text style={{color:colors.light_blue}}>123-456-789-0</Text></Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerView: {
    alignItems: 'center',
    marginTop: moderateScale(40),
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
    // position: 'absolute',
    left: moderateScale(15),
    top: moderateScale(15),
  },
});
export default Help;
