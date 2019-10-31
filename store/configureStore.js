import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import logger from "redux-logger";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// the Redux store is like a brain: it’s in charge for orchestrating all the moving parts in Redux
// the state of the application lives as a single, immutable object within the store:

const store = createStore(rootReducer, storeEnhancers(applyMiddleware(logger)));

// as soon as the store receives an action it triggers a reducer
// the reducer returns the next state

export default store;
