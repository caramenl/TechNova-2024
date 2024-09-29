import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function SignInPage({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedInput, setFocusedInput] = useState(null); // State to track focused input

  // Animation references
  const scaleAnimSignUp = useRef(new Animated.Value(1)).current;
  const scaleAnimGoogle = useRef(new Animated.Value(1)).current;
  const scaleAnimFacebook = useRef(new Animated.Value(1)).current;

  const handleContinue = () => {
    // Handle form submission or navigation here
    navigation.navigate("TabScreen");
  };

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const startZoomOut = (animation) => {
    Animated.spring(animation, {
      toValue: 0.95, // Zoom out to 95% of the original size
      useNativeDriver: true,
    }).start();
  };

  const resetZoom = (animation) => {
    Animated.spring(animation, {
      toValue: 1, // Back to original size
      useNativeDriver: true,
    }).start();
  };

  return (
    <LinearGradient
      colors={["white", "white"]} // Define gradient colors for background
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <Image source={require("./assets/bearlogo.png")} style={styles.icon} />
        <Image
          source={require("./assets/logotext.png")}
          style={styles.logoText}
        />

        {/* Name Input with Icon */}
        <Text style={styles.subheading}>Name</Text>
        <View
          style={[
            styles.inputRow,
            focusedInput === "name" && styles.inputFocused,
          ]}
        >
          <Image
            source={require("./assets/userIcon.png")}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your name..."
            value={name}
            onFocus={() => handleFocus("name")}
            onBlur={handleBlur}
            onChangeText={setName}
          />
        </View>

        {/* Email Input with Icon */}
        <Text style={styles.subheading}>Email</Text>
        <View
          style={[
            styles.inputRow,
            focusedInput === "email" && styles.inputFocused,
          ]}
        >
          <Image
            source={require("./assets/emailIcon.png")}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your email..."
            value={email}
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        {/* Password Input with Icon */}
        <Text style={styles.subheading}>Password</Text>
        <View
          style={[
            styles.inputRow,
            focusedInput === "password" && styles.inputFocused,
          ]}
        >
          <Image
            source={require("./assets/passwordIcon.png")}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password..."
            value={password}
            onFocus={() => handleFocus("password")}
            onBlur={handleBlur}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>

        {/* Sign Up Button with Zoom Out Animation */}
        <Animated.View style={{ transform: [{ scale: scaleAnimSignUp }] }}>
          <Pressable
            onPress={handleContinue}
            onPressIn={() => startZoomOut(scaleAnimSignUp)}
            onPressOut={() => resetZoom(scaleAnimSignUp)}
          >
            <LinearGradient
              colors={["#FF776D", "#FF7BA3"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientButton}
            >
              <Text style={styles.text}>SIGN UP</Text>
            </LinearGradient>
          </Pressable>
        </Animated.View>

        <Text style={styles.text2}>OR</Text>

        {/* Google Button with Zoom Out Animation */}
        <Animated.View style={{ transform: [{ scale: scaleAnimGoogle }] }}>
          <Pressable
            style={styles.appButton}
            onPress={handleContinue}
            onPressIn={() => startZoomOut(scaleAnimGoogle)}
            onPressOut={() => resetZoom(scaleAnimGoogle)}
          >
            <View style={styles.row}>
              <Image
                source={require("./assets/google.png")}
                style={styles.appIcon}
              />
              <Text style={styles.text2}>Login with Google</Text>
            </View>
          </Pressable>
        </Animated.View>

        {/* Facebook Button with Zoom Out Animation */}
        <Animated.View style={{ transform: [{ scale: scaleAnimFacebook }] }}>
          <Pressable
            style={styles.appButton}
            onPress={handleContinue}
            onPressIn={() => startZoomOut(scaleAnimFacebook)}
            onPressOut={() => resetZoom(scaleAnimFacebook)}
          >
            <View style={styles.row}>
              <Image
                source={require("./assets/facebook.png")}
                style={styles.appIcon}
              />
              <Text style={styles.text2}>Login with Facebook</Text>
            </View>
          </Pressable>
        </Animated.View>

        <StatusBar style="auto" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  icon: {
    width: 150,
    height: 130,
    marginBottom: 3,
  },
  logoText: {
    width: 230,
    height: 50,
    marginBottom: 10,
  },
  appIcon: {
    width: 20,
    height: 20,
    marginRight: 9,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "100%",
  },
  inputFocused: {
    borderColor: "#FF776D",
  },
  inputIcon: {
    width: 20,
    height: 23,
    marginRight: 10,
  },
  input: {
    height: 50,
    flex: 1,
  },
  gradientButton: {
    width: 226,
    height: 55,
    paddingVertical: 12,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  appButton: {
    marginTop: 15,
    backgroundColor: "white",
    width: 226,
    height: 55,
    paddingVertical: 12,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // Change this value to increase/decrease shadow intensity
    // iOS shadow
    shadowColor: "#000", // Color of the shadow
    shadowOffset: {
      width: 0, // Horizontal offset
      height: 2, // Vertical offset
    },
    shadowOpacity: 0.15, // Shadow opacity
    shadowRadius: 2, // Shadow blur radius
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  text2: {
    color: "#9D9898",
    fontSize: 16,
    fontWeight: "bold",
  },
  subheading: {
    color: "#9D9898",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-start", // Align text to the left
    width: "100%", // Make sure it takes the full width of the container
    marginBottom: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
