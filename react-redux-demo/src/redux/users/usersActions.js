import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST } from "./usersTypes"
import axios from 'axios'

export const userSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const usersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const usersRequest = error => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch(usersRequest)
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            const users = response.data
            dispatch(userSuccess(users))
        } catch (error) {
            const errorMsg = error.message
            dispatch(usersFailure(errorMsg))
        }
    }
}