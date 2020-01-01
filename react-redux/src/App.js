import React from 'react';
import './App.css';
import CakeContiner from './components/CakeContiner';
import IceCreamContiner from './components/IceCreamContiner';

class App extends React.Component {

  state = {
    numOfCakes:10,
    numOfIceCream:10
  }

  buyCake= ()=>{
    this.setState({
      numOfCakes:this.state.numOfCakes-1
    })
  }

  buyIceCream= ()=>{
    this.setState({
      numOfIceCream:this.state.numOfIceCream-1
    })
  }

  render(){
    return (
      <>
      <CakeContiner numOfCakes={this.state.numOfCakes} buyCake={() => this.buyCake()} />
      <IceCreamContiner numOfIceCream={this.state.numOfIceCream} buyIceCream={() => this.buyIceCream()} />
      </>
    );
  }
}

export default App;
