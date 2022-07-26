import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [statePass, setpass] = useState(false)
  const toggleState = () => setpass(!statePass)

  //CONTADOR

  const [count, setCount] = useState(0)
  const handlePlus = () => {setCount(count +1)}
  const handlePlusRest = () => {setCount(state =>  state-1)} //Otra forma
  const handlePlusReset = () => {setCount(0)}

  return (

    <div className="container">
      <div className="info-password">
        <h1>Password Info</h1>
        <div className="input-info">
          <label htmlFor=""><b>Constraseña: </b></label>
          <input className='input-pass' type={statePass ? "text" : "password"} />
          <button className='btn' onClick={toggleState}><i class='bx bx-low-vision'></i></button>
        </div>
      </div>
      <div className="info-password">
        <h1>{count}</h1>
        <div className="input-info">
          <button className='btn' onClick={handlePlus}>+1</button>
          <button className='btn' onClick={handlePlusRest}>-1</button>
          <button className='btn' onClick={handlePlusReset}>reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
