import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

import { getSkills } from "../redux/actions/skillsActions.js";

const SkillsHomeScreen = props => {
  const [currentSkills, setCurrentSkills] = useState([
    { title: "test", hours: "30" }
  ]);

  useEffect(() => {
    getSkills();
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
        onPress={() => props.navigation.navigate("AddSkill")}
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
