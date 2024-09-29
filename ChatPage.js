import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Feather } from "@expo/vector-icons";

// search bar imports
import { SearchBar } from "react-native-elements";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export function ChatPage({ navigation, route }) {
  // search bar stuff
  const SwitchComponent = () => {
    const [search, setSearch] = useState(""); // State for search input

    const updateSearch = (search) => {
      setSearch(search);
    };

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
        <View style={styles.card}>
          <View style={styles.imagePlaceholder}>
            <View style={styles.neighbourhoodName}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Neighbourhood Name
              </Text>
            </View>
          </View>
          <Text style={styles.threadName}>Thread name</Text>
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

        <View style={styles.card}>
          <ImageBackground
            source={require("./assets/nstock1.jpg")}
            style={styles.imagePlaceholder}
          >
            <View style={styles.neighbourhoodName}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Neighbourhood Name
              </Text>
            </View>
          </ImageBackground>
          <Text style={styles.threadName}>Thread name</Text>
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

        <View style={styles.card}>
          <View style={styles.imagePlaceholder}>
            <View style={styles.neighbourhoodName}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Neighbourhood Name
              </Text>
            </View>
          </View>
          <Text style={styles.threadName}>Thread name</Text>
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

        <View style={styles.card}>
          <View style={styles.imagePlaceholder}>
            <View style={styles.neighbourhoodName}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Neighbourhood Name
              </Text>
            </View>
          </View>
          <Text style={styles.threadName}>Thread name</Text>
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
    height: "30%",
    borderRadius: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "darkgray",
  },
  imagePlaceholder: {
    width: "94%",
    height: "70%",
    backgroundColor: "lightgray",
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "darkgray",
  },
  neighbourhoodName: {
    borderRadius: 10,
    width: "50%",
    backgroundColor: "gray",
    justifyContent: "center",
    marginTop: 120,
    marginLeft: 8,
    padding: 5,
    color: "white",
  },
  threadName: {
    marginLeft: 10,
    marginTop: 5,
    fontWeight: "bold",
    marginLeft: 15,
  },
  threadLocation: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 5,
  },
});
