import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import AppMapview from "./../Homesceen/Mapview";
import Header from "./Header";
import { StatusBar } from "expo-status-bar";
import Searchbar from "./Searchbar";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <View></View>
      <View style={styles.header1}>
        <Header />
        <Searchbar />
      </View>

      <AppMapview />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  header1: {
    position: "absolute",
    marginVertical:40,
    zIndex: 10,
    width: "90%",
    height: 60,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff98",
    borderRadius: 60,
    alignSelf: "center",
  },
});
