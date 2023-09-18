import { takeLatest } from "redux-saga/effects";
import { getUserSaga } from "./user/getUser";
import { GET_USER } from "./user/types";

export function* watcherSaga() {
	yield takeLatest(GET_USER, getUserSaga);
}
