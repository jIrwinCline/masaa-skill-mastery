import React from "react";
import { StyleSheet, Text, View } from "react-native";

//PROVIDER
import { Provider } from "react-redux";
import store from "./redux/store";

import Login from "./screens/LoginScreen";
import AddSkillScreen from "./screens/AddSkillScreen";
import SkillsHomeScreen from "./screens/SkillsHomeScreen";

import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center"
  }
});
