export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";
export const SET_FETCH_STATUS = "SET_FETCH_STATUS";
export const GET_COUNTRY_DATA = "GET_COUNTRY_DATA";
export const CURRENCY_INPUT_VALUE_CHANGE = "CURRENCY_INPUT_VALUE_CHANGE";

export const getCountryDetailsByName = searchKey => {
  return {
    type: GET_COUNTRY_DATA,
    payload: {
      searchKey
    }
  };
};

export const onCurrencyValueChange = value => {
  return {
    type: CURRENCY_INPUT_VALUE_CHANGE,
    payload: {
      value
    }
  };
};

export const fetchStart = () => {
  return {
    type: SET_FETCH_STATUS
  };
};

export const searchSuccess = data => {
  return {
    type: SEARCH_SUCCESS,
    data
  };
};

export const searchFailure = error => {
  return {
    type: SEARCH_FAILURE,
    error
  };
};
