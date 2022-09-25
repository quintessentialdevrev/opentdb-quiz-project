import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [qns, setQns] = useState(0)
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
    .then(res => res.json())
    .then(data => setQns(data))
  }, [])

  return (
    <div className="App">
      <h1>Under progress...</h1>
    </div>
  )
}

export default App
