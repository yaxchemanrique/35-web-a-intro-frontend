import { useState } from "react";
import "./App.css";

function App() {
  // const [a, b] = useState(0)
  // const [number, setNumber] = useState(0)
  const [count, setCount] = useState(0);

  /* const clickHandleMas1 = function () {
    setCount(count + 1)
  }

  const clickHandleMas10 = function () {
    setCount(count + 10)
  }

  const clickHandleMenos1 = function () {
    setCount(count - 1)
  }

  const clickHandleMenos10 = function () {
    setCount(count - 10)
  }

  const clickHandleReset = function () {
    setCount(0)
  } */

  const clickHandle = (cambio) => {
    switch (cambio) {
      case '0':
        setCount(0);
        break;
      case '+1':
        setCount(count + 1)
        // alert('Se ejecuto mas 1')
        break;
      case '+10':
        setCount(count + 10)
        break;
      case '-1':
        setCount(count - 1)
        break;
      case '-10':
        setCount(count - 10)
        break;
      default:
        break;
    }
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>count is {count}</p>
        <button onClick={() => clickHandle('+1')}>+ 1</button>
        <button onClick={() => clickHandle('+10')}>+ 10</button>
        <button onClick={() => clickHandle('-1')}> - 1</button>
        <button onClick={() => clickHandle('-10')}> - 10</button>
        <button onClick={() => clickHandle('0')}>reset</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

/* function useState() {
...
  return [a, b]
}

const count = useState()[0]
const setCount = useState()[1] */

export default App;
