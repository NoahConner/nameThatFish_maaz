import {
  View,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { BubbleSvg} from '../assets/svg';

const Bubbles = ({
  
  onPressBack,
  right,
  top,
  left,
  bottom,
  width,
  height
}) => {
  return (
    <>
      <View style={{...styles.bubbleIcon, right, top, left, bottom}}>
        <BubbleSvg width={width} height={height} />
      </View>
    </>
    
  );
};

const styles = StyleSheet.create({
  bubbleIcon: {
    position: 'absolute',
  },

});

export default Bubbles;
