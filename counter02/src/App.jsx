import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [countv, setCount] = useState(0)

  function addv() {
    if(countv>=20) return countv;
    else
    setCount(countv + 1);
  }

  function subv() {
    if(countv<=0) return countv;
    setCount(countv - 1);
    
  }

  return (
    <>
      <h1>Counter Program</h1>
      <h2>Counter Value : {countv}</h2>
      <button onClick={addv}>Increment</button>
      <button onClick={subv}>Decrement</button>
    </>
  )
}

export default App;