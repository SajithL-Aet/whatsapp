import { call, put } from "redux-saga/effects";
import { getUserAPI } from "../../services/api/user/userService";

import * as TYPES from "./types";

//Action(s)
export const getUser = (payload) => ({
    type: TYPES.GET_USER,
    payload
});

export const getUserSuccess = (payload) => ({
    type: TYPES.GET_USER_SUCCESS,
    payload
});

export const getUserError = (error) => ({
    type: TYPES.GET_USER_ERROR,
    payload: { error }
});

//Saga(s)
export function* getUserSaga({ payload }) {
    try {
        const response = yield call(getUserAPI, payload);
        if (response.status === 200) {
            yield put(getUserSuccess(response.data));
        }
    } catch (error) {
        yield put(getUserError(error));
    }
}
