import countriesRootSaga from "../containers/Countries/sagas";
import { fork, all } from "redux-saga/effects";

export default function* root() {
  yield all([fork(countriesRootSaga)]);
}
