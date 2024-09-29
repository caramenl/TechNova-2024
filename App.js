// general imports
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";

// screens
import { SignInPage } from "./SignInPage";
import { HomePage } from "./HomePage";
import { EcoPage } from "./EcoPage";
import { MapPage } from "./MapPage";
import { ChatPage } from "./ChatPage";
import { SettingsPage } from "./SettingsPage";

// navigation stuff
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// settings colour of times of day
const currentHour = new Date().getHours();
console.log(currentHour);

function MyTabs({ route }) {
  // updates nav bar colours according to time of day
  let activeTintColor;
  if (currentHour >= 5 && currentHour < 12) {
    // 5 AM - 11:59 PM (Morning)
    activeTintColor = "#FC7F92";
  } else if (currentHour >= 12 && currentHour < 17) {
    // 12 PM - 4:59 PM (Afternoon)
    activeTintColor = "pink";
  } else if (currentHour >= 19 && currentHour < 5) {
    // 5 PM - 4:59 AM (Night)
    activeTintColor = "#AAB1F5";
  }

  const userName = route.params?.userName || "Guest";

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: activeTintColor, // Set active tab color to maroon
      }}
    >
      <Tab.Screen
        initialParams={{ userName }}
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontWeight: "bold", fontSize: 12 }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-variant"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="EcoPage"
        component={EcoPage}
        options={{
          headerShown: false,
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontWeight: "bold", fontSize: 12 }}>
              Techie
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="teddy-bear" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="MapPage"
        component={MapPage}
        options={{
          headerShown: false,
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontWeight: "bold", fontSize: 12 }}>
              Map
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="ChatPage"
        component={ChatPage}
        options={{
          headerShown: false,
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontWeight: "bold", fontSize: 12 }}>
              Chat
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="chat" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsPage"
        component={SettingsPage}
        options={{
          headerShown: false,
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontWeight: "bold", fontSize: 12 }}>
              Settings
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInPage">
        <Stack.Screen
          name="SignInPage"
          component={SignInPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabScreen"
          component={MyTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
