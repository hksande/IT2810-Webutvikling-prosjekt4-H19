import {
    SET_SORT,
    SET_SEARCH,
    SET_FILTER
  } from "../constants/actionTypes";
  
  
  export function setSort(payload) {
    return { type: SET_ORDER_BY, payload };
  }
  
  export function setSearch(payload) {
    return { type: SET_SEARCH, payload };
  }
  
  export function setFilter(payload) {
    return { type: SET_TYPE_FILTER, payload };
  }
  