import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as Location from 'expo-location';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './App/screens/Login/LoginScreen';
import TabNavigation from './App/Navigation/TabNavigation';
import  UserLocationContext  from './App/context/UserLocationcontext';

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
  const [fontsLoaded] = useFonts({
    SemiBold: require('./assets/fonts/Outfit-SemiBold.ttf'),
    ExtraBold: require('./assets/fonts/Outfit-ExtraBold.ttf'),
    ExtraLight: require('./assets/fonts/Outfit-ExtraLight.ttf'),
    Medium: require('./assets/fonts/Outfit-Medium.ttf'),
    Regular: require('./assets/fonts/Outfit-Regular.ttf'),
    Thin: require('./assets/fonts/Outfit-Thin.ttf'),
  });

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      console.log(location.coords);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }



  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey="pk_test_cHJlc2VudC1sZW9wYXJkLTgyLmNsZXJrLmFjY291bnRzLmRldiQ"
    >
      <NavigationContainer>
        <UserLocationContext.Provider value={{ location, setLocation }}>
          <View style={styles.container} onLayout={onLayoutRootView}>
            <SignedIn>
              <TabNavigation />
            </SignedIn>
            <SignedOut>
              <LoginScreen />
            </SignedOut>
          </View>
        </UserLocationContext.Provider>
      </NavigationContainer>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
