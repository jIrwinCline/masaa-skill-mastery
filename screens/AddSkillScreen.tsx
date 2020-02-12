import React, { useState, useEffect } from "react";
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
import config from "../aws-exports";
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

const AddSkillScreen = props => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentHours, setCurrentHours] = useState("");
  const [currentSkills, setCurrentSkills] = useState([]);

  const addSkill = async () => {
    if (currentTitle === "" || currentHours === "") return;
    const skill = { title: currentTitle, hours: currentHours };
    try {
      const skills = [...currentSkills, skill];
      setCurrentHours("");
      setCurrentTitle("");
      setCurrentSkills(skills);
      //   this.setState({ skills, title: "", hours: "" });
      await API.graphql(graphqlOperation(AddSkill, skill));
      console.log("success");
    } catch (err) {
      console.log("error: ", err);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const skills = await API.graphql(graphqlOperation(ListSkills));
        console.log("skills: ", skills);
        this.setState({ skills: currentSkills.data.listSkills.items });
      } catch (err) {
        console.log("error: ", err);
      }
    }
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {/* <View> */}
        <Text>Add A Skill</Text>
        <TextInput
          style={styles.input}
          value={currentTitle}
          onChangeText={val => setCurrentTitle(val)}
          placeholder="What skill do you want to master?"
        />
        <TextInput
          style={styles.input}
          value={currentHours}
          onChangeText={val => setCurrentHours(val)}
          placeholder="Current hours practicing that skill"
        />
        <Button onPress={addSkill} title="Add to Master List" color="#eeaa55" />
        {currentSkills.map((skill, index) => (
          <View key={index} style={styles.skill}>
            <Text style={styles.title}>{skill.title}</Text>
            <Text style={styles.hours}>{skill.hours}</Text>
          </View>
        ))}
        {/* </View> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

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

export default AddSkillScreen;
