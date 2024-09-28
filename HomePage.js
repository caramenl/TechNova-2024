// general imports
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

// weather api key
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${"Waterloo"}&appid=${"2c6176f039f6085d58c0103be44967c9"}&units=metric`;

export function HomePage() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    axios.get(URL).then((response) => {
      const temp = response.data.main.temp;
      const roundedTemp = Math.round(temp);
      setTemperature(roundedTemp);
    });
  }, []);
  return (
    <ImageBackground
      source={require("./assets/bg-images/pink-bg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <Text style={styles.goodMorningText}>GOOD MORNING</Text>
      <Text style={styles.userNameText}>user name</Text>
      <Text>{temperature}ºC</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  goodMorningText: {
    fontWeight: "bold",
    fontSize: "35",
    marginTop: 150,
  },
  userNameText: {
    fontSize: 30,
  },
});
