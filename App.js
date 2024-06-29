import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import LoginScreen from './App/screens/Login/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigation/TabNavigation';

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
    'SemiBold': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'ExtraBold': require('./assets/fonts/Outfit-ExtraBold.ttf'),
    'ExtraLight': require('./assets/fonts/Outfit-ExtraLight.ttf'),
    'Medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'Regular': require('./assets/fonts/Outfit-Regular.ttf'),
    'Thin': require('./assets/fonts/Outfit-Thin.ttf'),
  });

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
      publishableKey={'pk_test_cHJlc2VudC1sZW9wYXJkLTgyLmNsZXJrLmFjY291bnRzLmRldiQ'}
    >
      <NavigationContainer>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <SignedIn>
            <TabNavigation />
          </SignedIn>
          <SignedOut>
            <LoginScreen />
          </SignedOut>
        </View>
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
