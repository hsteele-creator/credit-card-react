import './App.css';
import React from 'react';
import {useSelector} from "react-redux"

function App() {

const store = useSelector(store => store.Data)
console.log(store)

  return (
    <div className="App">
      <h1>Testing</h1>
    </div>
  );
}

export default App;
