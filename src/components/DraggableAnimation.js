import { View, Text,Animated,PanResponder } from 'react-native'
import React,{useRef} from 'react'


const DraggableAnimation = () => {
     //  Draggable View example
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
        }).start();
      },
    }),
  ).current;
  return (
    <Animated.View style={{
      transform:[{translateX: pan.x}, {translateY: pan.y}]
    }}
    {...panResponder.panHandlers}>
      <Text>DraggableAnimation</Text>
    </Animated.View>
  )
}

export default DraggableAnimation