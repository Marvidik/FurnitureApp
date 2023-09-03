import { View, Text,StyleSheet,Image, ScrollView } from 'react-native'
import React from 'react'
import SearchComp from '../Components/SearchComp';
import ButtonComp from '../Components/ButtonComp';
import GoodsComp from '../Components/GoodsComp';
import GoodsComp2 from '../Components/GoodsComp2';

export default function MainScreen() {
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
        <View  style={styles.box1}>
            <View style={styles.t}>
            <Text style={styles.textb}>Discover The Best</Text>
            <Text style={styles.textb}>Furniture</Text>
            </View>
            <Image style={styles.image} source={require('../assets/profileimage.png')}/>
        </View>
        <SearchComp placeholder={"Search for Furnitures"} style={styles.searcher}/>
        <Text style={styles.textc}>Categories</Text>
        <View style={styles.box2}>
        <ScrollView horizontal style={styles.scroller} showsHorizontalScrollIndicator={false}>
            <ButtonComp title={"Chairs"} style={styles.boller}/>
            <ButtonComp title={"Cupboards"} style={styles.boller2} style2={styles.boller21}/>
            <ButtonComp title={"Tables"} style={styles.boller2} style2={styles.boller21}/>
            <ButtonComp title={"Consoles"} style={styles.boller2} style2={styles.boller21}/>
            </ScrollView>
            </View>
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.map((item) => (
                <GoodsComp key={item.id} {...item} />
            ))}
            </ScrollView>
        </View>
        <Text style={styles.textc}>Best Seller</Text>
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data2.map((item) => (
                <GoodsComp2 key={item.id} {...item} />
            ))}
            </ScrollView>
        </View>
        </ScrollView>
    </View>
  
  )
}



const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFF8F8F8",
        flex:1
    },
    sv3:{
        height:114
    },
    scroller:{
   
    },
    t:{     
        alignSelf: 'flex-start',  
    },
    goods:{
        paddingLeft:20,
    },
    box2:{
        paddingTop:10,
        paddingLeft:20,
        flexDirection:"row", 
    },
    boller:{
        width:84,
        height:46,
        margin:10
    },
    boller2:{
        width:112,
        height:46,
        margin:10,
        backgroundColor:"white",
        borderWidth:2,
        borderColor:"#3E7073"
    },
    boller21:{
        color: '#3E7073',
    },
    textb:{
        fontSize:30,
        color: "#3E7073",
        fontWeight:"500",
        alignSelf: 'flex-start',
    },
    textc:{
        fontSize:18,
        color: "#3E7073",
        lineHeight:30,
        alignSelf: 'flex-start',
        paddingTop:17,
        paddingLeft:20,
    },
    image:{
        height:64,
        width:64,
        borderRadius:54,  
        alignSelf:"center"
    },
    box1:{
        flexDirection:"row",
        paddingTop:44,
        justifyContent:"space-between",
        paddingRight:19,
        paddingLeft:20,
        alignItems:"center"
    },
    searcher:{
        height:52,
        width:335,
        marginTop:16,
        alignSelf:"center"
        
    }
})