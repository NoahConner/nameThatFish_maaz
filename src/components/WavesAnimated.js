import React, {useEffect, useRef} from 'react';
import {View, Animated, Easing, Dimensions} from 'react-native';
import { Wave3 } from '../assets/svg';


const WavesAnimated = () => {
  const animationValue1 = useRef(new Animated.Value(0)).current;
  const waveWidth = Dimensions.get('window').width;
  const waveOffset1 = animationValue1.interpolate({
    inputRange: [0, 1],
    outputRange: [-180, waveWidth], // Adjust the wave offset as per your preference
    extrapolate: 'clamp',
  });

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(animationValue1, {
        toValue: 1,
        duration: 3000, // Adjust the duration as per your preference
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      {
        iterations: -1,
      },
    ).start();
  };

  return (
    <View style={{flex: 1, alignItems: 'center', position: 'absolute'}}>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          transform: [
            {
              translateX: waveOffset1,
            },
          ],
        }}>
        <Wave3 width={1300} height={1400} />
      </Animated.View>
    </View>
  );
};

export default WavesAnimated;
