import React from 'react';

import './App.css';
import './Hello.css'

function Hello({firstname}) { 
  return <div class="myname">
    This is from hello.js and my name is {firstname}
  </div>
}

export default Hello;
