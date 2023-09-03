import { View, Text,StyleSheet,Image} from 'react-native'
import React from 'react'
import ButtonComp from '../Components/ButtonComp';

export default function WelcomeScreen({navigation}) {
  const navigateToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/welcome.png')}/>
      <View style={styles.t}>
      <Text style={styles.textb}>Enjoy Your Online</Text>
      <Text style={styles.textb}>Shopping</Text>
      </View>
      <View style={styles.t1}>
      <Text>Browse through all the category and shop the </Text>
      <Text>best furniture for your charm house</Text>
      </View>
      <View >
      <ButtonComp title={"Get Started"} style={styles.button} onPress={navigateToHome}/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
       alignItems:"center",
       flex:1
    },
    image: {
      width: 573,
      height: 506,
    },
    t:{
        paddingLeft:20,
        paddingTop:30,
        alignSelf: 'flex-start',
    },
    textb:{
        fontSize:30,
        color: "#3E7073",
        fontWeight:"500",
        alignSelf: 'flex-start',
    },
    t1:{
        paddingLeft:20,
        alignSelf: 'flex-start',
    },
    button:{
        height:53,
        width:335,
        top:60,
      
        
      
        
    }
  });