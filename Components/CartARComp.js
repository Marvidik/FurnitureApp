import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'

export default function CartARComp({style}) {
    const allstyles=[styles.container,style]

    const [qty,setqty]=useState(1);

    const increase=()=>{
        setqty(qty+1)
    }

    const decrease=()=>{
        setqty(qty-1)
    }

  return (
    <View style={allstyles}>
        <TouchableOpacity onPress={increase}>
            <Image style={styles.furniture}  source={require("../assets/adding.png")}/>
        </TouchableOpacity>
        <Text>{qty}</Text>
        <TouchableOpacity onPress={decrease}>
            <Image style={styles.furniture}  source={require("../assets/minus.png")}/>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        width:86,
        height:32,
        alignSelf:"center",
        flexDirection:"row",
        backgroundColor:"#F8F8F8",
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius:100,
        marginRight:19,
        padding:5
    }
})