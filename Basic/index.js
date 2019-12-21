const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleWare = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'


function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
    }
}

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numIceCream: 20
}

const cake = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state;
    }
}

const iceCream = (state = initialIceCreamState, action) => {
    switch (action.type) { 
        case BUY_ICECREAM: return {
            ...state,
            numIceCream: state.numIceCream - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake:cake,
    iceCream:iceCream
})


const store = createStore(rootReducer,applyMiddleWare(logger))
console.log('Initial state',store.getState())
const unsuscribe =  store.subscribe(()=> {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake()) 
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsuscribe()
