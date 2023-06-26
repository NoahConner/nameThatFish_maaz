import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

export default function LoadingButton() {
  const [isLoading, setIsLoading] = useState(false);

  // This function will be triggered when the button is pressed
  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleLoading}>
        <View
          style={{
            ...styles.button,
            backgroundColor: isLoading ? "#4caf50" : "#8bc34a",
          }}
        >
          {isLoading && <ActivityIndicator size="large" color="yellow" />}
          <Text style={styles.buttonText}>
            {isLoading ? "Stop Loading" : "Start Loading"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

// Kindacode.com
// Just some styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 240,
    height: 70,
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20
  },
});