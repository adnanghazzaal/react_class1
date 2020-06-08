import React from 'react';
import './food.css'
function Food ({lunch , sweet , appitizer }){
  return (

    <div class ="serving">
      <div>
      your appitizer today is {appitizer}
    </div>
    <div>
      your main course for today is {lunch}
    </div>
    <div>
      your sweet for today is {sweet}
    </div>
    </div>
    )
}

export default Food;