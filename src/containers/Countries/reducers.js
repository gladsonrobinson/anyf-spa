import {
  SEARCH_SUCCESS,
  SET_FETCH_STATUS,
  SEARCH_FAILURE,
  CURRENCY_INPUT_VALUE_CHANGE
} from "./actions";

let initialState = {
  countryList: [],
  currencyInput: "",
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
      return {
        ...state,
        fetchStatus: true,
        countryList: [],
        errorMessage: "",
        currencyInput: ""
      };
    case SEARCH_FAILURE:
      return { ...state, fetchStatus: false, errorMessage: action.error };
    case CURRENCY_INPUT_VALUE_CHANGE:
      return { ...state, currencyInput: action.payload.value };
    default:
      return state;
  }
};
