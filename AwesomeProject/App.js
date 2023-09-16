import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import HomeNavigation from './navigation/HomeNavigation';
import ConversationScreen from './src/screens/ConversationScreen';
import SecondScreen from './src/screens/SecondScreen';
import FirstScreen from './src/screens/FirstScreen';
import ThirdScreen from './src/screens/ThirdScreen';
import ForthScreen from './src/screens/ForthScreen';
import FifthScreen from './src/screens/FifthScreen'
//import SixthScreen from './src/screens/SixthScreen';
import LastScreen from './src/screens/LastScreen';
import AuthStack from './src/navigation/AuthStack';
//import 'react-native-gesture-handler';
import SignScreen from './src/screens/SignScreen';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
  },
};


const Stack = createNativeStackNavigator();
const getTabBarVisibility = (route)=>{
  const routeName = route.state
  ? route.state.routes[route.state.index].name
  : '';

  if(routeName === 'Chat'){
    return false;

  }
  return true;
}
const Navigation=()=> {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name= 'login' component={FirstScreen}  options={{ headerShown:false}}/>
      <Stack.Screen name= 'sign' component={SecondScreen}  options={{ headerShown:false}}/>
      <Stack.Screen name= 'signup' component={SignScreen}  options={{ headerShown:false}}/>
      <Stack.Screen name= 'third' component={ThirdScreen}  options={{ headerShown:false}}/>
      <Stack.Screen name= 'forth' component={ForthScreen}  options={{ headerShown:false}}/>
      <Stack.Screen name= 'fifth' component={FifthScreen}  options={{ headerShown:false}}/>
      <Stack.Screen name= 'auth' component={AuthStack}/>
         {/* <Stack.Screen name= 'Psychology Counseling Session' component={SixthScreen}/>
         <Stack.Screen name= 'drawer' component={DrawerContent}/> */}
         <Stack.Screen name= 'last' component={LastScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  
    </>
  );
}




const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  // input:{
  //   borderColor:'#000',
  //   borderStyle:'solid',
  //   borderWidth:1,
  //   marginBottom:10,
  // },
 
});

export default App;