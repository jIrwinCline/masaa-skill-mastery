import "react-native";
import React from "react";
import LoginScreen from "../screens/LoginScreen";

import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
  //   expect(true).toEqual(true);
});
