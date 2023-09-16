import { StyleSheet, TextInput, Text,View,SafeAreaView,Dimensions, StatusBar } from 'react-native';
import React from 'react';
const {width,height} = Dimensions.get('window')
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
const Color ={primary:'#d3d3d3',white:'#fff'}

const SixthScreen = ({navigation}) => {
    const Footer=()=>{
        return(
            <>
            {/* <View style={{height:"7%",backgroundColor:'#292F33',flexDirection:'row'}}>
            <Ionicons name="reorder-three-outline" size={54} color="white"  onPress={()=>navigation.navigate('Psychology Counseling Session')}/>
            <Text style={{fontSize:24,color:'#fff',marginLeft:40,marginTop:10,marginRight:'26%'}}>Psychology Counseling Session</Text>
            <AntDesign name="plus" size={40} color="white" />
            </View> */}

            <View style={{flexDirection:'row',height:'10%',marginTop:'8%',marginLeft:'10%'}}>
            <FontAwesome name="circle" size={44} color="green" />
                <Text style={{color:'#000',fontSize:24,marginLeft:15}}>Hello David,schon dich zu sehen.
                Wie kann ich dir heute helfen?
                Mochtest du uber etwas Bestimmtes sprechen?</Text>
                <Text></Text>
            </View>

            <View style={{flexDirection:'row',height:'34%',marginTop:'8%',backgroundColor:'#E3E3E3'}}>
            <FontAwesome name="square" size={44} color="red" style={{marginLeft:'10%',marginTop:'4%'}}/>
                <Text style={{marginLeft:'3%',marginTop:'4%',color:'#000',fontSize:24}}>Ich habe heute schon wieder eines miner Kinder zuhause.Er hat huete Nacht Fieber entwickelt.
                Vielleicht konnen wir diese Session ein bisschen zu meiner emotionalen Starkung nutzen?mich haut es gerade ziemlich um,dass wir seit 4 Monaten alle standin karank sind.
                Ich kann nicht mehr,Habe keine Understutuzung.</Text>
            </View>

            <View style={{flexDirection:'row',height:'10%',marginTop:'5%',marginLeft:'10%',marginBottom:'13%'}}>
            <FontAwesome name="circle" size={44} color="green" />
                <Text style={{color:'#000',fontSize:24,marginLeft:15,}}>oh,dess tu mir leid zu horen,dess du</Text>
            </View>
            
            <View style={styles.searchSection}>
    <TextInput
        style={styles.input}
        placeholder=""
       // onChangeText={(searchString) => {this.setState({searchString})}}
       underlineColorAndroid="transparent"
       mode='outline'
    />
    <Feather  style={styles.searchIcon} name="send" size={24} color="black" />
    <Fontisto  style={styles.searchIcon} name="spinner-rotate-forward" size={24} color="black"/>
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

export default SixthScreen

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
        //textDecorationLine: "underline",
      },
      searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d3d3d3'
    },
    searchIcon: {
        padding: 10,
        marginLeft:8
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 3,
        marginLeft:15,
        backgroundColor: '#fff',
        color: '#424242',
        borderColor:'#000',
        borderRadius:5,
        borderWidth: 1,
    }
})