import { REQUEST_SEARCH, REQUEST_SEARCH_SUCCESS, REQUEST_SEARCH_FAILED } from "../actions/types";


export const INITIAL_STATE = {
    data: undefined,
    isFetching: false,
    error: false
}

export const request = (state, action) => {
    return {
        data: undefined,
        isFetching: true,
        error: false
    }
}

export const success = (state, action) => {
    return {
        data: action.data,
        isFetching: false,
        error: false
    }
}

export const failed = (state, action) => {
    return {
        data: action.errData,
        isFetching: false,
        error: true
    }
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_SEARCH:
            return request(state, action)
        case REQUEST_SEARCH_SUCCESS:
            return success(state, action)
        case REQUEST_SEARCH_FAILED:
            return failed(state, action)
        default:
            return state
    }
}