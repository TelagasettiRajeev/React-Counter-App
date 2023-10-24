import React, { useState } from 'react';
import './App.css';

function App() {

  const [count , setCount] = useState(0);

  function handleClick()
  {
    setCount( count+1 );
  }
  function handleClick2()
  {
    setCount( count-1 );
  }
  function handleClick3()
  {
    setCount( 0 );
  }


  return (
    <div class="main-div">
      <h1 class="title">Counter Application</h1>
      <div class="counter-div">
        <h1 id="value" > {count} </h1>
        <div class="buttons">
          <button onClick={handleClick} > Increment </button>
          <button onClick={handleClick3} > Reset </button>
          <button onClick={handleClick2} > Decrement </button>
        </div>
      </div>
    </div>
  )


}

export default App
