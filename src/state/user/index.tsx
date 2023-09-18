import * as TYPES from "./types";

const initialState = {
    user: {}
};

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TYPES.GET_USER:
            return {
                ...state,
                loading: true,
            };
        case TYPES.GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        case TYPES.GET_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
