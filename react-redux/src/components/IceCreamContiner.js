import React from 'react'

function IceCreamContiner(props) {
    const numOfIceCream = props.numOfIceCream;
    return (
        <div>
            <h2>IceCream Continer - {numOfIceCream} </h2>
            <button onClick={() => props.buyIceCream()}>Buy IceCream</button>
        </div>
    )
}

export default IceCreamContiner
