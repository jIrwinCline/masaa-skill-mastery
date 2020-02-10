import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
//AWS
import Amplify from "@aws-amplify/core";
import config from "./aws-exports";
import API, { graphqlOperation } from "@aws-amplify/api";

Amplify.configure(config);

const AddSkill = `
    mutation ($title: String! $hours: String!) {
      createSkill(input: {
        title: $title
        hours: $hours
      }) {
        id title hours
      }
    }
    `;

const ListSkills = `
    query {
      listSkills {
        items {
          id title hours
        }
      }
    }
    `;

export default class App extends React.Component {
  state = {
    title: "",
    hours: "",
    skills: []
  };

  addSkill = async () => {
    console.log("this");
    if (this.state.title === "" || this.state.hours === "") return;
    const skill = { title: this.state.title, hours: this.state.hours };
    try {
      const skills = [...this.state.skills, skill];
      this.setState({ skills, title: "", hours: "" });
      await API.graphql(graphqlOperation(AddSkill, skill));
      console.log("success");
    } catch (err) {
      console.log("error: ", err);
    }
  };

  async componentDidMount() {
    try {
      const skills = await API.graphql(graphqlOperation(ListSkills));
      console.log("skills: ", skills);
      this.setState({ skills: skills.data.listSkills.items });
    } catch (err) {
      console.log("error: ", err);
    }
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            value={this.state.skill}
            onChangeText={val => this.onChangeText("title", val)}
            placeholder="What skill do you want to master?"
          />
          <TextInput
            style={styles.input}
            value={this.state.hours}
            onChangeText={val => this.onChangeText("hours", val)}
            placeholder="Current hours practicing that skill"
          />
          <Button
            onPress={this.addSkill}
            title="Add to Master List"
            color="#eeaa55"
          />
          {this.state.skills.map((skill, index) => (
            <View key={index} style={styles.skill}>
              <Text style={styles.title}>{skill.title}</Text>
              <Text style={styles.hours}>{skill.hours}</Text>
            </View>
          ))}
        </View>
      </TouchableWithoutFeedback>
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
  },
  skill: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 10
  },
  title: { fontSize: 16 },
  hours: { color: "rgba(0, 0, 0, .5)" }
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
