import React from 'react';

import './App.css';
import './Hello.css'

function Hello({firstname}) { 
  return (<div class="myname">
    Thank you <strong class ="stylish"> {firstname} </strong> and team for giving us a fighting chance !
    
  </div>
  )
}

export default Hello;
