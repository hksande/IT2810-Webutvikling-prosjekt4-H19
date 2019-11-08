import { SET_SORT, SET_SEARCH, SET_FILTER } from "../constants/actionTypes";

/* Keeps track of active sorting, filtering and searchword */

const defaultState = {
  sort: null,
  searchString: null,
  filter: null
};

const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SORT:
      return { ...state, sort: action.payload.sort };
    case SET_SEARCH:
      return { ...state, searchString: action.payload.searchString };
    case SET_FILTER:
      return {
        ...state,
        typeFilter:
          action.payload.filter === undefined ? null : action.payload.filter
      };
    default:
      return state;
  }
};

export default filterReducer;
