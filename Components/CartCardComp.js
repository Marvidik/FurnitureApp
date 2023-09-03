import { View, Text,StyleSheet,Image, ScrollView} from 'react-native'
import React,{useState} from 'react'
import CardComp from './CardComp';
import CartARComp from './CartARComp';

export default function CartCardComp({image,rating,name,subName,price}) {
  return (
    <ScrollView showsVerticalScrollIndicator>
    <View style={styles.card}>
      <View style={styles.box1}>
        <View>
        <Image style={styles.image} source={image}/>
        </View>
      </View>
      <View>
        <Text style={styles.textc}>{name}</Text>
        <Text style={styles.arm}>{subName}</Text>
        <View style={styles.box2}>
          <Text style={styles.texta}>${price}</Text>
          <CartARComp style={{marginLeft:60,marginTop:5}}/>
        </View>
      </View>
    </View>
    </ScrollView>
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
        width:335,
        height:103,
        backgroundColor:"#FFFFFF",
        marginTop:20,
        marginHorizontal:20,
        flexDirection:"row",
        alignSelf:"center"
    },
    box1:{
        width:117,
        heigth:114,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#F2F2F2",
    },
    box2:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
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
    texta:{
      paddingLeft:20,
      paddingTop:5,
      fontSize:19
    },
    text2:{
        color:"#DD9300"
    },
    textc:{
        fontSize:18,
        color: "#3E7073",
        lineHeight:30,
        alignSelf: 'flex-start',
        paddingTop:10,
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