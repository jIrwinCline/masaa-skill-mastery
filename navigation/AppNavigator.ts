import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SkillDetailsScreen from "../screens/SkillDetailsScreen";
import AddSkillScreen from "../screens/AddSkillScreen";
import SkillsHomeScreen from "../screens/SkillsHomeScreen";

const AppNavigator = createStackNavigator({
  SkillsHome: SkillsHomeScreen,
  AddSkill: AddSkillScreen,
  SkillDetails: SkillDetailsScreen
});

export default createAppContainer(AppNavigator);
