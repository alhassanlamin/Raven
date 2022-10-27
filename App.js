import React, { useState, useContext } from "react"
import { View, Text, StyleSheet, TextInput, Button, Image, ImageBackground} from "react-native"
// import Button from "../components/Button"
// import UserContext from "../misc/UserContext"

function App () {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    // const [ errorMessage, setErrorMessage ] = useState(null)
    // const { signIn, error } = useContext(UserContext)

    const handleLogin = () => {
        if (email === "") {
            setErrorMessage("Username is not filled out.")
        } else if (password === "") {
            setErrorMessage("Password is not filled out.")
        } else {
            signIn(email, password)
        }
    }
    
    return (
        <ImageBackground style ={styles.image_2}source = {require("./assets/rahul.background.png")}>
                <Image style={styles.image_1}source = {require("./assets/rahul.image2.png")}></Image>
                <Text style={styles.title}>Let's Sign You In</Text>
                <Text style={styles.title2}>welcome back, we tests missed you!</Text>
                {/* { (error || errorMessage) && <Text style={styles.error}>{error || errorMessage}</Text> } */}
                <ImageBackground style={styles.rectangle}>
                    <TextInput 
                        placeholder="Username"
                        onChangeText={text => setEmail(text)}
                        value={email}
                        style={styles.input}
                        autoCompleteType="email"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                    />
                    <TextInput 
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                        value={password}
                        style={styles.input}
                    />
                    <Button 
                        style={styles.button}
                        title="Sign In"
                        onPress={handleLogin}
                    />
                </ImageBackground>
                <Text style={styles.title3}>Don't have an account? Register</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image_2: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    title: {
        fontSize: 30,
        fontWeight: "700",
        marginBottom: 16,
        textAlign: "center",
        color: "white"
    },
    button: {
        marginVertical: 12,
        width: "90%",
        maxWidth: 420,
        color: "white",
        opacity: 1
    },
    input: {
        textAlign: "center",
        alignItems: "center",
        width: "50%",
        maxWidth: 350,
        marginVertical: 8,
        padding: 12,
        backgroundColor: "#e0e0e0",
        borderRadius: "15%",
        marginTop: 65,
        opacity: 1
    },
    error: {
        textAlign: "center",
        color: "red",
        fontWeight: "700"
    },
    title2: {
        fontSize: 14,
        fontWeight: "700",
        marginBottom: 30,
        textAlign: "center",
        color: "white"
    },
    title3:{
        fontSize: 16,
        fontWeight: "700",
        marginTop: 30,
        marginBottom: 16,
        textAlign: "center",
        color: "white"
    },
    image_1:{
        height: 125,
        width: 125,
    },
    rectangle:{
        height: 420,
        width: 350,
        opacity: 0.2,
        backgroundColor: "#D9FFFFFF",
        borderRadius: "15%",
        display: "flex"
    }
})

export default App