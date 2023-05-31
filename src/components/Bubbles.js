import {View, StyleSheet, PanResponder, Animated, Easing} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {BubbleSvg} from '../assets/svg';

const Bubbles = ({onPressBack, right, top, left, bottom, width, height}) => {
  const bubblePosition =useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bubblePosition, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bubblePosition, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  return (
    <>
      <Animated.View
        style={{
          ...styles.bubbleIcon,
          right,
          top,
          left,
          bottom,
          transform: [
            {
              translateY: bubblePosition.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 10], // Adjust the bubble's vertical position as needed
              }),
             
            },
          ],
        }}
         
      >
        <BubbleSvg width={width} height={height} />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  bubbleIcon: {
    position: 'absolute',
  },
});

export default Bubbles;
