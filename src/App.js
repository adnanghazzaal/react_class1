import React from 'react';

import './App.css';
import Hello from "./hello.js"

function App({name , age}) { 
  return <div>
    Hello from my name is <strong>{name}</strong>and my age is {age}
    <br></br>
   <Hello firstname={name}></Hello>
   <br></br>
    Stay home and Stay safe .
  </div>
}

export default App;
