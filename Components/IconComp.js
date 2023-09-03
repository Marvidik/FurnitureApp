import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function IconComp({source,imagestyle,color}) {
  
  return (
    <View style={[styles.icon,{backgroundColor:color}]}>
      <Image source={source} style={imagestyle}/>
    </View>
  )
}



const styles = StyleSheet.create({
    icon:{
        height:44,
        width:44,
        backgroundColor:"#FFFFFFFF",
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        borderRadius:44
    },
})