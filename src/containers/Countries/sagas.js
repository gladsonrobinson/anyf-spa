import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import { api, utility, constant } from "../../services";

function* getCountryDetails(action) {
  try {
    yield put(actions.fetchStart());
    const countryData = yield call(api.fetchCountry, action.payload.searchKey);

    const currency = countryData.map(item => item.currencies[0].code);
    currency.push(constant.BASE_CURRENCY_SYMBOL);
    const currencyData = yield call(api.fetchCurrency, currency);
    const formatedFinalData = utility.formatCountryCurrencyData(
      countryData,
      currencyData.rates,
      constant.BASE_CURRENCY_SYMBOL
    );
    yield put(actions.searchSuccess(formatedFinalData));
  } catch (error) {
    yield put(actions.searchFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeLatest(actions.GET_COUNTRY_DATA, getCountryDetails);
}
