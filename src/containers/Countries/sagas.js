import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import { api } from "../../services";

function* getCountryDetails(action) {
  try {
    yield put(actions.fetchStart());
    const data = yield call(api.fetchCountry, action.payload.searchKey);
    yield put(actions.searchSuccess(data));
  } catch (error) {
    yield put(actions.searchFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeLatest(actions.GET_COUNTRY_DATA, getCountryDetails);
}
