import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react';
import LoginScreen from './App/screens/Login/LoginScreen';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const[fontloaded]=useFonts({
    'Semibold':require('./assets/fonts/Outfit-SemiBold.ttf'),
    'Extrabold':require('./assets/fonts/Outfit-ExtraBold.ttf'),
    'Extralight':require('./assets/fonts/Outfit-ExtraLight.ttf'),
     'Medium':require('./assets/fonts/Outfit-Medium.ttf'),
     'Regular':require('./assets/fonts/Outfit-Regular.ttf'),
     'Thin':require('./assets/fonts/Outfit-Thin.ttf'),
  });

  const onLayoutrootView=useCallback(async()=>{
    if(fontloaded){
      await SplashScreen.hideAsync();
    }
  },[fontloaded]);

    if(!fontloaded){
      return null;
    }  

  


  return (
    <View style={styles.container} onLayout={onLayoutrootView}>
    <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
