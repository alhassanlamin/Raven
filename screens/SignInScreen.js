import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  ImageBackground,
} from "react-native";

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [ errorMessage, setErrorMessage ] = useState(null)
  // const { signIn, error } = useContext(UserContext)

  const handleLogin = () => {
    if (email === "") {
      setErrorMessage("Username is not filled out.");
    } else if (password === "") {
      setErrorMessage("Password is not filled out.");
    } else {
      signIn(email, password);
    }
  };
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../assets/RavenViewBackground.png")}
    >
      <Image
        style={styles.logoImage}
        source={require("../assets/RavenViewLogo.png")}
      ></Image>
      <Text style={styles.signInTitle}>Let's Sign You In</Text>
      <Text style={styles.welcomeTitle}>welcome back, we missed you!</Text>
      {/* { (error || errorMessage) && <Text style={styles.error}>{error || errorMessage}</Text> } */}
      <ImageBackground style={styles.rectangle}>
        <View style={{ display: "flex", alignItems: "center", width: "85%" }}>
          <TextInput
            placeholder="Username"
            placeholderTextColor={"#545454"}
            onChangeText={(text) => setEmail(text)}
            value={email}
            style={styles.usernameInput}
            autoCompleteType="email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={"#545454"}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
            style={styles.passwordInput}
          />
          <View style={{ width: "100%" }}>
            <ImageBackground style={styles.buttonRectangle}>
              <Button
                title="Sign In"
                color="white"
                //onPress={handleLogin}
                onPress={() => navigation.navigate("Map")}
              />
            </ImageBackground>
          </View>
        </View>
      </ImageBackground>
      <Text style={styles.registerTitle}>Don't have an account? Register</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  signInTitle: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
    color: "white",
  },
  usernameInput: {
    width: "100%",
    textColor: "white",
    textAlign: "center",
    justifyContent: "center",
    marginVertical: 8,
    padding: 12,
    backgroundColor: "#212121",
    borderRadius: "15%",
    marginTop: 65,
  },
  passwordInput: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    marginVertical: 8,
    padding: 12,
    backgroundColor: "#212121",
    borderRadius: "15%",
    marginTop: 30,
    marginBottom: 50,
  },
  error: {
    textAlign: "center",
    color: "red",
    fontWeight: "700",
  },
  welcomeTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 30,
    textAlign: "center",
    color: "white",
  },
  registerTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 30,
    marginBottom: 16,
    textAlign: "center",
    color: "white",
  },
  logoImage: {
    height: 125,
    width: 125,
  },
  rectangle: {
    height: 420,
    width: 350,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "15%",
    display: "flex",
    alignItems: "center",
  },
  buttonRectangle: {
    width: "100%",
    height: 40,
    textAlign: "center",
    justifyContent: "center",
    marginVertical: 8,
    backgroundColor: "#3E236E",
    borderRadius: "15%",
    marginTop: 80,
    marginBottom: 50,
  },
});
