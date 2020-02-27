import { SET_SKILLS, SET_SKILL } from "../types";

const initialState = {
  skills: [],
  skill: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SKILLS:
      return {
        ...state,
        skills: action.payload
      };
    case SET_SKILL:
      return {
        ...state,
        skill: action.payload
      };
    default:
      return state;
  }
}
