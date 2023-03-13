import { useState } from 'react'
import './App.css'
import video from "./assets/short-1.mp4"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <video src={video} width="600" height="300"  autoPlay controls/>
    </div>
  )
}

export default App
