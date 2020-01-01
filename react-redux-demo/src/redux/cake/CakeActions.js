import {BUY_CAKE, ADD_CAKE} from './CakeTypes'

export const buyCake = (number=1) =>{
    return{
        type:BUY_CAKE,
        payload:number
    }
}

export const addCake = () =>{
    return{
        type:ADD_CAKE
    }
}