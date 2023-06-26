import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import { colors } from '../constants';

const App = ({animating}) => (
  <View style={[styles.container]}>
    {/* <ActivityIndicator /> */}
    {/* <ActivityIndicator size="large" /> */}
    <ActivityIndicator size="small" color={colors.white} 
    animating={animating}/>
    {/* <ActivityIndicator size="large" color="#00ff00" /> */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    
    position:'absolute',
    // left:40
    // justifyContent: 'center',
    
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    
  },
});

export default App;