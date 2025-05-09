import React from 'react'
import ReactDOM from 'react-dom/client'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// If we just create a function inside main and not import from another component, still it works correctly.
function MyApp(){
  const username = 'Sarthak'  // We can add this variable inside html using curly braces {}.
  return (
      <div>
          <h1>Custom App | chai</h1>
          <hr />
          {username}
      </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "chai aur react"

// Below is the actual format for a react element or html.
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google',
  anotherElement  // executed expression is passed inside html like this when converting html to DOM tree.
)

// createRoot is a function in React used to create a root object for rendering React components within a specified DOM element. DOM element used here is an element with id as root.

// We can remove <StrictMode> if we want.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <MyApp />
    <hr />
    </>    
  </StrictMode>,
)

// The root which is created later will be rendered.

// createRoot(document.getElementById('root')).render(
//   reactElement  // its just a variable so we don't need to define </> or call it like ().
// )


