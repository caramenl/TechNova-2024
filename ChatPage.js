import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements";

export function ChatPage({ navigation, route }) {
  const SwitchComponent = () => {
    const [search, setSearch] = useState(""); // State for search input

    const updateSearch = (search) => {
      setSearch(search);
    };

    // Array of image sources for each card
    const images = [
      require("./assets/nstock1.jpg"),
      require("./assets/nstock2.jpg"),
      require("./assets/nstock3.jpg"),
    ];

    // Array of neighborhood names
    const neighborhoods = ["Summerdale", "Urban Heights", "Midtown"];

    // Array of thread names
    const threadNames = [
      "Park Trails",
      "Recent Incidents",
      "Local Farmers Market",
    ];

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>COMMUNITY THREADS</Text>
        <StatusBar style="auto" />
        <SearchBar
          placeholder="Search"
          onChangeText={updateSearch}
          value={search}
          containerStyle={styles.searchBar}
          inputContainerStyle={styles.searchBarInput}
        />

        {/* Card Component */}
        {images.map((image, index) => (
          <View style={styles.card} key={index}>
            <ImageBackground
              source={image}
              style={styles.imagePlaceholder}
              imageStyle={styles.imageStyle}
              resizeMode="cover" // Ensures the image covers the area
            >
              <View style={styles.neighbourhoodName}>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  {neighborhoods[index]}
                </Text>
              </View>
            </ImageBackground>
            <Text style={styles.threadName}>{threadNames[index]}</Text>
            <View style={styles.threadLocation}>
              <Feather
                name="map-pin"
                color="gray"
                size={20}
                style={{ marginRight: 5 }}
              />
              <Text style={{ color: "gray" }}>~street/intersection</Text>
            </View>
          </View>
        ))}
      </View>
    );
  };

  return <SwitchComponent />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  titleText: {
    marginTop: 80,
    fontSize: 25,
    fontWeight: "bold",
  },
  searchBar: {
    backgroundColor: "transparent",
    width: "90%",
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  searchBarInput: {
    backgroundColor: "lightgray",
    borderRadius: 20,
  },
  card: {
    width: "90%",
    borderRadius: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "darkgray",
    overflow: "hidden", // Ensures child components do not overflow the card
  },
  imagePlaceholder: {
    width: "100%",
    height: 150, // Set a fixed height for better control
    backgroundColor: "lightgray",
  },
  imageStyle: {
    borderRadius: 20,
  },
  neighbourhoodName: {
    borderRadius: 10,
    width: "40%",
    backgroundColor: "gray",
    justifyContent: "center",
    position: "absolute",
    bottom: 10, // Position it at the bottom of the image
    left: 10,
    padding: 5,
  },
  threadName: {
    marginLeft: 15,
    marginTop: 5,
    fontWeight: "bold",
  },
  threadLocation: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 10,
  },
});
