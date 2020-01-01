import { BUY_CAKE, ADD_CAKE } from "./CakeTypes"

const InitialState = {
    numOfCakes:10
}

const cakeReducer = (state = InitialState,action) =>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,numOfCakes:state.numOfCakes-action.payload
        }
        case ADD_CAKE:return{
            ...state,numOfCakes:state.numOfCakes+1
        }
        default:return state
    }
}

export default cakeReducer