import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import paginationReducer from "./paginationReducer";

// Main reducer:

const rootReducer = combineReducers({
  filter: filterReducer,
  pagination: paginationReducer
});

export default rootReducer;
