// general imports
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export function ChatPage({ navigation, route }) {
  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <Text style={styles.text}>Chat</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
