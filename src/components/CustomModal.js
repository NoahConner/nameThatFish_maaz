import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { moderateScale } from 'react-native-size-matters';
import { colors, fonts } from '../constants';

function CustomModal({
  text1,
  text2,
  text3,
  onPress1,
  onPress2,
  isVisible,
  txtColor1 = colors.primary,
  txtColor2 = colors.primary,
  onClose,
}) {
  return (
    <Modal
      hasBackdrop={true}
      backdropOpacity={0.7}
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
        
      <View style={{ ...styles.containerV, height: moderateScale(110) }}>
        <View>
        <Text style={{ ...fonts.buttonText, color: txtColor1,textAlign:'center' }}>{text3}</Text>
        </View>
        <View style={{display:'flex',alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
        <TouchableOpacity
          style={{
            ...styles.btnV,
            height: moderateScale(50),
          }}
          onPress={onPress1}>
          <Text style={{ ...fonts.buttonText, color: txtColor1,textAlign:'center' }}>{text1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.btnV,
            height: moderateScale(50),
          }}
          onPress={onPress2}>
          <Text style={{ ...fonts.buttonText, color: txtColor2,textAlign:'center' }}>{text2}</Text>
        </TouchableOpacity>
        </View>
    
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  containerV: {
    backgroundColor:'#b8e8ec',
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(300),
    borderRadius: 20,
    marginLeft:'auto',
    marginRight:'auto'
  },
  btnV: {
    alignItems: 'center',
    width: '50%',
    justifyContent: 'center',
  },
});

export default CustomModal;