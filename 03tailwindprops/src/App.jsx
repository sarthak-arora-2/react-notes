import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  
  // Dynamic values of a single card is being sent.
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
      <Card username="Sarthak" btnText="Try Me"/>
      <Card username="Anyone" btnText="Tick Tick"/>
    </>
  )
}

export default App
