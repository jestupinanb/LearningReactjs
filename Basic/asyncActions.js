const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const createStore = redux.createStore
const applyMiddleWare = redux.applyMiddleware
const axios = require('axios')

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload:users
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

const fetchUsers = () => {
    return async (dispatch)=>{
        try {
            dispatch(fetchUsersRequest())
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch(fetchUsersSuccess(response.data.map(user => user.id)))
        } catch (error) {
            dispatch(fetchUsersFailure(error.message))
        }
    }
}

const store = createStore(reducer, applyMiddleWare(thunkMiddleware))

store.subscribe(
    () => {
        console.log(store.getState())
    }
)

store.dispatch(fetchUsers())

