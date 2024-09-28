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

// Settings colour of times of day
// const currentHour = new Date().getHours();
currentHour = 12;

function MyTabs() {
  let activeTintColor;
  if (currentHour >= 5 && currentHour < 12) {
    activeTintColor = "#FC7F92";
  } else if (currentHour >= 12 && currentHour < 18) {
    activeTintColor = "#8EF4E4";
  } else if (currentHour >= 19 && currentHour < 23) {
    activeTintColor = "#AAB1F5";
  }
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: activeTintColor, // Set active tab color to maroon
      }}
    >
      <Tab.Screen
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
              Eco
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="earth" color={color} size={30} />
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
      <Stack.Navigator>
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
