import { DATA_FROM_API, SET_FILTER_DATA, SET_SEARCH_TERM } from "./actionType";

const initialState = {
  data: [],
  searchTerm: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_FROM_API:
      return {
        ...state,
        data: [...state.data, ...action.payload],
      };

    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case SET_FILTER_DATA:
      console.log(action);

      return {
        ...state,
        filterData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
