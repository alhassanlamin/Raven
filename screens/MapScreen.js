import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Image
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SelectList } from "react-native-dropdown-select-list";
import Icon from "react-native-ico-material-design";
import AutoScroll from "@homielab/react-native-auto-scroll";
export default function MapScreen({ navigation }) {
  const [selected, setSelected] = useState("");
  const data = [
    { key: "1", value: "All" },
    { key: "2", value: "Covid" },
    { key: "3", value: "Influenza" },
    { key: "4", value: "Norovirus" },
    { key: "5", value: "Common Cold" },
  ];
  disableYellowBox = true;
  var iconHeight = 26;
  var iconWidth = 26;
  const [selectedDisease, setSelectedDisease] = useState([]);
  const All = [{title: "Pointe", latitude: 30.28301, longitude: -97.74494}, {title: "Pointe", pinColor: "blue",latitude: 30.28294, longitude: -97.74496},
  {title: "Pointe", pinColor: "orange", latitude: 30.28299, longitude: -97.74490},{title: "Pointe", latitude: 30.28287, longitude: -97.74493}, 
  {title: "Pointe", pinColor: "blue",latitude: 30.28310, longitude: -97.74495},{title: "Pointe", pinColor: "green", latitude: 30.28273, longitude: -97.74486},
  {title: "Torre", latitude: 30.2835, longitude: -97.7442}, {title: "Torre", pinColor: "blue", latitude: 30.2836, longitude: -97.7443},
  {title: "GrandMarc", pinColor: "orange", latitude: 30.290713, longitude: -97.742406}, {title: "GrandMarc", pinColor: "blue", latitude: 30.2908, longitude: -97.74245},
  {title: "GrandMarc", latitude: 30.29074, longitude: -97.7422}, {title: "GrandMarc", pinColor: "green", latitude: 30.29090, longitude: -97.7422},
  {title: "GrandMarc", pinColor: "green", latitude: 30.29064, longitude: -97.7422}, {title: "GrandMarc", latitude: 30.29093, longitude: -97.7426},
  {title: "The Standard at Austin", pinColor: "orange", latitude: 30.2872, longitude: -97.7458}, {title: "The Standard at Austin", latitude: 30.2868, longitude: -97.7457},
  {title: "The Standard at Austin", pinColor:"blue", latitude: 30.2866, longitude: -97.7454},{title: "The Standard at Austin", pinColor:"green", latitude: 30.2870, longitude: -97.7460},
  {title: "The Standard at Austin", latitude: 30.2868, longitude: -97.7457}, {title: "The Standard at Austin", latitude: 30.2866, longitude: -97.7459},
  {title: "The Standard at Austin", pinColor:"orange", latitude: 30.2870, longitude: -97.745}, {title: "Regents West at 26th", pinColor: "orange", latitude: 30.2912, longitude: -97.7465},
  {title: "Regents West at 26th", pinColor: "red", latitude: 30.2914, longitude: -97.7465},
  {title: "Regents West at 26th", pinColor: "blue", latitude: 30.2913, longitude: -97.7462},
  {title: "Regents West at 26th", pinColor: "green", latitude: 30.2910, longitude: -97.7462},
  {title: "The Block", pinColor: "blue", latitude: 30.2897, longitude: -97.7464},
  {title: "The Block", pinColor: "green", latitude: 30.2899, longitude: -97.7462},
  {title: "The Block", pinColor: "red", latitude: 30.2900, longitude: -97.7464},
  {title: "The Block", pinColor: "orange", latitude: 30.2898, longitude: -97.7463},
  {title: "The Block", pinColor: "blue", latitude: 30.2901, longitude: -97.7462},
  {title: "The Castillian", pinColor: "blue", latitude: 30.2847, longitude: -97.7425},
  {title: "The Castillian", pinColor: "orange", latitude: 30.28465, longitude: -97.7426},
  {title: "The Castillian", pinColor: "blue", latitude: 30.28467, longitude: -97.74248},
  {title: "The Castillian", pinColor: "green", latitude: 30.28466, longitude: -97.74253},
  {title: "Inspire on 22nd", pinColor: "blue", latitude: 30.2854, longitude: -97.7442},
  {title: "Inspire on 22nd", pinColor: "red", latitude: 30.28545, longitude: -97.74425},
  {title: "Inspire on 22nd", pinColor: "red", latitude: 30.28535, longitude: -97.744275},
  {title: "Inspire on 22nd", pinColor: "blue", latitude: 30.2854, longitude: -97.74408},
  {title: "21 Pearl West Campus", pinColor: "orange", latitude: 30.28460, longitude: -97.74746},
  {title: "21 Pearl West Campus", pinColor: "blue", latitude: 30.28465, longitude: -97.74730},
  {title: "21 Pearl West Campus", pinColor: "green", latitude: 30.28457, longitude: -97.74754},
  {title: "21 Pearl West Campus", pinColor: "orange", latitude: 30.28452, longitude: -97.74755},
  {title: "21 Pearl West Campus", pinColor: "green", latitude: 30.28460, longitude: -97.74720},
  {title: "Regents West at 24th", pinColor: "red", latitude: 30.28842, longitude: -97.74758},
  {title: "Regents West at 24th", pinColor: "orange", latitude: 30.28845, longitude: -97.74750},
  {title: "Regents West at 24th", pinColor: "red", latitude: 30.28858, longitude: -97.74745},
  {title: "Regents West at 24th", pinColor: "green", latitude: 30.28863, longitude: -97.74758},
  {title: "Regents West at 24th", pinColor: "orange", latitude: 30.28855, longitude: -97.74735},
  {title: "The Block at Pearl North", pinColor: "orange", latitude: 30.28599, longitude: -97.74659},
  {title: "The Block at Pearl North", pinColor: "blue", latitude: 30.28603, longitude: -97.74664},
  {title: "The Block at Pearl North", pinColor: "orange", latitude: 30.28592, longitude: -97.74672},
  {title: "The Block at Pearl North", pinColor: "blue", latitude: 30.28602, longitude: -97.74692},
  {title: "The Block at Pearl North", pinColor: "orange", latitude: 30.28604, longitude: -97.74698},
  {title: "The Block at Pearl North", pinColor: "green", latitude: 30.28599, longitude: -97.74703},
  {title: "Villas on Rio", pinColor: "green", latitude: 30.28495, longitude: -97.74470},
  {title: "Villas on Rio", pinColor: "orange", latitude: 30.28486, longitude: -97.74455},
  {title: "Villas on Rio", pinColor: "blue", latitude: 30.28482, longitude: -97.74445},
  {title: "Villas on Rio", pinColor: "orange", latitude: 30.28474, longitude: -97.74469},
  {title: "Villas on Rio", pinColor: "red", latitude: 30.28465, longitude: -97.74465},
  {title: "Villas on Rio", pinColor: "red", latitude: 30.28459, longitude: -97.74460},
  {title: "Villas on Rio", pinColor: "orange", latitude: 30.28447, longitude: -97.74445},
  {title: "Waterloo", pinColor: "green", latitude: 30.28818, longitude: -97.74445},
  {title: "Waterloo", pinColor: "blue", latitude: 30.28815, longitude: -97.74440},
  {title: "Waterloo", pinColor: "green", latitude: 30.28825, longitude: -97.7443},
  {title: "Waterloo", pinColor: "red", latitude: 30.28828, longitude: -97.74440},
  {title: "Waterloo", pinColor: "red", latitude: 30.28819, longitude: -97.74426},
  {title: "Skyloft", pinColor: "green", latitude: 30.28650, longitude: -97.74365},
  {title: "Skyloft", pinColor: "orange", latitude: 30.28620, longitude: -97.74339},
  {title: "Skyloft", pinColor: "red", latitude: 30.28615, longitude: -97.74350},
  {title: "Skyloft", pinColor: "blue", latitude: 30.28610, longitude: -97.74345},
  {title: "Skyloft", pinColor: "blue", latitude: 30.2860, longitude: -97.74365},
  {title: "Legacy on Rio", pinColor: "orange", latitude: 30.2917, longitude: -97.74452},
  {title: "Legacy on Rio", pinColor: "green", latitude: 30.29175, longitude: -97.745},
  {title: "Legacy on Rio", pinColor: "blue", latitude: 30.291725, longitude: -97.7451},
  {title: "Legacy on Rio", pinColor: "green", latitude: 30.29174, longitude: -97.74458},
  {title: "Legacy on Rio", pinColor: "red", latitude: 30.29185, longitude: -97.74452},
  {title: "Axis West", pinColor: "red", latitude: 30.29027, longitude: -97.75048},
  {title: "Axis West", pinColor: "green", latitude: 30.29035, longitude: -97.75052},
  {title: "Axis West", pinColor: "red", latitude: 30.290, longitude: -97.75048},
  {title: "Axis West", pinColor: "blue", latitude: 30.2899, longitude: -97.75045},
  {title: "Axis West", pinColor: "green", latitude: 30.29022, longitude: -97.75012}];
  const Covid = [{title: "Pointe", latitude: 30.28301, longitude: -97.74494},
  {title: "Pointe", latitude: 30.28287, longitude: -97.74493}, 
  {title: "Torre", latitude: 30.2835, longitude: -97.7442},
  {title: "GrandMarc", latitude: 30.29074, longitude: -97.7422},
  {title: "GrandMarc", latitude: 30.29093, longitude: -97.7426},
  {title: "The Standard at Austin", latitude: 30.2868, longitude: -97.7457},
  {title: "The Standard at Austin", latitude: 30.2868, longitude: -97.7457}, 
  {title: "The Standard at Austin", latitude: 30.2866, longitude: -97.7459},
  {title: "Regents West at 26th", pinColor: "red", latitude: 30.2914, longitude: -97.7465},
  {title: "The Block", pinColor: "red", latitude: 30.2900, longitude: -97.7464},
  {title: "Inspire on 22nd", pinColor: "red", latitude: 30.28545, longitude: -97.74425},
  {title: "Inspire on 22nd", pinColor: "red", latitude: 30.28535, longitude: -97.744275},
  {title: "Regents West at 24th", pinColor: "red", latitude: 30.28842, longitude: -97.74758},
  {title: "Villas on Rio", pinColor: "red", latitude: 30.28465, longitude: -97.74465},
  {title: "Villas on Rio", pinColor: "red", latitude: 30.28459, longitude: -97.74460},
  {title: "Waterloo", pinColor: "red", latitude: 30.28828, longitude: -97.74440},
  {title: "Waterloo", pinColor: "red", latitude: 30.28819, longitude: -97.74426},
  {title: "Skyloft", pinColor: "red", latitude: 30.28615, longitude: -97.74350},
  {title: "Legacy on Rio", pinColor: "red", latitude: 30.29185, longitude: -97.74452},
  {title: "Axis West", pinColor: "red", latitude: 30.29027, longitude: -97.75048},
  {title: "Axis West", pinColor: "red", latitude: 30.290, longitude: -97.75048}
];
  const Influenza = [{title: "Pointe", pinColor: "blue",latitude: 30.28294, longitude: -97.74496},
  {title: "Pointe", pinColor: "blue",latitude: 30.28310, longitude: -97.74495},
  {title: "Torre", pinColor: "blue", latitude: 30.2836, longitude: -97.7443},
  {title: "GrandMarc", pinColor: "blue", latitude: 30.2908, longitude: -97.74245},
  {title: "The Standard at Austin", pinColor:"blue", latitude: 30.2866, longitude: -97.7454},
  {title: "Regents West at 26th", pinColor: "blue", latitude: 30.2913, longitude: -97.7462},
  {title: "The Block", pinColor: "blue", latitude: 30.2897, longitude: -97.7464},
  {title: "The Block", pinColor: "blue", latitude: 30.2901, longitude: -97.7462},
  {title: "The Castillian", pinColor: "blue", latitude: 30.2847, longitude: -97.7425},
  {title: "The Castillian", pinColor: "blue", latitude: 30.28467, longitude: -97.74248},
  {title: "Inspire on 22nd", pinColor: "blue", latitude: 30.2854, longitude: -97.7442},
  {title: "Inspire on 22nd", pinColor: "blue", latitude: 30.2854, longitude: -97.74408},
  {title: "21 Pearl West Campus", pinColor: "blue", latitude: 30.28465, longitude: -97.74730},
  {title: "The Block at Pearl North", pinColor: "blue", latitude: 30.28603, longitude: -97.74664},
  {title: "Villas on Rio", pinColor: "blue", latitude: 30.28482, longitude: -97.74445},
  {title: "Waterloo", pinColor: "blue", latitude: 30.28815, longitude: -97.74440},
  {title: "Skyloft", pinColor: "blue", latitude: 30.28610, longitude: -97.74345},
  {title: "Skyloft", pinColor: "blue", latitude: 30.2860, longitude: -97.74365},
  {title: "Legacy on Rio", pinColor: "blue", latitude: 30.291725, longitude: -97.7451},
  {title: "Axis West", pinColor: "blue", latitude: 30.2899, longitude: -97.75045}
];
  const Norovirus = [{title: "Pointe", pinColor: "orange", latitude: 30.28299, longitude: -97.74490},
  {title: "GrandMarc", pinColor: "orange", latitude: 30.290713, longitude: -97.742406},
  {title: "The Standard at Austin", pinColor: "orange", latitude: 30.2872, longitude: -97.7458},
  {title: "The Standard at Austin", pinColor:"orange", latitude: 30.2870, longitude: -97.745},
    {title: "The Block", pinColor: "orange", latitude: 30.2898, longitude: -97.7463},
    {title: "The Castillian", pinColor: "orange", latitude: 30.28465, longitude: -97.7426},
    {title: "21 Pearl West Campus", pinColor: "orange", latitude: 30.28460, longitude: -97.74746},
    {title: "21 Pearl West Campus", pinColor: "orange", latitude: 30.28452, longitude: -97.74755},
    {title: "Regents West at 24th", pinColor: "orange", latitude: 30.28845, longitude: -97.74750},
    {title: "Regents West at 24th", pinColor: "orange", latitude: 30.28855, longitude: -97.74735},
    {title: "The Block at Pearl North", pinColor: "orange", latitude: 30.28599, longitude: -97.74659},
    {title: "The Block at Pearl North", pinColor: "orange", latitude: 30.28592, longitude: -97.74672},
    {title: "The Block at Pearl North", pinColor: "orange", latitude: 30.28604, longitude: -97.74698},
    {title: "Villas on Rio", pinColor: "orange", latitude: 30.28486, longitude: -97.74455},
    {title: "Villas on Rio", pinColor: "orange", latitude: 30.28474, longitude: -97.74469},
    {title: "Villas on Rio", pinColor: "orange", latitude: 30.28447, longitude: -97.74445},
    {title: "Skyloft", pinColor: "orange", latitude: 30.28620, longitude: -97.74339},
    {title: "Legacy on Rio", pinColor: "orange", latitude: 30.2917, longitude: -97.74452},
  ]  
  const CommonCold = [{title: "Pointe", pinColor: "green", latitude: 30.28273, longitude: -97.74486},
  {title: "GrandMarc", pinColor: "green", latitude: 30.29090, longitude: -97.7422},
   {title: "GrandMarc", pinColor: "green", latitude: 30.29064, longitude: -97.7422},
  {title: "The Standard at Austin", pinColor:"green", latitude: 30.2870, longitude: -97.7460},
    {title: "Regents West at 26th", pinColor: "green", latitude: 30.2910, longitude: -97.7462},
    {title: "The Block", pinColor: "green", latitude: 30.2899, longitude: -97.7462},
    {title: "The Castillian", pinColor: "green", latitude: 30.28466, longitude: -97.74253},
    {title: "21 Pearl West Campus", pinColor: "green", latitude: 30.28457, longitude: -97.74754},
    {title: "21 Pearl West Campus", pinColor: "green", latitude: 30.28460, longitude: -97.74720},
    {title: "Regents West at 24th", pinColor: "green", latitude: 30.28863, longitude: -97.74758},
    {title: "The Block at Pearl North", pinColor: "green", latitude: 30.28599, longitude: -97.74703},
    {title: "Villas on Rio", pinColor: "green", latitude: 30.28495, longitude: -97.74470},
    {title: "Waterloo", pinColor: "green", latitude: 30.28818, longitude: -97.74445},
    {title: "Skyloft", pinColor: "green", latitude: 30.28650, longitude: -97.74365},
    {title: "Legacy on Rio", pinColor: "green", latitude: 30.29175, longitude: -97.745},
    {title: "Legacy on Rio", pinColor: "green", latitude: 30.29174, longitude: -97.74458},
    {title: "Axis West", pinColor: "green", latitude: 30.29035, longitude: -97.75052},
    {title: "Axis West", pinColor: "green", latitude: 30.29022, longitude: -97.75012}];  


  return (
    <View style={styles.container}>
      <ImageBackground style={styles.dashboardRectangle}>
      <AutoScroll style={styles.scrolling} endPadding={50}>
        <Text style={styles.dashboardText}>High levels of Influenza Virus</Text>
      </AutoScroll>
      </ImageBackground>

      <View style={styles.dropdown}>
        <SelectList
          boxStyles={styles.dropdownBox}
          inputStyles={styles.dropdownText}
          dropdownItemStyles={styles.dropdownList}
          dropdownTextStyles={styles.dropdownText}
          setSelected={(val) => {
            setSelected(val);
            if (val == "All"){
              setSelectedDisease(All);
            }
            else if (val == "Covid") {
              setSelectedDisease(Covid);
            } 
            else if (val=="Influenza") {
              setSelectedDisease(Influenza);
            }
            else if (val=="Norovirus") {
              setSelectedDisease(Norovirus);
            }
            else if (val=="Common Cold") {
              setSelectedDisease(CommonCold);
            }
            else {
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
            pinColor={marker.pinColor}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
          />
        ))}
      </MapView>
      <Image source={require("../assets/Legend.png") } style={styles.legend}/>
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
    marginBottom: -225,
    zindex: 100,
    bottom: 10
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
    marginTop: 225,
    zindex: 10,
    bottom: -85
  },
  scrolling: {
    width: 200
  },
  legend: {
    bottom: 10,
    width: 100,
    height: 75,
    zindex: 40,
    left: 100
  }
});
