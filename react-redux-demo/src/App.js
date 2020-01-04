import React,{useState} from 'react';
import { Provider } from 'react-redux'
import './App.css';
import CakeContiner from './components/CakeContiner';
import store from './redux/store';
import HooksCakeContiner from './components/HooksCakeContiner';
import IceCreamContiner from './components/IceCreamContiner';
import NewCakeContiner from './components/NewCakeContiner';
import ItemContiner from './components/ItemContiner';
import UserContiner from './components/UserContiner';
import ShowUsersContiner from './components/ShowUsersContiner';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <div className="App">
        <UserContiner />
        <ItemContiner cake />
        <ItemContiner />
        <CakeContiner />
        <HooksCakeContiner />
        <IceCreamContiner />
        <NewCakeContiner />
        <ShowUsersContiner setCount={(val) =>setCount(val)} count={count} />
      </div>
    </Provider>
  );
}

export default App;