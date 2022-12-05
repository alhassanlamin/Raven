import React from "react";
import { StyleSheet, Text, View, ImageBackground, Pressable, Button, ScrollView, SafeAreaView} from 'react-native';
import Icon from 'react-native-ico-material-design';
export default function InsuranceInput({navigation}) {
    const handleLogin = () => {
        if (email === "") {
          setErrorMessage("Username is not filled out.");
        } else if (password === "") {
          setErrorMessage("Password is not filled out.");
        } else {
          signIn(email, password);
        }
    };
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
            <SafeAreaView style={styles.safeAreaViewContainer}>
                <ImageBackground style ={styles.insuranceTextRectangle}>
                    <Text style={styles.insuranceText}>Please Select Your Insurance Provider to View A Map of Clinics that Support Your Insurance</Text>
                </ImageBackground>
                <ScrollView style={styles.scrollView}>
                    <View style={{ width: "100%" }}>
                        <ImageBackground style={styles.buttonRectangle}>
                        <Button
                            title="Aetna"
                            color="white"
                            onPress={handleLogin}
                        />
                        </ImageBackground>
                    </View>
                    <View style={{ width: "100%" }}>
                        <ImageBackground style={styles.buttonRectangle}>
                        <Button
                            title="Anthem"
                            color="white"
                            onPress={handleLogin}
                        />
                        </ImageBackground>
                    </View>
                    <View style={{ width: "100%" }}>
                        <ImageBackground style={styles.buttonRectangle}>
                        <Button
                            title="Blue Cross Blue Shield"
                            color="white"
                            onPress={handleLogin}
                        />
                        </ImageBackground>
                    </View>
                    <View style={{ width: "100%" }}>
                        <ImageBackground style={styles.buttonRectangle}>
                        <Button
                            title="Cigna"
                            color="white"
                            onPress={handleLogin}
                        />
                        </ImageBackground>
                    </View>
                    <View style={{ width: "100%" }}>
                        <ImageBackground style={styles.buttonRectangle}>
                        <Button
                            title="Health Net"
                            color="white"
                            onPress={handleLogin}
                        />
                        </ImageBackground>
                    </View>
                    <View style={{ width: "100%" }}>
                        <ImageBackground style={styles.buttonRectangle}>
                        <Button
                            title="Humana"
                            color="white"
                            onPress={handleLogin}
                        />
                        </ImageBackground>
                    </View>
                    <View style={{ width: "100%" }}>
                        <ImageBackground style={styles.buttonRectangle}>
                        <Button
                            title="Liberty Health"
                            color="white"
                            onPress={handleLogin}
                        />
                        </ImageBackground>
                    </View>
                    <View style={{ width: "100%" }}>
                        <ImageBackground style={styles.buttonRectangle}>
                        <Button
                            title="Medicare"
                            color="white"
                            onPress={handleLogin}
                        />
                        </ImageBackground>
                    </View>
                    <View style={{ width: "100%" }}>
                        <ImageBackground style={styles.buttonRectangle}>
                        <Button
                            title="MetLife"
                            color="white"
                            onPress={handleLogin}
                        />
                        </ImageBackground>
                    </View>
                    <View style={{ width: "100%" }}>
                        <ImageBackground style={styles.buttonRectangle}>
                        <Button
                            title="Optum"
                            color="white"
                            onPress={handleLogin}
                        />
                        </ImageBackground>
                    </View>
                    <View style={{ width: "100%" }}>
                        <ImageBackground style={styles.buttonRectangle}>
                        <Button
                            title="Reliance"
                            color="white"
                            onPress={handleLogin}
                        />
                        </ImageBackground>
                    </View>
                    <View style={{ width: "100%" }}>
                        <ImageBackground style={styles.buttonRectangle}>
                        <Button
                            title="United Healthcare"
                            color="white"
                            onPress={()=> navigation.navigate('BS')}
                        />
                        </ImageBackground>
                    </View>
                    <View style={{ width: "100%" }}>
                        <ImageBackground style={styles.buttonRectangle}>
                        <Button
                            title="Vitality"
                            color="white"
                            onPress={handleLogin}
                        />
                        </ImageBackground>
                    </View>
                    <View style={{ width: "100%" }}>
                        <ImageBackground style={styles.buttonRectangle}>
                        <Button
                            title="Wellmed"
                            color="white"
                            onPress={handleLogin}
                        />
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
disableYellowBox = true;

const styles = StyleSheet.create({
    safeAreaViewContainer: {
      flex:1, 
      width: "100%",
    },
    scrollView: {
      backgroundColor: "#212121",
      marginHorizontal: 50, 
      bottom: 40,
    },
    container: {
      flex:1,
      backgroundColor: '#212121',
      alignItems: 'center',
      justifyContent: 'center',
    },
    insuranceText: {
      fontSize: 20,
      paddingVertical: 80,
      flex:1,
      textAlign: "center",
      color: "white",
      bottom: 60,
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
    buttonRectangle: {
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "#3E236E",
        borderRadius: "15%",
        marginBottom: 20,
    },
    insuranceTextRectangle: {
        backgroundColor: "#212121",
        justifyContent: "center"
    }
  })