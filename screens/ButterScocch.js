import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, View, Pressable, Marker} from 'react-native';
import MapView from "react-native-maps";
import Icon from 'react-native-ico-material-design';
export default function ButterScocch({navigation}) {
    var iconHeight = 26;
    var iconWidth = 26;
        return (
            <View style={styles.container}>
            <MapView
                style={styles.mapsheet}
                //provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                zoomEnabled={true}
                initialRegion={{
                latitude:30.2862,
                longitude:-97.7394,
                latitudeDelta: 0.021,
                longitudeDelta: 0.021,
                }}
                >
                <Marker coordinate = {{
                latitude:30.2862,
                longitude:-97.7394,
                latitudeDelta: 0.021,
                longitudeDelta: 0.021,
                }}/>
            </MapView>
            <StatusBar style="auto" />
            <View style={styles.NavContainer}>
                    <View style = {styles.NavBar}>
                        <Pressable onPress={()=> navigation.navigate('Map')} style={styles.IconBehave}>
                            <Icon name="compass-with-white-needles" height={iconHeight} width={iconWidth} color="white"/>
                        </Pressable>
                        <Pressable onPress={()=> navigation.navigate('Report')} style={styles.IconBehave}>
                            <Icon name="report-symbol" height={iconHeight} width={iconWidth} color="white"/>
                        </Pressable>
                        <Pressable onPress={()=> navigation.navigate('Insurance')} style={styles.IconBehave}>
                            <Icon name="favorite-heart-outline-button" height={iconHeight} width={iconWidth} color="white"/>
                        </Pressable>
                        <Pressable onPress={()=> navigation.navigate('News')} style={styles.IconBehave}>
                            <Icon name="screen-with-news-sections" height={iconHeight} width={iconWidth} color="white"/>
                        </Pressable>
                    </View>
                </View>
            </View>
        )
    }
  
    const styles = StyleSheet.create({
      container: {
        flex:1,
        backgroundColor: '#212121',
        alignItems: 'center',
        justifyContent: 'center',
      },
      NavContainer:{
        position: "absolute",
        alignItems: "center",
        bottom: 20,
      },
      NavBar:{
          flexDirection:"row",
          backgroundColor: "#eee",
          justifyContent: "space-evenly",
          backgroundColor: "black",
          width:"100%",
          height: "140%"
      },
      IconBehave:{
          padding: 14
      },
      mapsheet:{
        height: '65%', 
        width: '85%',
        borderRadius: "25%",
        zindex: 2,
        marginTop: 20
      }
    })