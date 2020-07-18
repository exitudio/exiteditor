import { all } from "redux-saga/effects";
import { applicationSaga } from "./application/applicationSaga";

export default function* indexSaga() {
  yield all([applicationSaga()]);
}
