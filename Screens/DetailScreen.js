import { View, Text,StyleSheet,Image,ScrollView } from 'react-native'
import React from 'react'
import IconComp from '../Components/IconComp'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import CardComp from '../Components/CardComp'
import ButtonComp from '../Components/ButtonComp';
import CartARComp from '../Components/CartARComp'

export default function DetailScreen() {
  return (
    <View >
    <ScrollView showsVerticalScrollIndicator>
      <View style={styles.box1}>
        <View style={styles.box11}>
            <IconComp source={require("../assets/arrowleft.png")}/>
            <IconComp source={require("../assets/heart.png")} />
        </View>
        <Image style={styles.furniture}  source={require("../assets/image6.png")}/>
        <Image  style={styles.elipse} source={require("../assets/round.png")}/>
        <View style={styles.arrows}>
        <MaterialCommunityIcons name={"arrow-left"} size={20} color={"#325B5D"}/>
        <MaterialCommunityIcons name={"arrow-right"} size={20} color={"#325B5D"}/>
        </View>
      </View>
      <View style={styles.box2}>
      <Text style={styles.textb}>Modern Chair</Text>
      <CardComp text={"5.0"} style={styles.boller2} image style2={styles.text2}/>
      </View>
      <Text style={styles.texta}>Arm Chair</Text>
      <View style={styles.description}>
        <Text>add a pop and worm of earthly tones to your home with our browinish-orange arm chair. Its cozy design and comfortable cushion makes it 
        perfect ......read more
        </Text>
      </View>
      <View style={styles.box3}>
      <Image style={styles.box3i}  source={require("../assets/image6.png")}/>
      <Image style={styles.box3i}  source={require("../assets/image5.png")}/>
      <Image style={styles.box3i}  source={require("../assets/chair1.png")}/>
      </View>
      <View style={styles.box5}>
        <View style={styles.box4}>
            <Text style={styles.textc}>Color</Text>
            <View style={{height:26,width:26,borderRadius:26,backgroundColor:"brown", marginHorizontal:5}}>
            </View>
            <View style={{height:26,width:26,borderRadius:26,backgroundColor:"gray",marginHorizontal:5}}>
            </View>
            <View style={{height:26,width:26,borderRadius:26,backgroundColor:"orange",marginHorizontal:5}}>
            </View>
        </View>
        <CartARComp/>
      </View>
      <ButtonComp title={"Add To Cart          | $178"} style={styles.button}/>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    arrows:{
        flexDirection:"row",
        position:"absolute",
        bottom:50,
        alignSelf:"center"
    },
    boller2:{
        width:47.29183,
        height:19.6,
        backgroundColor:"#F8F04680",
        marginLeft:40,  
        borderRadius:20
    },
    button:{
        height:53,
        width:335,
        marginTop:20, 
        alignSelf:"center" 
    },
    description:{
        paddingLeft:21,
        paddingRight:19,
        paddingTop:10,
    },
    texta:{
        paddingLeft:21
    },
    textb:{
        fontSize:30,
        color: "#3E7073",
        fontWeight:"500",
        alignSelf: 'flex-start',
        paddingLeft:21,
        
    },
    textc:{
        fontSize:14,
        color: "#3E7073",
        fontWeight:"500",
        alignSelf: 'center',
        paddingLeft:21,
       
        
    },
    text2:{
        color:"#DD9300"
    },
    box1:{
        width:"100%",
        height:400,
        backgroundColor:"#F8F8F8",
        paddingTop:44,
        paddingLeft:21,
        paddingHorizontal:19,
        
    },
    box2:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop:22,
        paddingRight:19,
        alignItems:"center"
    },
    box3:{
        flexDirection:"row",
        paddingLeft:21,
        paddingTop:24
    },
    box4:{
        flexDirection:"row",
        alignItems:"center",
        alignSelf:"center"
        
    },
    box5:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingTop:29,
    },
    box3i:{
        height:46,
        width:46,
    },
    box11:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    com:{
        margin:50
    },
    elipse:{
        height:77,
        width:290,
        alignSelf:"center",
        borderWidth:2,
        padding:2,
        position:"absolute",
        bottom:60

        
    },
    furniture:{
        height:234.39,
        width:230,
        alignSelf:"center"
    },
    image:{
        height:24,
        width:30,
        backgroundColor:"#325B5D"
    }
})