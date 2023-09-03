import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import MainScreen from './Screens/MainScreen';
import DetailScreen from './Screens/DetailScreen';
import CartScreen from './Screens/CartScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from './Screens/AccountScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator >
    <Tab.Screen name="Screen1" options={{ headerShown: false,activeTintColor: '#325B5D',tabBarLabel: 'Home',
    tabBarIcon: ({ color, size }) => (
      <Image
        source={require('./assets/home.png')}
        style={{ width: size, height: size, tintColor:'#325B5D' }}
      />
    ), }} component={MainScreen} />
    <Tab.Screen name="Screen2" options={{ headerShown: false,tabBarLabel: 'Details',
    tabBarIcon: ({ color, size }) => (
      <Image
        source={require('./assets/person.png')}
        style={{ width: size, height: size, tintColor: '#325B5D' }}
      />
    ),  }} component={DetailScreen} />
    <Tab.Screen name="Screen3" options={{ headerShown: false,tabBarLabel: 'Cart',
    tabBarIcon: ({ color, size }) => (
      <Image
        source={require('./assets/cart.png')}
        style={{ width: size, height: size, tintColor: '#325B5D' }}
      />
    ),  }} component={CartScreen} />
    <Tab.Screen name="Screen4" options={{ headerShown: false,tabBarLabel: 'Account',
    tabBarIcon: ({ color, size }) => (
      <Image
        source={require('./assets/person.png')}
        style={{ width: size, height: size, tintColor: '#325B5D' }}
      />
    ),  }} component={AccountScreen} />
      </Tab.Navigator>
  );
}

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Main" options={{ headerShown: false }} component={WelcomeScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Home" component={MainTab} />
  </Stack.Navigator>
    </NavigationContainer>
     
  
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
