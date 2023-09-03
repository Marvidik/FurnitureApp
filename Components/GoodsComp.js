import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import ButtonComp from './ButtonComp';
import CardComp from './CardComp';

export default function GoodsComp({image,rating,name,subName,price}) {
    goodsstyle=[styles.container]
  return (
    <View style={styles.container}>
        <View style={styles.box1}>
        <Image style={styles.image} source={image}/>
        <View style={styles.buts}>
            <CardComp text={"New"} style={styles.boller} style2={styles.text1}/>
            <CardComp text={rating} style={styles.boller2} image style2={styles.text2}/>
        </View>
        </View>
        <Text style={styles.textb}>{name}</Text>
        <Text style={styles.textc}>{subName}</Text>
        <View style={styles.buts}>
        <Text style={styles.textd}>${price}</Text>
        <View style={styles.add}>
        <Image style={styles.plus} source={require('../assets/add.png')}/>
        </View>
        </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        width:186,
        height:255,
        borderRadius:12,
        backgroundColor:"white",
        alignItems:"center",
        marginLeft:20,
        marginTop:20,
    },
    text1:{
        color:"white"
    },
    text2:{
        color:"#DD9300"
    },
    buts:{
        flexDirection:"row",
        
        
    },
    add:{
        backgroundColor:"#3E7073",
        height:44,
        width:44,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:44,
        marginLeft:50
    },
    textb:{
        fontSize:16,
        color: "#3E7073",
        fontWeight:"500",
        alignSelf: 'flex-start',
        paddingLeft:10,
        paddingTop:14
    },
    plus:{
        height:24,
        width:24,
    
    },
    textc:{
        alignSelf: 'flex-start',
        paddingLeft:10,
    },
    textd:{
        paddingTop:23,
        backgroundColor:"#E5000000",
        alignSelf: 'flex-start',
        paddingLeft:10,
        marginRight:40
    },
    boller21:{
        color: 'white',
        fontSize: 5,
    },
    boller:{
        backgroundColor:"red",
        marginRight:40
    },
    boller2:{
        width:47.29183,
        height:19.6,
        backgroundColor:"#F8F04680",
        marginLeft:40,
        
    },
    box1:{
        height:156,
        width:176,
        backgroundColor:"#FFF2F2F2",
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center"
    },
    image:{
        width:105,
        height:107.00424
    }

})