import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import IconComp from './IconComp'

export default function AccountComp({source,text,color}) {
  return (
    <View style={[styles.container]}>
      <View style={styles.box1}>
      <IconComp source={source} color={color}/>
      <Text style={styles.text}>{text}</Text>
      </View>
      <Image style={styles.image} source={require('../assets/Left.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingRight:20,
        
  },
    box1:{
        flexDirection:"row",
        alignItems:"center",
        padding:10,
    },
    text:{
      paddingLeft:20,
      fontSize:16,
      fontWeight:"500"
    }

})