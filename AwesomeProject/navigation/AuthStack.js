import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SixthScreen from '../screens/SixthScreen';
//import SevenScreen from '../screens/SevenScreen';
//import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from './DrawerContent'
import { Header } from 'react-native-elements';
const Drawer = createDrawerNavigator();
//const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
   
    <Drawer.Navigator drawerContent={props => <DrawerContent{...props}/>}
    screenOptions={{
      headerStyle: {
        backgroundColor: '#292F33',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold',
        fontSize:22,
      },
    }}
    initialRouteName='Psychology Counseling Session'
 
    >
        <Drawer.Screen name="Psychology Counseling Session" component={SixthScreen} 
         
      />
      
        {/* <Drawer.Screen name="Menu" component={SevenScreen}  /> */}
      </Drawer.Navigator>
    
  )
}

export default AuthStack

const styles = StyleSheet.create({})


// {/* options={{
//           headerTitle:()=> <Header name ='Psychology Counseling Session'/>,
//           headerRight:()=>{
//             // <View style={{height:"7%",backgroundColor:'#292F33',flexDirection:'row'}}>
            
//             //  {/* <AntDesign name="plus" size={40} color="white" /> */}
//             {/* // </View> */}
//         //   }
//         // }} */}