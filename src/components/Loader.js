import { View, Text, Image } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <View style={{justifyContent:"center", alignItems:"center", flex:1, backgroundColor:"white"}}>
      <Image source={require(".././images/Pendulum.gif")}/>
    </View>
  )
}

export default Loader