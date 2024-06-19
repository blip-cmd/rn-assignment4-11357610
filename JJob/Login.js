import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home", { name, email });
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.appName}>Jobizz</Text>
      <Text style={styles.welcomeText}>
        Welcome Back <Text style={styles.waveEmoji}>👋</Text>
      </Text>
      <Text style={styles.subtitle}>Let’s log in. Apply to jobs!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#AFB0B6"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#AFB0B6"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or continue with</Text>
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity>
          <View style={styles.socialIconContainer}>
            <Image
              source={require("./assets/apple.png")}
              style={styles.socialIcon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.socialIconContainer}>
            <Image
              source={require("./assets/google.png")}
              style={styles.socialIcon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.socialIconContainer}>
            <Image
              source={require("./assets/facebook.png")}
              style={styles.socialIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.registerText}>
        Haven’t an account? <Text style={styles.registerLink}>Register</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFD",
    paddingHorizontal: 20,
    justifyContent: "center",
    // fontFamily: 'Poppins'
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#356899",
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 28,
    // fontWeight: 600,   come back to this
    color: "#0D0D26",
    marginBottom: 5,
  },
  waveEmoji: {
    fontSize: 28,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  input: {
    height: 52,
    borderColor: "#AFB0B6",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    // backgroundColor: '#FFF',
    fontSize: 16,
  },
  loginButton: {
    height: 52,
    backgroundColor: "#356899",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#FFF",
    fontSize: 18,
    // fontWeight: 'bold',
  },
  orText: {
    textAlign: "center",
    color: "#AFB0B6",
    fontSize: 13,
    marginBottom: 30,
    marginTop: 30,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 60,
    marginBottom: 20,
  },
  socialIconContainer: {
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 23,
  },
  socialIcon: {
    width: 26,
    height: 26,
  },
  registerText: {
    textAlign: "center",
    fontSize: 14,
    color: "#BDBEC2",
  },
  registerLink: {
    color: "#356899",
  },
});

export default LoginScreen;
