import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'

export default function CardComp({style,text,image,style2}) {
    const cardstyles=[styles.card,style]
    const textstyle=[styles.tex,style2]
  return (
    <View style={cardstyles}>
    {image && <Image style={styles.image} source={require('../assets/grade.png')}/>}
      <Text style={textstyle}>{text}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    card:{
        width:39,
        height:18,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:12,
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    image:{
        height:9.8,
        width:10.39

    },
    tex:{
        fontStyle:"italic"
    }
})