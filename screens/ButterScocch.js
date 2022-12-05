import { StatusBar } from "expo-status-bar";
import React from "react";
import {Text, StyleSheet, View, Pressable } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-ico-material-design";
export default function ButterScocch({ navigation }) {
  var iconHeight = 26;
  var iconWidth = 26;
  const UTHealth = {
    latitude: 30.27742,
    longitude: -97.7353,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const familyWellness = {
    latitude: 30.2873,
    longitude: -97.7235,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const careNow = {
    latitude: 30.259692,
    longitude: -97.754779,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const communityClinic = {
    latitude: 30.3241,
    longitude: -97.6994,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const centralAustin = {
    latitude: 30.2915,
    longitude: -97.7274,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const redRiver = {
    latitude: 30.2892,
    longitude: -97.7262,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const wiseman = {
    latitude: 30.4764962,
    longitude: -97.8161882,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }
disableYellowBox = true;

  return (
    <View style={styles.container}>
      <Text style={styles.topTitle}>Clinics that Support United Healthcare</Text>
      <MapView
        style={styles.mapsheet}
        showsUserLocation={true}
        zoomEnabled={true}
        initialRegion={{
          latitude: 30.2862,
          longitude: -97.7394,
          latitudeDelta: 0.040,
          longitudeDelta: 0.040,
        }}
      >
        <Marker
          title="United Healthcare"
          coordinate={UTHealth}
        />
        <Marker
          title="Family Wellness Clinic"
          coordinate={familyWellness}
        />
        <Marker
          title="CareNow"
          coordinate={careNow}
        />
        <Marker
          title="People's Community Clinic"
          coordinate={communityClinic}
        />
        <Marker
          title="Central Austin Family Medicine"
          coordinate={centralAustin}
        />
        <Marker
          title="Red River Family Practice"
          coordinate={redRiver}
        />
        <Marker
          title="Wiseman Family Practice"
          coordinate={wiseman}
        />
      </MapView>
      <StatusBar style="auto" />
      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <Pressable
            onPress={() => navigation.navigate("Map")}
            style={styles.IconBehave}
          >
            <Icon
              name="compass-with-white-needles"
              height={iconHeight}
              width={iconWidth}
              color="white"
            />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Report")}
            style={styles.IconBehave}
          >
            <Icon
              name="report-symbol"
              height={iconHeight}
              width={iconWidth}
              color="white"
            />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Insurance")}
            style={styles.IconBehave}
          >
            <Icon
              name="favorite-heart-outline-button"
              height={iconHeight}
              width={iconWidth}
              color="white"
            />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("News")}
            style={styles.IconBehave}
          >
            <Icon
              name="screen-with-news-sections"
              height={iconHeight}
              width={iconWidth}
              color="white"
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "center",
  },
  topTitle:{
    fontSize: 30,
    paddingVertical: 60,
    flex:1,
    textAlign: "center",
    color: "white",
    zIndex: 80,
    top: 10
  },
  NavContainer: {
    position: "absolute",
    alignItems: "center",
    bottom: 20,
  },
  NavBar: {
    flexDirection: "row",
    backgroundColor: "#eee",
    justifyContent: "space-evenly",
    backgroundColor: "black",
    width: "100%",
    height: "140%",
  },
  IconBehave: {
    padding: 14,
  },
  mapsheet: {
    height: "65%",
    width: "85%",
    borderRadius: "25%",
    zindex: 2,
    marginTop: 20,
    bottom: 120
  },
});
