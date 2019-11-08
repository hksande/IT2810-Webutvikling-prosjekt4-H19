import { SET_PAGE } from "../constants/actionTypes";

/* Keeps track of "page" in productsList. Used to implement infinite scroll */

const defaultState = {
  page: 1
};

const paginationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return action.payload.change === 0
        ? defaultState
        : { ...state, page: state.page + action.payload.change };
    default:
      return state;
  }
};

export default paginationReducer;
