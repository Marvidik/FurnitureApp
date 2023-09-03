import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import CardComp from './CardComp';

export default function GoodsComp2({image,rating,name,subName,price}) {
  return (
    <View style={styles.card}>
      <View style={styles.box1}>
        <View>
        <Image style={styles.image} source={image}/>
        <CardComp text={rating} style={styles.boller2} image style2={styles.text2}/>
        </View>
      </View>
      <View>
        <Text style={styles.textc}>{name}</Text>
        <Text style={styles.arm}>{subName}</Text>
            <View style={styles.buts}>
                <Text style={styles.textd}>${price}</Text>
                <View style={styles.add}>
                    <Image style={styles.plus} source={require('../assets/add.png')}/>
                </View>
            </View>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
    add:{
        backgroundColor:"#3E7073",
        height:44,
        width:44,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:44,
    },
    card:{
        width:278,
        height:114,
        backgroundColor:"#FFFFFF",

        marginHorizontal:20,
        flexDirection:"row"
    },
    box1:{
        width:117,
        heigth:114,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#F2F2F2",
    },
    image:{
        width:61.71908,
        height:80,
    },
    boller2:{
        width:47.29183,
        height:19.6,
        backgroundColor:"#F8F04680",
        marginLeft:40,  
    },
    text2:{
        color:"#DD9300"
    },
    textc:{
        fontSize:18,
        color: "#3E7073",
        lineHeight:30,
        alignSelf: 'flex-start',
        paddingTop:17,
        paddingLeft:20,
    },
    plus:{
        height:24,
        width:24,
    
    },
    textd:{
        paddingTop:23,
        backgroundColor:"#E5000000",
        alignSelf: 'flex-start',
        paddingLeft:20,
        marginRight:58
    },
    buts:{
        flexDirection:"row",
    },
    arm:{
        backgroundColor:"#E5000000",
        alignSelf: 'flex-start',
        paddingLeft:20,
    }
})