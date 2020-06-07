import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Hello.css'

function Hello({firstname}) { 
  return <div class="myname">
    This is from hello and my name is {firstname}
  </div>
}

export default Hello;
