import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Counter Ver.1</h1>
      </header>
      <div className="counter-container">
        <div className="count">{count}</div>
        <div className="button-container">
          <button onClick={incrementCount}>+</button>
          <button onClick={decrementCount}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
