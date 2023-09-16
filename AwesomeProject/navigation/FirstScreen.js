import { StyleSheet, FlatList, Text,View,SafeAreaView,Dimensions, StatusBar, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
const {width,height} = Dimensions.get('window')

const Color ={primary:'#25D366',white:'#fff'}

const slides=[
  {
    id:'1',
    image:require('../img/chatbot.jpg'),
    title:'Your Bot In Life',
    subtitle:'Any Time. Everywhere . '
  }
]

const Slide=({item})=>{
  //const [currentSlideIndex,setCurrentIndex]=useState(0);

 
  return(
  <View style={{alignItems:'centre'}}>
    {/* <Image source={item.image} style={{height,width, resizeMode:'contain'}}/> */}
    <Image source={item.image} style={{height:'80%',width:'80%',marginTop:'10%',marginBottom:'40%',marginLeft:50}}/>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.title}>{item.subtitle}</Text>
  </View>
  )
}
const FirstScreen = ({navigation}) => {
  const Footer=()=>{
    return(
      <View style={{marginBottom:20}}>
      <View style={{flexDirection:'row',width:'70%',marginLeft:55}}>
        <TouchableOpacity style={[styles.btn]}>
          <Text style={[styles.btnText]}  onPress={()=> navigation.navigate('sign')}>let's talk</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
  }
  return (
    <>
    <SafeAreaView style={{flex:1,backgroundColor:Color.primary}}>
      <StatusBar backgroundColor={Color.primary}/>
      <FlatList
      data={slides}
      contentContainerStyle={{height:height* 0.75}}
      showsHorizontalScrollIndicator={false}
        renderItem={({item})=> <Slide item={item}/>}
      />
      <Footer/>
    </SafeAreaView>

  
  </>
  )
}

export default FirstScreen

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
    height:50,
    width:10,
    borderRadius:20,
    backgroundColor:'black',
    color:'white',
    alignItems:'center',
    justifyContent:'centre'
  },
  btnText:{
    flex:1,
    color:'#fff',
    fontSize:18,
    padding:10,
    fontWeight:10,
    marginBottom:20
  }
})
