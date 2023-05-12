import {View, Text, TouchableOpacity, Image, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {Fish1Svg, Fish2Svg, Fish3Svg} from '../assets/svg';
import { colors } from '../constants';
import { moderateScale } from 'react-native-size-matters';
const DATA = [
    {
      id: 1,
      image: Fish1Svg,
    },
    {
      id: 2,
      image: Fish2Svg,
    },
    {
      id: 3,
      image: Fish3Svg,
    },
    
  ];
const FlatlistHistory = () => {
 const renderItem=({item})=>{
    return(
        <TouchableOpacity style={styles.container}>
            <item.image width={106} height={69}/>
        </TouchableOpacity>
    )
 }
  return (
    <>
        <View style={{alignItems:'center'}}>
      <FlatList
      horizontal={true}
      renderItem={renderItem}
      data={DATA}/>
    </View>
   
    </>

    
  );
};

const styles = StyleSheet.create({
    container:{
        marginTop:moderateScale(7),
    marginRight:moderateScale(7),
    
         
    }
  });
export default FlatlistHistory;
