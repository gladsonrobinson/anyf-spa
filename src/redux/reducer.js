import { combineReducers } from "redux";
import CountryReducers from "../containers/Countries/reducers";

const AppReducer = combineReducers({
  country: CountryReducers
});

export default AppReducer;
