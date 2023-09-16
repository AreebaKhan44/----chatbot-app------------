import { StyleSheet, FlatList, Text,View,SafeAreaView,Dimensions, StatusBar, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
const {width,height} = Dimensions.get('window')
import { Entypo } from '@expo/vector-icons'; 
const Color ={primary:'#FC4C02',white:'#fff'}

const LastScreen = ({navigation}) => {
    const Footer=()=>{
        return(
            <>
            <View style={{marginLeft:"90%"}}>
            <Entypo name="squared-cross" size={54} color="white"onPress={()=> navigation.navigate('login')}/>
            </View>

            <View>
                <Text style={{marginTop:80,color:'#fff',fontSize:150,marginLeft:"30%"}}>ups!</Text>
                
            </View>

            <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:30,color:'#fff',fontSize:28,marginLeft:90}}>Oh, your subscription seems to be inactive? Please log in here and
                contact us directly.</Text>
            </View>

            <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:30,color:'#fff',fontSize:28,marginLeft:90}}>If you have any questions,please contact us directly.</Text>
            </View>
            
            <View style={{flexDirection:'row'}}>
                <Text  style={{marginTop:30,color:'#fff',fontSize:28,marginLeft:90}}>Your Yaibot Team.</Text>
            </View>

         
          </>
        )
      }
  return (
    <>
    <SafeAreaView style={{flex:1,backgroundColor:Color.primary}}>
      <StatusBar backgroundColor={Color.primary}/>
      <Footer/>
    </SafeAreaView>

  
  </>
  )
}

export default LastScreen

const styles = StyleSheet.create({
    title:{
        color:Color.white,
        fontSize:28,
        fontWeight:'bold',
        marginTop:90,
        marginLeft:20,
        alignItems:'flex-start'
      },
      btn:{
        flex:1,
        height:70,
        width:10,
        borderRadius:38,
        backgroundColor:'#292F33',
        color:'white',
        alignItems:'center',
        justifyContent:'centre'
      },
      btnText:{
        flex:1,
        color:'#fff',
        fontSize:26,
        padding:10,
        fontWeight:10,
       marginBottom:7
      },
      text3:{
        fontSize:18,
        color:'white',
        margin:5,
        marginTop:13,
        textDecorationLine: "underline",
      },
})