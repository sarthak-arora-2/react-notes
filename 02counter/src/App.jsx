import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Hooks are responsible for any change in the value of a variable on the web page.
  // The useState Hook is used in React to add state to functional components. It allows components to manage and update data that can change over time, triggering re-renders when necessary to reflect those changes in the UI.
  // useState is invoked within a functional component and returns an array containing two elements: the current state value and a function to update it. The initial state value is passed as an argument to useState.

  let [counter, setCounter] = useState(10)  // counter=10, setCounter=updateFunction()
  let [newCounter, setNewCounter] = useState(20)

  const addValue = () => {
    if (counter < 20) setCounter(counter + 1)  // Value can not be greater than 20.
  }

  const lessValue = () => {
    if (counter > 0) setCounter(counter - 1)  // Value cannot be less than 0.
  }

// This is the functional update form of a React useState setter. When you pass a function to setNewCounter, React gives you the latest state value (prevCounter) as the argument. This is especially useful when updating the state multiple times in a row, or when the new state depends on the current state.

  const addNewValue = () => {

    // We can not do something like this because state updates in React are asynchronous and batched
    // Batched - batching multiple state updates together into a single re-render, instead of re-rendering for each one individually. To optimize performance.
    // setNewCounter(newCounter + 1)
    // setNewCounter(newCounter + 1)

    setNewCounter(prevCounter => prevCounter + 1)  
    setNewCounter(prevCounter => prevCounter + 1)  
    setNewCounter(prevCounter => prevCounter + 1)  
    setNewCounter(prevCounter => prevCounter + 1)  
  }
// prevCounter gives the current state at each line. It helps in updating a state in the UI multiple times in row by using the current state at each row.
  const lessNewValue = () => {
    setNewCounter(prevCounter => prevCounter - 1)  
    setNewCounter(prevCounter => prevCounter - 1)  
    setNewCounter(prevCounter => prevCounter - 1)  
    setNewCounter(prevCounter => prevCounter - 1)  
  }

  return (
    <>
      <h1>Counter</h1>
      <button onClick={addValue}>Increase Value {counter}</button><br />
      <button onClick={lessValue}>Decrease Value {counter}</button>
      <hr />
      <button onClick={addNewValue}>Increase New Value {newCounter}</button><br />
      <button onClick={lessNewValue}>Decrease New Value {newCounter}</button>
    </>
  )
}

export default App
