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

export function SettingsPage({ navigation, route }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);

  // Animation references
  const scaleAnimSignUp = useRef(new Animated.Value(1)).current;
  const scaleBow = useRef(new Animated.Value(1)).current;
  const scaleHat = useRef(new Animated.Value(1)).current;
  const scaleHeadphones = useRef(new Animated.Value(1)).current;

  // State to handle bear image change
  const [bearImage, setBearImage] = useState(
    require("./assets/settings-images/bear.png")
  );

  const handleContinue = () => {
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
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const resetZoom = (animation) => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  // Function to change the bear image
  const handleImageChange = (image) => {
    setBearImage(image); // Update main image based on button pressed
  };

  return (
    <LinearGradient
      colors={["white", "white"]}
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        {/* Main Bear Image */}
        <Image source={bearImage} style={styles.bearImage} />

        {/* Buttons to Change the Bear Image */}
        <View style={styles.imageButtonContainer}>
          {/* Button 1 */}
          <Animated.View style={{ transform: [{ scale: scaleBow }] }}>
            <Pressable
              onPressIn={() => startZoomOut(scaleBow)}
              onPressOut={() => resetZoom(scaleBow)}
              style={styles.customButton}
              onPress={() =>
                handleImageChange(
                  require("./assets/settings-images/bearbow.png")
                )
              }
            >
              <Image
                source={require("./assets/settings-images/bow.png")}
                style={styles.bearImageSmall}
              />
            </Pressable>
          </Animated.View>

          {/* Button 2 */}
          <Animated.View style={{ transform: [{ scale: scaleHat }] }}>
            <Pressable
              onPressIn={() => startZoomOut(scaleHat)}
              onPressOut={() => resetZoom(scaleHat)}
              style={styles.customButton}
              onPress={() =>
                handleImageChange(
                  require("./assets/settings-images/bearhat.png")
                )
              }
            >
              <Image
                source={require("./assets/settings-images/hat.png")}
                style={styles.bearImageSmall}
              />
            </Pressable>
          </Animated.View>

          {/* Button 3 */}
          <Animated.View style={{ transform: [{ scale: scaleHeadphones }] }}>
            <Pressable
              onPressIn={() => startZoomOut(scaleHeadphones)}
              onPressOut={() => resetZoom(scaleHeadphones)}
              style={styles.customButton}
              onPress={() =>
                handleImageChange(
                  require("./assets/settings-images/bearheadphones.png")
                )
              }
            >
              <Image
                source={require("./assets/settings-images/headphones.png")}
                style={styles.bearImageSmall}
              />
            </Pressable>
          </Animated.View>
        </View>

        {/* Name Input */}
        <Text style={styles.subheading}>Name</Text>
        <View
          style={[
            styles.inputRow,
            focusedInput === "name" && styles.inputFocused,
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="Enter your name..."
            value={name}
            onFocus={() => handleFocus("name")}
            onBlur={handleBlur}
            onChangeText={setName}
          />
        </View>

        {/* Email Input */}
        <Text style={styles.subheading}>Email</Text>
        <View
          style={[
            styles.inputRow,
            focusedInput === "email" && styles.inputFocused,
          ]}
        >
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

        {/* Password Input */}
        <Text style={styles.subheading}>Password</Text>
        <View
          style={[
            styles.inputRow,
            focusedInput === "password" && styles.inputFocused,
          ]}
        >
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
              <Text style={styles.text}>SAVE CHANGES</Text>
            </LinearGradient>
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
  // Custom button with image styling
  customButton: {
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF776D",
    marginHorizontal: 10,
  },
  imageButtonContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  bearImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 1,
  },
  bearImageSmall: {
    width: 73,
    height: 73,
    resizeMode: "contain",
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
  subheading: {
    color: "#9D9898",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-start",
    width: "100%",
    marginBottom: 4,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
