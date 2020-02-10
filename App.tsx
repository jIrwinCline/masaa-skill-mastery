import React from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";
export default class App extends React.Component {
  state = {
    skill: "",
    hours: "",
    skills: []
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.skill}
          onChangeText={val => this.onChangeText("skill", val)}
          placeholder="What skill do you want to master?"
        />
        <TextInput
          style={styles.input}
          value={this.state.hours}
          onChangeText={val => this.onChangeText("hours", val)}
          placeholder="Current hours practicing that skill"
        />
        <Button
          onPress={() => alert("Success!")}
          title="Add to Master List"
          color="#eeaa55"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 50
  },
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: "blue",
    marginVertical: 10
  }
});

// import { StyleSheet, Text, View } from "react-native";

// import Login from "./screens/LoginScreen";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Login />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
