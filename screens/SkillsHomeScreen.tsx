import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

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
    <View>
      {currentSkills.map((skill, index) => (
        <View key={index} style={styles.skill}>
          <Text style={styles.title}>{skill.title}</Text>
          <Text style={styles.hours}>{skill.hours}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  skill: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 10
  },
  title: { fontSize: 16 },
  hours: { color: "rgba(0, 0, 0, .5)" }
});

export default SkillsHomeScreen;
