import networkClient from "../networkClient";
import * as ENDPOINTS from "./endPoints";

export const getUserAPI = (payload) => {
    const headers = { token: payload.token };
    return networkClient(headers).request({
        method: "GET",
        url: ENDPOINTS.GET_USER_URL.replace("{userid}", payload.userId)
    });
};
