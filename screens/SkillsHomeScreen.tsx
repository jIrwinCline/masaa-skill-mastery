import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

//REDUX
import { connect } from "react-redux";
import { getSkills } from "../redux/actions/skillsActions";

const SkillsHomeScreen = props => {
  // const [currentSkills, setCurrentSkills] = useState([
  //   { title: "test", hours: "30" }
  // ]);
  const {
    skills: { skills }
  } = props;

  useEffect(() => {
    props.getSkills();
  }, []);

  let mapSkills = skills
    ? skills.map((skill, index) => (
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
      ))
    : null;
  return (
    <View style={styles.container}>
      {console.log(props)}
      {mapSkills}
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

const mapStateToProps = state => ({
  skills: state.skills
});

export default connect(mapStateToProps, { getSkills })(SkillsHomeScreen);
