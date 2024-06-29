import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppMapview from './../Homesceen/Mapview';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AppMapview />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
