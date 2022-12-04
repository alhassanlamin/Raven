import React, { useState } from "react";
import {View, Text, StyleSheet, TextInput, Button, ImageBackground, Pressable} from "react-native";
import Icon from 'react-native-ico-material-design';
import CheckBox from "expo-checkbox";
export default function ReportFeature({navigation}) {
    const [isSelected, setSelection] = useState(false);
    var iconHeight = 26;
    var iconWidth = 26;
    changeText = (text) => {
        console.log(text + "has been pressed!")
        this.setState({
            screenText: text
        })
    }
    return(
        <View style={styles.container}>
            <Text style={styles.reportTitle}>Report an Illness</Text>
            <TextInput 
                style={styles.textBox}
                color="white"
                placeholder= "Type in your illness..."
                placeholderTextColor="white"
                />
            <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkBox}
                />
                <Text style={styles.checkBoxText}>
                    Check this box if we can use your location
                </Text>
            </View>
            <View style={{ width: "75%" }}>
                <ImageBackground style={styles.reportButtonRectangle}>
                    <Button
                        title="Report"
                        color="white"
                        //onPress={handleLogin}
                    />
                </ImageBackground>
            </View>
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
    reportTitle: {
        fontSize: 30,
        fontWeight: "700",
        marginBottom: 50,
        textAlign: "center",
        color: "white",  
    },
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
    textBox: {
        backgroundColor: "#111111",
        color: "pink",
        fontSize: 20,
        width: "75%",
        height: "30%",
        borderwidth: 1,
        borderRadius: 10,
        padding: 10,
        textAlignVertical: "top",
        paddingTop: 20,
        paddingBottom: 220
    },
    checkBoxContainer:{
        flexDirection: "row",
        marginBottom: 20,
        marginTop: 40
    },
    checkBox:{
        alignSelf: "center",
    },
    checkBoxText: {
        lineHeight: 30,
        marginLeft: 10,
        color: "white"
    },
    reportButtonRectangle: {
        width: "100%",
        height: 40,
        textAlign: "center",
        justifyContent: "center",
        marginVertical: 8,
        backgroundColor: "#3E236E",
        borderRadius: "15%",
        marginTop: 20,
        marginBottom: 80,
    }
  })