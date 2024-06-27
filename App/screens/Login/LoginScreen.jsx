import { View, Text ,ScrollView,Image,SafeAreaView,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import colors from '../../../constants/colors'
import { StatusBar } from 'expo-status-bar'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { FontAwesome } from '@expo/vector-icons';

export default function LoginScreen() {
  return (
  <SafeAreaView>

    <View style={styles.container}>
     <Text style={styles.title}>VoltGo</Text>
     <Image source={require('./../../../assets/images/car.png')} style={styles.image}></Image>
        <Text style={styles.heading}>Your ultimate EV Charging Station Finder App  </Text>
        <Text style={styles.content}>Find EV charging station near you,plan trip and so much more in just one click</Text>
        <TouchableOpacity>
        <View style={styles.box}>
        <FontAwesome name="google" size={33} color="black" />
            <Text style={{fontSize:20 ,marginLeft:10}}>Continue with Google</Text>
        </View>
        </TouchableOpacity>
     </View>
 </SafeAreaView>
    
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:colors.bg,
    },
    image:{
       width:400,
       height:250,
       objectFit:'cover',
       marginTop:-5,
      
       
    
    },
    title:{
        fontFamily:'Extrabold',
        fontSize:45,
        marginTop:30
       
       
    },
    heading:{
        fontFamily:'Semibold',
        fontSize:25,
        textAlign:'center',
        
     
    },
    content:
    {
      fontSize:17, 
      textAlign:'center',
      margin:12,
      fontFamily:'medium',
    },
    box:{
        marginTop:60,
        backgroundColor:'#ffff',
        height:70,
        width:300,
        borderRadius:60,
        justifyContent:'center',
        flexDirection:'row',
        borderBlockColor:"black",
        borderWidth:0.5,
        padding:15

    }
    
})