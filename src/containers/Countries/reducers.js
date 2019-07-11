import { SEARCH_SUCCESS, SET_FETCH_STATUS, SEARCH_FAILURE } from "./actions";

let initialState = {
  countryList: [],
  errorMessage: "",
  fetchStatus: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        fetchStatus: false,
        countryList: action.data,
        errorMessage: ""
      };
    case SET_FETCH_STATUS:
      return { ...state, fetchStatus: true, countryList: [], errorMessage: "" };
    case SEARCH_FAILURE:
      return { ...state, fetchStatus: false, errorMessage: action.error };
    default:
      return state;
  }
};
