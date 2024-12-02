import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BodyC from './Components/BodyC'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BodyC/> 
    </>
  )
}

export default App
