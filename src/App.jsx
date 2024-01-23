import { useState } from 'react'
import viteLogo from '/vite.svg'
import Main from './components/Main'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Main />
    </>
  )
}

export default App
