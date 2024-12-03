import { DATA_FROM_API, SET_FILTER_DATA, SET_SEARCH_TERM } from "./actionType";

export const dataFromApi = (data) => {
  return {
    type: DATA_FROM_API,
    payload: data,
  };
};

export const setSearchTerm = (data) => {
  return {
    type: SET_SEARCH_TERM,
    payload: data,
  };
};

export const setFilterData = (data) => {
  return {
    type: SET_FILTER_DATA,
    payload: data,
  };
};
