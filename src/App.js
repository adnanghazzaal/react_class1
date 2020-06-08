import React from 'react';
import Food from './food.js'
import './App.css';
import Hello from "./hello.js"

function App({name , age}) { 
  return (<div>
    Hello from my name is <strong>{name}</strong>and my age is {age}
    <br></br>
   <Hello firstname="Zia Khan"></Hello>
   <br></br>
    Stay home and Stay safe .
    <Food lunch = "Biryani" appitizer="Corn Soup" sweet="caramel ice-cream"></Food>
    <br/>
    Reusing component again
    <br/>
    <Food lunch = "Chicken karahi" appitizer="Fish Cracker" sweet="Gajar Halwa"></Food>
  </div>)
}

export default App;
