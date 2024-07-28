import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import Home from '../screens/home';




const Welcome = () => {
  const navigation= useNavigation();
  useEffect(()=>{

        setTimeout(()=>navigation.navigate('Home'),2500);
    
      },[])
//   const ring1padding=useSharedValue(0);
//   const ring2padding=useSharedValue(0);
//   useEffect(()=>{
//     ring1padding.value=0;
//     ring2padding.value=0;

//     setTimeout(()=>ring1padding.value=withSpring(ring1padding.value+hp(5)),100);
//     setTimeout(()=>ring2padding.value=withSpring(ring2padding.value+hp(5)),100);

//   },[])

  return (
    <View style={styles.container} >
      <StatusBar style={'light'} />
      {/* // here i put the logo image */}
      <View style={styles.round}>
        <View style={styles.rounds}>
          {/* <Image source={require('../assests/images/welcome.png')} 
      style={{width:200, height:200}} /> */}
          <Image style={styles.logo} source={require('../assests/logo.png')} />
        </View>
      </View>
      <View>
        <Text style={{
          marginTop: 5, fontSize: hp(7),
          color: 'white', fontStyle: 'italic'
        }}>Foody</Text>
        <Text style={{
          color: 'white', marginTop: 5,
          textAlign: 'center', fontSize: hp(3.5), fontStyle: 'italic'
        }}>Food is Best</Text>
      </View>

    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC107',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'white',
    alignContent: 'center'


  },
  logo: {
    // backgroundColor:'white',
    width: hp(25),
    height: hp(25),
    borderRadius: 120


  },
  round: {
    backgroundColor: '#EEEEEE',
    padding:hp(5),
    borderRadius: hp(100)
  },
  rounds: {
    backgroundColor: '#E0E0E0',
    padding:hp(3.5),
    borderRadius: hp(100)
  }
});

export default Welcome;
