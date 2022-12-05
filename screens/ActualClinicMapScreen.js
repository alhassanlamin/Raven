import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-ico-material-design";
export default function ActualClinicMapScreen({ navigation }) {
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
  const hancock = {
    latitude: 30.2999,
    longitude: -97.7173,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const wiseman = {
    latitude: 30.4764962,
    longitude: -97.8161882,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  var iconHeight = 26;
  var iconWidth = 26;
  changeText = (text) => {
    console.log(text + "has been pressed!");
    this.setState({
      screenText: text,
    });
  };
  return (
    <View style={styles.container}>
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
        <Marker coordinate={UTHealth} />
      </MapView>
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
  mapsheet: {
    height: "80%",
    width: "85%",
    zindex: 1,
    borderRadius: "25%",
    marginTop: 20,
    marginBottom: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "center",
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
});
