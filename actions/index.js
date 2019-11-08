import { SET_SORT, SET_SEARCH, SET_FILTER, SET_PAGE } from "./../constants/actionTypes";

export function setSort(payload) {
  return { type: SET_SORT, payload };
}

export function setSearch(payload) {
  return { type: SET_SEARCH, payload };
}

export function setFilter(payload) {
  return { type: SET_FILTER, payload };
}

export function setPage(payload) {
  return { type: SET_PAGE, payload };
}
