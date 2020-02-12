import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { observer, inject } from "mobx-react";
//AWS
import Amplify from "@aws-amplify/core";
import config from "../aws-exports";
import API, { graphqlOperation } from "@aws-amplify/api";

Amplify.configure(config);

const ListSkills = `
    query {
      listSkills {
        items {
          id title hours
        }
      }
    }
    `;

/**
    inject("skillStore")(
  observer(({ skillStore, ...props }) => 
     */
const SkillsHomeScreen = () => {
  const [currentSkills, setCurrentSkills] = useState([
    { title: "test", hours: "30" }
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const skills = await API.graphql(graphqlOperation(ListSkills));
        console.log("skills: ", skills);
        this.setState({ skills: skills.data.listSkills.items });
      } catch (err) {
        console.log("error: ", err);
      }
    }
  }, []);

  return (
    <View style={styles.container}>
      {currentSkills.map((skill, index) => (
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate({ routeName: "SkillDetails" });
          }}
          key={index}
          style={styles.skill}
        >
          <Text style={styles.title}>{skill.title}</Text>
          <Text style={styles.hours}>{skill.hours}</Text>
        </TouchableOpacity>
      ))}
      <Button
        title="Add a New Skill"
        onPress={() => {
          props.navigation.navigate({ routeName: "AddSkill" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 50
  },
  skill: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 10
  },
  title: { fontSize: 16 },
  hours: { color: "rgba(0, 0, 0, .5)" }
});

export default SkillsHomeScreen;
