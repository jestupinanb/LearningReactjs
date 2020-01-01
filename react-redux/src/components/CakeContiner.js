import React from 'react'

function CakeContiner(props) {
    const numOfCakes = props.numOfCakes;
    return (
        <>
            <h2>Cakes Continer - {numOfCakes} </h2>
            <button onClick={() => props.buyCake()}>Buy Cake</button>
        </>
    )
}

export default CakeContiner
