import { useState } from "react";


function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}> Add </button>
      <button onClick={() => setCount(count - 1)}> minus </button>
    </>
  );
}
export default Counter;
