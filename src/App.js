import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./hello.js"

function App({name , age}) { 
  return <div>
    Hello from my name is <strong>{name}</strong>and my age is {age}
    <br></br>
   <Hello firstname={name}></Hello>
  </div>
}

export default App;
