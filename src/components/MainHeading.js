import { View, Text } from 'react-native'
import React from 'react'
import { colors, fonts } from '../constants'

const MainHeading = ({
  name,
marginTop,
marginBottom
}) => {
  return (
    
      <Text style={{
        ...fonts.HeadAuth,
        color:colors.white,
        marginTop:marginTop,
        marginBottom:marginBottom
      }}>{name}</Text>
    
  )
}

export default MainHeading