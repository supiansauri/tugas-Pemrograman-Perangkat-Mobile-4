import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { style } from '../style/font_style'
import { containerStyle } from '../style/container_style'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/AppNavigator'

const StartScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={{
      backgroundColor: 'black',
      flex: 1,
      position: 'relative'
    }}>
      <Image source={require('../../assets/BackgroundNasi.png')} style={{
         width: screenWidth,
         height: screenWidth * 0.5, // Sesuaikan rasio height agar gambar tetap proporsional
         resizeMode: 'cover',
         marginTop: 150,
      }}/>
      <View style={{
        position:'absolute', 
        bottom: 0, 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        
        }}>
        <Text style={[style.whiteLarge, {textAlign: 'center', width: 280,}]} >NASI GORENG MANG KASEP</Text>
        <View style={{height:10}}/>
        <Text style={[style.whiteHint, {width: 270, textAlign: 'center',}]}>Nasi terbaik, bumbu paling kaya, cita rasa yang menggugah selera</Text>
        <View style={{height:25}}/>
        <View style={containerStyle.button}>
    
          <TouchableOpacity onPress={() => navigation.navigate('MainTabs')}><Text style={style.whiteMedium}>Get Started</Text></TouchableOpacity>
        </View>
        <View style={{height:40}}/>
      </View>
    </View>
  )
}

export default StartScreen