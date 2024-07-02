import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Fontisto } from "@expo/vector-icons";

export default function Header() {
  const { user } = useUser();
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: user?.imageUrl }}
        style={styles.userImage}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("./../../../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      <Fontisto name="filter" size={30} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    height: 60,
    flexDirection: "row",
    borderRadius: 60,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  logoContainer: {
    height: 50,
  },
  logo: {
    height: 50,
    width: 120,
  },
});
