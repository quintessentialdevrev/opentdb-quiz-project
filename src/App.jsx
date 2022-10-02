import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyCard from './MyCard'
import YourProgress from './YourProgress'
import EnterChoice from './EnterChoice'
import Example from './Example'

function App() {
  const [qns, setQns] = useState(0)
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
    .then(res => res.json())
    .then(data => setQns(data))
  }, [])

  return (
    <div className="App">
      <div className='mainContent'>
        {/* <EnterChoice /> */}
        {/* <MyCard /> */}
        {/* <YourProgress /> */}
        <Example />
      </div>
    </div>
  )
}

export default App
