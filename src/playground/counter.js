import React from "react";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    console.log("addcount called");
    setCount(count + 1);
  };

  const minusCount = () => {
    console.log("minusCount called");
    setCount(count - 1);
  };

  const resetCount = () => setCount(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addCount}>+1</button>
      <button onClick={minusCount}>-1</button>
      <button onClick={resetCount}>reset</button>
    </div>
  );
}
