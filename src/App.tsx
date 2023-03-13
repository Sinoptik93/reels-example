import { useState } from 'react'
import './App.css'
import videomp4 from "./assets/short-1.mp4"
import videowebm from "./assets/short-1.webm"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <video width="600" height="300" autoPlay controls>
            <source src={videowebm} type="video/webm"/>
            {/*<source src={videomp4} type="video/mp4"/>*/}
        </video>
    </div>
  )
}

export default App
