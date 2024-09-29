import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

// Weather API key and URL
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${"Waterloo"}&appid=${"2c6176f039f6085d58c0103be44967c9"}&units=metric`;

export function HomePage({ route }) {
  const userName = route.params?.userName || "Guest";
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    axios.get(URL).then((response) => {
      const temp = response.data.main.temp;
      const roundedTemp = Math.round(temp);
      setTemperature(roundedTemp);
    });
  }, []);

  // const currentHour = new Date().getHours();

  //   // Determine the current hour and set background accordingly
  //   const currentHour = new Date().getHours();
  //   if (currentHour >= 5 && currentHour < 12) {
  //     setBackgroundImage(require("./assets/bg-images/morning-bg.png"));
  //   } else if (currentHour >= 12 && currentHour < 19) {
  //     setBackgroundImage(require("./assets/bg-images/afternoon-bg.png"));
  //   } else if (currentHour >= 19 || currentHour < 5) {
  //     setBackgroundImage(require("./assets/bg-images/evening-bg.png"));
  //   }
  // }, [])

  return (
    <ImageBackground
      source={require("./assets/sunset2.png")} // Background Image
      resizeMode="cover"
      style={styles.background}
    >
      {/* Pink Part Overlay */}
      <View style={styles.pinkPartContainer}>
        <Image
          source={require("./assets/pinkPart.png")} // Pink part image
          style={styles.overlayImage}
        />
      </View>

      {/* White Part Overlay */}
      <View style={styles.whitePartContainer}>
        <Image
          source={require("./assets/pinkPart.png")} // White part image
          style={styles.whitePartStyle}
        />
      </View>

      {/* Adding the "GOOD MORNING" text */}
      <View style={styles.textContainer}>
        <Image
          source={require("./assets/goodmorning.png")} // Good morning image
          style={styles.imageTextStyle}
        />
      </View>

      <Text style={styles.userNameText}>{userName.toUpperCase()}</Text>

      {/* Image Below the Username */}
      <Image
        source={require("./assets/bear.png")} // Replace with your image path
        style={styles.customButton}
      />
      <View style={styles.messageTextContainer}>
        <Text style={styles.messageText}>"Where are we going next?"</Text>
      </View>
      <View style={styles.infoCardContainer}>
        <Text style={styles.infoCardText}>POPULAR ROUTES</Text>
      </View>
      <View style={styles.infoCardContainer}>
        <Text style={styles.infoCardText}>WEATHER WATCH</Text>
        <View style={styles.weatherContainer}>
          <Text style={styles.overlayText}>{temperature}ºC</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center", // Centering items vertically
  },
  userNameText: {
    fontSize: 30,
    marginTop: 3, // Adjusted for spacing
    zIndex: 3, // Ensure username text is in front
    color: "gray",
    fontWeight: "bold",
    marginBottom: -20,
  },
  messageText: {
    fontSize: 20,
    // marginTop: 10, // Adjusted for spacing
    zIndex: 3, // Ensure username text is in front
    color: "white",
    fontWeight: "bold",
    fontStyle: "italic",
    padding: 5,
  },
  messageTextContainer: {
    backgroundColor: "#FF91A2",
    marginTop: 10,
    borderRadius: 20,
    padding: 5,
    borderWidth: "2",
    borderColor: "white",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 50, // Adjusted margin for vertical spacing
    zIndex: 2, // Ensure text container is in fronta
  },
  imageTextStyle: {
    width: 350, // Set width as per your image size
    height: 58, // Set height as per your image size
    marginTop: 120,
  },
  customButton: {
    width: 126,
    height: 126,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 10,
    marginTop: 30,
  },
  profileImageStyle: {
    width: 100, // Adjust width based on your profile image size
    height: 100, // Adjust height based on your profile image size
    borderRadius: 50, // For circular image
    marginTop: 10, // Adjust spacing between username and image
    zIndex: 3, // Ensure the profile image is in front
  },
  pinkPartContainer: {
    left: 0,
    right: 0,
    marginTop: -100,
    alignItems: "center",
    zIndex: 1, // Ensure it is behind other components
    opacity: 0.5,
  },
  whitePartContainer: {
    top: 80, // Adjust based on your layout
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 2, // Ensure it is behind text but in front of pink part
  },
  whitePartStyle: {
    width: 350, // Set width based on your image size
    height: 100, // Set height based on your white part image
    marginTop: -5, // Adjust to create a seamless look
  },
  weatherContainer: {
    alignItems: "center",
    marginTop: 40, // Adjust to align below other elements
    zIndex: 4, // Ensure temperature is in front
  },
  overlayText: {
    color: "white", // Adjust based on the image background
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 10,
  },
  overlayImage: {
    position: "absolute",
    marginTop: -180,
    opacity: 0.5,
  },
  infoCardContainer: {
    width: "90%",
    height: "20%",
    backgroundColor: "white",
    opacity: 0.5,
    borderRadius: 20,
    marginTop: 15,
    padding: 15,
  },
  infoCardText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
