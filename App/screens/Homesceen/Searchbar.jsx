import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function Searchbar() {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete 
        placeholder="Search EV Charging Stations"
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: "AIzaSyB9ctiAb-J9CZil_ZlpAg3Z0XpxwudHlNw",
          enablePoweredByContainer: false,
          language: "en",
        }}
        styles={{
          textInputContainer: styles.textInputContainer,
          textInput: styles.textInput,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 10,
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
  },
  textInputContainer: {
    borderRadius: 20,
    backgroundColor: "white",
  },
  textInput: {
    height: 45,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#f0f0f0",
    fontSize: 16,
  },
});
