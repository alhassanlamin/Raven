import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SelectList } from "react-native-dropdown-select-list";
import Icon from "react-native-ico-material-design";
export default function MapScreen({ navigation }) {
  const [selected, setSelected] = useState("");
  const data = [
    { key: "1", value: "Covid" },
    { key: "2", value: "Influenza" },
    { key: "3", value: "Norovirus" },
    { key: "4", value: "Common Cold" },
  ];
  var iconHeight = 26;
  var iconWidth = 26;
  const [selectedDisease, setSelectedDisease] = useState([]);
  const Covid = [{ title: "Torre", latitude: 30.28284, longitude: -97.74493 }];

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.dashboardRectangle}>
        <Text style={styles.dashboardText}>High levels of Influenza Virus</Text>
      </ImageBackground>

      <View style={styles.dropdown}>
        <SelectList
          boxStyles={styles.dropdownBox}
          inputStyles={styles.dropdownText}
          dropdownItemStyles={styles.dropdownList}
          dropdownTextStyles={styles.dropdownText}
          setSelected={(val) => {
            setSelected(val);
            if (val == "Covid") {
              setSelectedDisease(Covid);
            } else {
              setSelectedDisease([]);
            }
          }}
          data={data}
          save="value"
          label="Categories"
        />
      </View>
      <MapView
        style={styles.mapsheet}
        showsUserLocation={true}
        zoomEnabled={true}
        initialRegion={{
          latitude: 30.2862,
          longitude: -97.7394,
          latitudeDelta: 0.021,
          longitudeDelta: 0.021,
        }}
      >
        {selectedDisease.map((marker, index) => (
          <Marker
            key={index}
            title={marker.title}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
          />
        ))}
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
  dashboardText: {
    paddingHorizontal: 40,
    paddingVertical: 5,
    flex: 1,
    color: "white",
  },
  dropdown: {
    backgroundColor: "#5A5A5A",
    borderRadius: "20%",
    width: "85%",
    position: "absolute",
    top: "15%",
    zIndex: 3,
    marginVertical: -3,
  },
  dashboardRectangle: {
    flex: 0.12,
    textAlign: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#5A5A5A",
    borderRadius: "20%",
    marginTop: -50,
    marginBottom: 70,
  },
  dropdownBox: {
    backgroundColor: "#5A5A5A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20%",
  },
  dropdownList: {
    backgroundColor: "#5A5A5A",
    justifyContent: "center",
    alignItems: "center",
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
  dropdownText: {
    color: "white",
  },
  mapsheet: {
    height: "65%",
    width: "85%",
    borderRadius: 25,
    marginTop: 20,
  },
});
