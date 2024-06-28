import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react';
import LoginScreen from './App/screens/Login/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import* as SecureStore from 'expo-secure-store';

SplashScreen.preventAutoHideAsync();
const tokenCache = {
  getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return null;
    }
  },
};

export default function App() {
  const[fontloaded]=useFonts({
    'Semibold':require('./assets/fonts/Outfit-SemiBold.ttf'),
    'Extrabold':require('./assets/fonts/Outfit-ExtraBold.ttf'),
    'Extralight':require('./assets/fonts/Outfit-ExtraLight.ttf'),
     'medium':require('./assets/fonts/Outfit-Medium.ttf'),
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
    <ClerkProvider 
    tokenCache={tokenCache}
    publishableKey={'pk_test_cHJlc2VudC1sZW9wYXJkLTgyLmNsZXJrLmFjY291bnRzLmRldiQ'}>
     
    <View style={styles.container} onLayout={onLayoutrootView}>
      <SignedIn>
        <Text>You are SignedIn</Text>
      </SignedIn>
      <SignedOut>
      <LoginScreen/>
      </SignedOut>
 
    </View>
    </ClerkProvider>
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
