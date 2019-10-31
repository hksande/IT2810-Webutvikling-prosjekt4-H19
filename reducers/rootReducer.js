import { combineReducers } from "redux";
import filterReducer from "./filterReducer";

// Main reducer:

const rootReducer = combineReducers({
  filter: filterReducer
});

export default rootReducer;
