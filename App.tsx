import React, { useEffect, useState } from "react";
import { getSnapshot, destroy, onSnapshot } from "mobx-state-tree";
import { connectReduxDevtools } from "mst-middlewares";

import { StyleSheet, Text, View } from "react-native";

import Login from "./screens/LoginScreen";
import AddSkillScreen from "./screens/AddSkillScreen";
import SkillsHomeScreen from "./screens/SkillsHomeScreen";

import { Provider } from "mobx-react";
import RootStore from "./models/root-store/root-store";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  // const [rootStore, setRootStore] = useState(0);
  // console.log(`what's the rootStore: ${rootStore}`);
  // useEffect(() => {
  //   async function setupRootStore() {
  //     try {
  //       console.log("hello?");

  //       rootStore = await RootStore.create({});
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // }, []);

  // console.log(`what's the rootStore: ${1}`);
  // if (!rootStore) {
  //   return null;
  // }

  return (
    <View style={styles.container}>
      <Provider style={styles.container} store={RootStore}>
        <AppNavigator />
      </Provider>
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
