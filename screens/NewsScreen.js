import React from "react";
import { StyleSheet, Text, View, ImageBackground, Pressable, SafeAreaView, ScrollView, Image, StatusBar, Linking} from 'react-native';
import Icon from 'react-native-ico-material-design';
export default function NewScreen({navigation}) {
    var iconHeight = 26;
    var iconWidth = 26;
    changeText = (text) => {
        console.log(text + "has been pressed!")
        this.setState({
            screenText: text
        })
    }
disableYellowBox = true;

    return (
        <View style = {styles.container}>
            <SafeAreaView style={styles.safeAreaViewContainer}>
                <Text style={styles.newsTitle}>UT Health News</Text>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.newsView}>
                        <Image
                            style={styles.newsImage}
                            source={require("../assets/TACC.png")}
                        ></Image>
                        <ImageBackground 
                            style={styles.newsTextRectangle}>
                            <Text style={styles.newsText}
                                onPress ={() => Linking.openURL("https://covid-19.tacc.utexas.edu/publications/")}>
                                This website provides a list of publications relating to COVID-19. To learn more, click here.
                            </Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.newsView}>
                        <Image
                            style={styles.newsImage}
                            source={require("../assets/UTLogo.png")}
                        ></Image>
                        <ImageBackground 
                            style={styles.newsTextRectangle}>
                            <Text style={styles.newsText}
                                onPress ={() => Linking.openURL("https://news.utexas.edu/2020/03/16/coronavirus-spreads-quickly-and-sometimes-before-people-have-symptoms-study-finds/")}>
                                Check out this article to learn about COVID, how it spreads, and how you can protect yourself against it. Click here to read more. 
                            </Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.newsView}>
                        <Image
                            style={styles.newsImage}
                            source={require("../assets/Moody.png")}
                        ></Image>
                        <ImageBackground 
                            style={styles.newsTextRectangle}>
                            <Text style={styles.newsText}
                                onPress ={() => Linking.openURL("https://moody.utexas.edu/centers/health-communication/chc-think-tank-guide-promoting-upcoming-flu-vaccine-cycle-and-managing")}>
                                This article details the thoughts of the public regarding the flu vaccine and the COVID vaccine. Click here to read more.
                            </Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.newsView}>
                        <Image
                            style={styles.newsImage}
                            source={require("../assets/DailyTexan.png")}
                        ></Image>
                        <ImageBackground 
                            style={styles.newsTextRectangle}>
                            <Text style={styles.newsText}
                                onPress ={() => Linking.openURL("https://thedailytexan.com/2019/04/04/hey-curious-campus-why-are-allergies-so-bad-in-austin-what-can-i-do-to-alleviate-symptoms/")}>
                                Check out this article to explore allergies on campus and what you can do to alleviate your symptoms. Click here to read more. 
                            </Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.newsView}>
                        <Image
                            style={styles.newsImage}
                            source={require("../assets/KVUE.png")}
                        ></Image>
                        <ImageBackground 
                            style={styles.newsTextRectangle}>
                            <Text style={styles.newsText}
                                onPress ={() => Linking.openURL("https://www.kvue.com/article/news/health/coronavirus/ut-sensor-detects-coronavirus-flu/269-46c0d36a-dfb2-48b1-be67-53436a4ce709")}>
                                Click here to read this article about a new sensor that can test for COVID and the flu. 
                            </Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.newsView}>
                        <Image
                            style={styles.newsImage}
                            source={require("../assets/KVUE.png")}
                        ></Image>
                        <ImageBackground 
                            style={styles.newsTextRectangle}>
                            <Text style={styles.newsText}
                                onPress ={() => Linking.openURL("https://www.kvue.com/article/news/local/monkeypox-case-ut-austin-community/269-9d8fce4f-ee84-464d-b1c6-6fdf6bde2c1c")}>
                                Click here to read this article about the first case of monkeypox detected at UT and how it can possibly spread from one person to another. 
                            </Text>
                        </ImageBackground>
                    </View>
                </ScrollView>
            </SafeAreaView>
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
    safeAreaViewContainer: {
      flex:1,  
      paddingTop: StatusBar.currentHeight, 
    },
    scrollView: {
      backgroundColor: "#212121",
      marginHorizontal: 50,  
      bottom: 50,
      width: "100%",
      zIndex:5
    },
    container: {
      flex:1,
      backgroundColor: '#212121',
      alignItems: 'center',
      justifyContent: 'center',
    },
    newsTitle: {
      fontSize: 30,
      paddingVertical: 60,
      flex:1,
      textAlign: "center",
      color: "white",
      zIndex: 80,
      bottom: 40
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
    newsImage: {
        height: 125,
        width: 125,
        marginLeft: 10,
        borderRadius: "20%"
    },
    newsTextRectangle: {
        backgroundColor: "#111111",
        borderRadius: "20%",
        width: "60%",
        marginLeft: 10,
        paddingHorizontal: 10,
        justifyContent: "center",
    },
    newsView: {
        flexDirection: "row", 
        paddingVertical: 10, 
    },
    newsText: {
        color: "white", 
        paddingVertical: 10, 
    }
  })