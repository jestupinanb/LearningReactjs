import React from 'react';
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContiner(props) {
  console.log("CakeContiner")
  return (
    <>
      <h2>Number of cakes -{props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy a cake</button>
    </>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContiner);