import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

export function EcoPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (message.trim()) {
      // Add user message to the messages array
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: "User" },
      ]);

      try {
        // Send the user message to the Flask server
        const response = await fetch("http://10.37.2.143:5000/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }), // Send the user message in the request body
        });

        const data = await response.json();
        // Check if response is valid
        if (data.response) {
          // Add bot response to the messages array
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: data.response, sender: "Bot" },
          ]);
        } else {
          console.error("No response from server");
        }
      } catch (error) {
        console.error("Error:", error);
      }

      setMessage("");
    }
  };

  return (
    <ImageBackground
      source={require("./assets/bg-images/pink-bg.png")}
      style={styles.background}
    >
      <StatusBar style="auto" />
      <Text style={styles.title}>ChatBot</Text>
      <ScrollView style={styles.chatContainer}>
        {/* Display messages */}
        {messages.map((msg, index) => (
          <Text
            key={index}
            style={
              msg.sender === "User" ? styles.userMessage : styles.botMessage
            }
          >
            {msg.sender}: {msg.text}
          </Text>
        ))}
      </ScrollView>
      <TextInput
        style={styles.input}
        placeholder="Type your message..."
        value={message}
        onChangeText={setMessage}
      />
      <Pressable style={styles.button} onPress={sendMessage}>
        <Text style={styles.buttonText}>Send</Text>
      </Pressable>
      {/* Navigation Bar */}
      <View style={styles.navigationBar}>
        <MaterialIcons name="home" size={24} color="black" />
        <Ionicons name="chatbubble-outline" size={24} color="black" />
        <MaterialIcons name="settings" size={24} color="black" />
      </View>
    </ImageBackground>
  );
}

// Styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  chatContainer: {
    width: "100%",
    flex: 1,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    maxWidth: "70%",
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#e0e0e0",
    color: "#000",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    maxWidth: "70%",
  },
  input: {
    width: "100%",
    padding: 10,
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
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
});

export default EcoPage;
