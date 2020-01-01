import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST } from "./usersTypes"

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                error: '',
                loading: false
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                users: [],
                error: action.payload,
                loading: false,
            }
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        default: return state
    }
}

export default usersReducer