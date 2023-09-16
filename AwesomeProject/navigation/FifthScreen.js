import { StyleSheet, Button, Text,View,SafeAreaView,Dimensions, StatusBar, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
const {width,height} = Dimensions.get('window')


const Color ={primary:'#25D366',white:'#fff'}
const FifthScreen = ({navigation}) => {
    const Footer=()=>{
        return(
            <>
            <View>
            <Text style={{fontSize:26,color:'#fff',marginLeft:50,marginTop:30}}>What should I call you?</Text>
            <TouchableOpacity style={{alignItems:'center',justifyContent:'center',height:40,backgroundColor:'#d3d3d3',width:'80%',marginLeft:50,borderRadius:10,marginTop:5}}>
              <Text style={{fontSize:20,color:'#000',marginLeft:50,width:'50%',fontWeight:'bold'}}>David</Text>
            </TouchableOpacity>
            </View>

            {/* GEnder Section */}
            <View>
                <Text style={{marginTop:20,color:'#fff',fontSize:26,marginLeft:50}}>What is your gender?</Text>
            </View>

            <View style={{marginTop:10,marginLeft:50,marginRight:30}}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={[styles.button]}>
                    <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>Female</Text>
                </TouchableOpacity>
                <View style={{width:10}}></View>
                <TouchableOpacity style={[styles.button,{backgroundColor:'#3b7a57'}]}>
                    <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>Male</Text>
                </TouchableOpacity>
             
                <View style={{width:10}}></View>
                <TouchableOpacity style={[styles.button]}>
                    <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>Other</Text>
                </TouchableOpacity>
            </View>
            </View>
            {/* GEnder Section End*/}

            {/* Age Section */}
            <View>
                <Text style={{marginTop:20,color:'#fff',fontSize:28,marginLeft:50 ,marginRight:10}}>How old are you?</Text>
            </View>

            <View style={{marginTop:10,marginLeft:50,marginRight:20}}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={[styles.button]}>
                    <Text style={{fontSize:18,color:'#fff',fontWeight:'bold'}}>-16</Text>
                </TouchableOpacity>
                <View style={{width:5}}></View>
                <TouchableOpacity style={[styles.button]}>
                    <Text style={{fontSize:18,color:'#fff',fontWeight:'bold'}}>-26</Text>
                </TouchableOpacity>
             
                <View style={{width:5}}></View>
                <TouchableOpacity style={[styles.button]}>
                    <Text style={{fontSize:18,color:'#fff',fontWeight:'bold'}}>-35</Text>
                </TouchableOpacity>

                <View style={{width:5}}></View>
                <TouchableOpacity style={[styles.button]}>
                    <Text style={{fontSize:18,color:'#fff',fontWeight:'bold'}}>-45</Text>
                </TouchableOpacity>

                <View style={{width:5}}></View>
                <TouchableOpacity style={[styles.button,{backgroundColor:'#3b7a57'}]}>
                    <Text style={{fontSize:18,color:'#fff',fontWeight:'bold'}}>-55</Text>
                </TouchableOpacity>
            </View>
            </View>
            {/* Age Section  End*/}

                        {/* relationship  Section */}
                        <View>
                <Text style={{marginTop:20,color:'#fff',fontSize:26,marginLeft:50}}>Are you in a steady relationship?</Text>
            </View>

            <View style={{marginTop:10,marginLeft:50,marginRight:100}}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={[styles.button,{backgroundColor:'#3b7a57'}]}>
                    <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>Yes</Text>
                </TouchableOpacity>
                <View style={{width:10}}></View>
                <TouchableOpacity style={[styles.button]}>
                    <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>No</Text>
                </TouchableOpacity>
             
                <View style={{width:10}}></View>
                <TouchableOpacity style={[styles.button]}>
                    <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>It is a difficult</Text>
                </TouchableOpacity>
            </View>
            </View>
            {/* relationship Section End*/}
            
                          {/* kid  Section */}
                          <View>
                <Text style={{marginTop:20,color:'#fff',fontSize:26,marginLeft:50}}>Do you have kids?</Text>
            </View>

            <View style={{marginTop:10,marginLeft:50,marginRight:'50%'}}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={[styles.button,{backgroundColor:'#3b7a57'}]}>
                    <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>Yes</Text>
                </TouchableOpacity>
                <View style={{width:10}}></View>
                <TouchableOpacity style={[styles.button]}>
                    <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>No</Text>
                </TouchableOpacity>
            </View>
            </View>
            {/* kid Section End*/}

              {/* work  Section */}
              <View>
                <Text style={{marginTop:20,color:'#fff',fontSize:26,marginLeft:50}}>Do you work?</Text>
            </View>

            <View style={{marginTop:10,marginLeft:50,marginRight:'40%',marginBottom:90}}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={[styles.button]}>
                    <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>No</Text>
                </TouchableOpacity>
                <View style={{width:10}}></View>
                <TouchableOpacity style={[styles.button]}>
                    <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>half</Text>
                </TouchableOpacity>

                <View style={{width:10}}></View>
                <TouchableOpacity style={[styles.button,{backgroundColor:'#3b7a57'}]}>
                    <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>full</Text>
                </TouchableOpacity>

                <View style={{width:10}}></View>
                <TouchableOpacity style={[styles.button]}>
                    <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>School</Text>
                </TouchableOpacity>
            </View>
            </View>
            {/* work Section End*/}
          <View style={{marginBottom:20}}>
          <View style={{flexDirection:'row',width:'70%',marginLeft:65}}>
            <TouchableOpacity style={[styles.btn]}>
              <Text style={[styles.btnText]}  onPress={()=> navigation.navigate('auth')}>submit</Text>
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

export default FifthScreen

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
       marginBottom:7,
    
      },
      text3:{
        fontSize:18,
        color:'white',
        margin:5,
        marginTop:13,
        textDecorationLine: "underline",
      },
      button:{
        flex:1,
        height:50,
        borderRadius:15,
        backgroundColor:'#d3d3d3',
        justifyContent:'center',
        alignItems:'center'
      }
})