import { View, Text } from 'react-native'
import React from 'react'
import { colors, fonts } from '../constants'

const SubHeading = ({
  name,
marginTop,
marginBottom
}) => {
  return (
    
      <Text style={{
        ...fonts.headSettings,
        color:colors.black,
        marginTop:marginTop,
        marginBottom:marginBottom
      }}>{name}</Text>
    
  )
}

export default SubHeading