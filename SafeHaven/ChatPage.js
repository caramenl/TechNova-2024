import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

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
            <View style={styles.neighbourhoodNameText}>
              <Text>N</Text>
            </View>
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
    height: "75%",
    backgroundColor: "lightgray",
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "darkgray",
  },
  neighbourhoodNameText: {
    borderRadius: 20,
    width: "40%",
    backgroundColor: "darkgray",
    justifyContent: "center",
    marginTop: 130,
    marginLeft: 13,
    padding: 5,
  },
});
