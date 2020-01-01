import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import CakeContiner from './components/CakeContiner';
import store from './redux/store';
import HooksCakeContiner from './components/HooksCakeContiner';
import IceCreamContiner from './components/IceCreamContiner';
import NewCakeContiner from './components/NewCakeContiner';
import ItemContiner from './components/ItemContiner';
import UserContiner from './components/UserContiner';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContiner />
        <ItemContiner cake/>
        <ItemContiner />
        <CakeContiner />
        <HooksCakeContiner/>
        <IceCreamContiner/>
        <NewCakeContiner/>
      </div>
    </Provider>
  );
}

export default App;