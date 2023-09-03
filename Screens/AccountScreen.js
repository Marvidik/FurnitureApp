import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import AccountComp from '../Components/AccountComp'

export default function AccountScreen() {
  return (
    <View>
      <View style={styles.box1}>
      <Text style={styles.textb}>My Profile</Text>
      <Image style={styles.image} source={require('../assets/profileimage.png')}/>
      <Text style={styles.textb}>Julian Philips</Text>
      <Text style={styles.textc}>julianphilips@yahoo.com</Text>
      </View>
      <Text style={styles.texta}>Account</Text>
      <View>
        <AccountComp source={require('../assets/Setting.png')} text="Settings" color="#325B5D14"/>
        <AccountComp source={require('../assets/history.png')} text="Transaction History" color="#FD9F121A"/>
        <AccountComp source={require('../assets/bell.png')} text="Notification" color="#1B94A11A"/>
      </View>
      <Text style={styles.textc}>Legal</Text>
      <View>
        <AccountComp source={require('../assets/Lock.png')} text="Privacy Policy" color="#008BD91A"/>
        <AccountComp source={require('../assets/Logout.png')} text="Log Out" color="#F445451A"/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    box1:{
        height:313,
        width:"100%",
        paddingTop:44,
        alignItems:"center",
        justifyContent:"center"
    },
    image:{
        height:100,
        width:100,
        borderRadius:100,
        marginTop:30
    },
    texta:{
        paddingLeft:20,
        fontSize:14,
        
    },
    textb:{
        fontSize:30,
        color: "#3E7073",
        fontWeight:"500",
        paddingTop:16
    },
    textc:{
        fontSize:18,
        color: "#3E7073",
        lineHeight:30,
        paddingLeft:20,
    },

})