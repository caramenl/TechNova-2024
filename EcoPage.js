// general imports
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";

// for nav bar icons
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export function EcoPage() {
  //   return (
  //     <ImageBackground
  //       source={require("./assets/bg-images/pink-bg.png")}
  //       style={styles.background}
  //     >
  //       {/* Navigation Bar */}
  //       <Text style={styles.text}>ECO</Text>
  //     </ImageBackground>
  //   );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    alignItems: "center",
  },
  navigationBar: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    bottom: 0,
    backgroundColor: "white",
    borderRadius: 30,
    width: "120%",
    height: "12%",
    flexDirection: "row",
    paddingHorizontal: 50,
    justifyContent: "space-around",
  },
  pageIcons: {},
  marginHorizontal: 20,
});
