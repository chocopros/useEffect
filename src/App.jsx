import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [statePass, setpass] = useState(false)

  const toggleState = () => setpass(!statePass)

  return (

    <div className="container">
      <div className="info-password">
        <h1>Password Info</h1>
        <div className="input-info">
          <label htmlFor=""><b>Constraseña: </b></label>
          <input type={statePass ? "text" : "password"} />
          <button onClick={toggleState}><i class='bx bx-low-vision'></i></button>
        </div>
      </div>
    </div>
  )
}

export default App
