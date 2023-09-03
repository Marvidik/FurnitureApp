import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import IconComp from '../Components/IconComp'
import CartCardComp from '../Components/CartCardComp'
import GoodsComp from '../Components/GoodsComp';
import ButtonComp from '../Components/ButtonComp';

export default function CartScreen() {
    const data = [
        {
          id: 1,
          image: require('../assets/image6.png'),
          name: 'Modern Chair',
          subName: 'Arm Chair',
          rating: 4.5,
          price:178
        },
        {
          id: 2,
          image: require('../assets/image5.png'),
          name: 'Minimalist Chair',
          subName:'Arm Chair',
          rating: 3.1,
          price:167
        },
        // Add more items to your dictionary
      ];
    const data2 = [
        {
          id: 1,
          image: require('../assets/chair1.png'),
          name: 'Modern Chair',
          subName: 'Arm Chair',
          rating: 4.9,
          price:160
        },
        {
          id: 2,
          image: require('../assets/image5.png'),
          name: 'Minimalist Chair',
          subName: 'Arm Chair',
          rating: 3.6,
          price:167
        },
        // Add more items to your dictionary
      ];
  return (
      <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator>
        <View style={styles.box1}>
            <View style={styles.box11}>
                <IconComp source={require("../assets/arrowleft.png")}/>
                <Text style={styles.textb}>Cart</Text>
                <IconComp source={require("../assets/trash.png")} />
            </View>
        </View>
        <View>
            <ScrollView  showsVerticalScrollIndicator={false}>
            {data2.map((item) => (
                <CartCardComp key={item.id} {...item} />
            ))}
            </ScrollView> 
        </View>
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.map((item) => (
                <GoodsComp key={item.id} {...item} />
            ))}
            </ScrollView>
        </View>
        </ScrollView>
        <ButtonComp title={"Proceed To Checkout"} style={styles.button}/>
        </View>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#F8F8F8",
        flex:1
        
    },
    button:{
        height:53,
        width:335,
        marginTop:30,
        marginBottom:10,
        alignSelf:"center"    
    },
    box1:{
        width:"100%",
        paddingTop:54,
        paddingLeft:21,
        paddingHorizontal:19,
        
    },
    box11:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    textb:{
        fontSize:30,
        color: "#3E7073",
        fontWeight:"500",
        alignSelf: 'flex-start',
        paddingLeft:21,
        
    },
})