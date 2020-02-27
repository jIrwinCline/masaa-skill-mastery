import { SET_SKILLS, SET_SKILL } from "../types";

//AWS
import Amplify from "@aws-amplify/core";
import config from "../../aws-exports";
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

export const getSkills = () => dispatch => {
  async function fetchData() {
    try {
      const skills = await API.graphql(graphqlOperation(ListSkills));
      //   console.log("skills: ", skills);
      await dispatch({
        type: SET_SKILLS,
        payload: skills.data.listSkills.items
      });
      //   this.setState({ skills: skills.data.listSkills.items });
    } catch (err) {
      console.log("error: ", err);
    }
  }
};
