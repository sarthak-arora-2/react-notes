import Read from "./Read"

function App() {

// Inside this return we can return only a single tag. So we use a fragment <>, in which we can contain multiple elements.

  return (  
      <>
        <Read/>
        <h1>Now we can add multiple elements.</h1>
      </>  
  )
}

export default App  // We need to export the function to use in another file.
