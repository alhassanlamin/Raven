import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

export default function App() {
  return (
    <View style={styles.container}>
       <ImageBackground style={styles.rectangle}>
        <Text style={styles.txt}>High levels of Covid</Text>
       </ImageBackground>
      <MapView
        style={{height: '60%', width: '70%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude:30.2862,
          longitude:-97.7394,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0201,
        }}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    //borderRadius: "15%"
  },
  txt: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
    color: "white",
  },
  rectangle: {
    flex: .12,
    width: "50%",
    height: "50%",
    textAlign: "center",
    justifyContent: "center",
    marginVertical: 20,
    padding: 0,
    backgroundColor: "grey",
    borderRadius: "15%",
    marginTop: 0,
  }
})