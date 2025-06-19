import { useState , useCallback, useEffect , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)  // useRef is a React Hook that lets you reference a value that’s not needed for rendering. Initial reference of passwordRef is null.

// useCallback() is a React Hook that helps you remember a function, so that React doesn’t re-create it every time your component renders. It changes only when its dependencies changes.useCallback(function, [dependencies])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFIGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbers) str += "0123456789"
    if (char) str += "!@#$%^&*(){}[]_+=-?/|"
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * length + 1)
      pass += str.charAt(index)
      
    }
    setPassword(pass)
  }, [length, numbers, char, setPassword])

  const copyPasswordToClipboard = useCallback(() => {  
    passwordRef.current?.select();  // selects the password if there is any.
    passwordRef.current?.setSelectionRange(0, 999);  // selects the range of characters of password.
    window.navigator.clipboard.writeText(password)  // It copies password to clipboard.
  }, [password])

// Use useEffect() for side effects — actions that:
// a. Should only run under certain conditions
// b. Don’t belong directly inside the render logic
// To avoid re-render of the function at every small re-render like scrolling, input, etc.

  useEffect(() => {
    passwordGenerator()
  }, [length, numbers, char, passwordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-green-200"
            placeholder="Password"
            readOnly
            ref={passwordRef}  // This sets passwordRef to this input reference.
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}  // sets the range of input length.
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numbers}
          id="numberInput"
          onChange={() => {
              setNumber((prev) => !prev);  // We are fetching previous stored state of number and updating it.
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                  setChar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
  )
}

export default App
