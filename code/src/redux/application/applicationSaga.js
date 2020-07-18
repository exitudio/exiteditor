import { takeEvery } from "redux-saga/effects";
import { PREVIEW_IMAGE } from "../actionTypes";

function* preview() {
}

export function* applicationSaga() {
  yield takeEvery(PREVIEW_IMAGE, preview);
}
