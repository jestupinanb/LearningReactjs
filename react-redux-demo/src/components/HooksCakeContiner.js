import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake, addCake } from '../redux';

function HooksCakeContiner() {
    const numberOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of cakes -
                {numberOfCakes}
            </h2>
            <button onClick={() =>dispatch(buyCake())} >Buy a cake</button>
            <button onClick={() => dispatch(addCake())} >Add a cake</button>
        </div>
    )
}

export default HooksCakeContiner