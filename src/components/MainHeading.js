import { View, Text,Animated, Easing } from 'react-native'
import React, { useEffect } from 'react'
import { colors, fonts } from '../constants'
import { screenWidth } from '../constants/screenResolution';

const MainHeading = ({
  name,
marginTop,
marginBottom,


}) => {

  const GirlAnimation = new Animated.Value(screenWidth + 250);
  const MobileAnimation = new Animated.Value(screenWidth + 250);

  useEffect(() => {
    startAnimations()
  }, []);

  const startAnimations = () => {
    Animated.timing(GirlAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      
    }).start();

    Animated.timing(MobileAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    
    }).start();
  };
  return (
    
      <Animated.Text style={{
        ...fonts.HeadAuth,
        color:colors.white,
        marginTop:marginTop,
        marginBottom:marginBottom,
        transform:[{translateX:GirlAnimation}]
      }}>{name}</Animated.Text>
    
  )
}

export default MainHeading