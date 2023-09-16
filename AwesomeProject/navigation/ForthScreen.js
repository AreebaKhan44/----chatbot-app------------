import { StyleSheet, FlatList, Text,View,SafeAreaView,Dimensions, StatusBar, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
const {width,height} = Dimensions.get('window')

const Color ={primary:'#25D366',white:'#fff'}
const ForthScreen = ({navigation}) => {
    const Footer=()=>{
        return(
            <>
            <View>
            <Text style={{fontSize:26,color:'#fff',marginLeft:90,marginTop:50}}>Hello</Text>
            <Text style={{fontSize:26,color:'#fff',marginLeft:90,marginTop:10}}>it's nice that you are here.</Text>
            
            </View>

            <View>
                <Text style={{marginTop:40,color:'#fff',fontSize:26,marginLeft:90}}>In order to better understand you and your life situation, we need some more information from you</Text>
                <Text></Text>
            </View>

            <View>
                <Text style={{marginTop:30,color:'#000',fontSize:28,marginLeft:90,textDecorationLine: "underline",marginBottom:370}}>Of couruse, all information remains private and will never be passed on to third parties.</Text>
            </View>


            
          <View style={{marginBottom:20}}>
          <View style={{flexDirection:'row',width:'70%',marginLeft:65}}>
            <TouchableOpacity style={[styles.btn]}>
              <Text style={[styles.btnText]}  onPress={()=> navigation.navigate('fifth')}>next</Text>
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

export default ForthScreen

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