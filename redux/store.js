import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import skillsReducer from "./reducers/skillsReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  skills: skillsReducer
});

const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;
