import { StyleSheet, FlatList, Text,View,SafeAreaView,Dimensions, StatusBar, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
const {width,height} = Dimensions.get('window')
//import LinearGradient from 'react-native-linear-gradient';
import { Entypo } from '@expo/vector-icons';

const Color ={primary:'#292F33',white:'#fff'}

const ThirdScreen = ({navigation}) => {
    const Footer=()=>{
        return(
            <>
            <View>
            <Text style={{fontSize:100,color:'#25D366', fontWeight:'bold',marginLeft:90,marginTop:30}}>YAI</Text>
            <Text style={{fontSize:22,color:'#25D366', fontWeight:'400',marginLeft:90,marginTop:10}}>Your Bot In Life.</Text>
            <Text style={{fontSize:22,color:'#25D366', fontWeight:'400',marginLeft:90}}>Anytime. Everywhere.</Text>
            </View>

            <View>
                <Text style={{marginTop:30,color:'#25D366',fontSize:24,marginLeft:90}}>YAI is a first aid a 24/7 contact point for the ups                     and downs is everone's life and</Text>
                <Text></Text>
            </View>

            <View>
                <Text style={{marginTop:50,color:'#fff',fontSize:28,marginLeft:90}}>If your are currently in an extreme low mood, dial 911 or contact friends or family immediately.</Text>
            </View>

            <View>
            <Text style={{marginTop:30,color:'#25D366',fontSize:24,marginLeft:90}}>YAI is based on the latest version of the OpenAi ChatBot and constantly monitored and further optimized with the help of selected psychologist, LifeCoaches and therapists.</Text>
            </View>

            <View style={{marginTop:50,marginBottom:30}}>
            <Text style={{color:'#fff',fontSize:18,marginLeft:90}}>
            
            <Entypo name="squared-cross" size={28} color="white" />
               I understand and hereby agree to 
            </Text>
            <Text style={{color:'#fff',fontSize:18,marginLeft:120,textDecorationLine: "underline"}}>general terms and conditions</Text>
            </View>
          <View style={{marginBottom:20}}>
          <View style={{flexDirection:'row',width:'70%',marginLeft:65}}>
            <TouchableOpacity style={[styles.btn]}>
              <Text style={[styles.btnText]}  onPress={()=> navigation.navigate('forth')}>got it!</Text>
              <Text style={[styles.text3]}>General terms and conditions</Text>
            </TouchableOpacity>
          </View>
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

export default ThirdScreen

const styles = StyleSheet.create({
    title:{
        color:Color.white,
        fontSize:28,
        fontWeight:'bold',
        marginTop:10,
        marginLeft:20,
        alignItems:'flex-start'
      },
      btn:{
        flex:1,
        height:70,
        width:10,
        borderRadius:38,
        backgroundColor:'#25D366',
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