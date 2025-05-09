import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

// function App() {
//   const [color, setColor] = useState('black')  // Imagine a label (color) that always points to the current color in a box. You’re not changing the label — you’re changing what’s in the box. So const means the location of color variable in the memory can not be changed.

//   return (
//     <div className='w-full h-screen duration-300' style={{backgroundColor: color}}>
//       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
//         <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
//           <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 text-white shadow-lg rounded-full cursor-pointer' style={{backgroundColor: 'blue'}}>
//             Blue
//           </button>
//           <button onClick={() => setColor('red')} className='outline-none px-4 py-1 text-white shadow-lg rounded-full cursor-pointer' style={{backgroundColor: 'red'}}>
//             Red
//           </button>
//           <button onClick={() => setColor('green')} className='outline-none px-4 py-1 text-white shadow-lg rounded-full cursor-pointer' style={{backgroundColor: 'green'}}>
//             Green
//           </button>
//           <button onClick={() => setColor('orange')} className='outline-none px-4 py-1 text-white shadow-lg rounded-full cursor-pointer' style={{backgroundColor: 'orange'}}>
//             Orange
//           </button>
//           <button onClick={() => setColor('olive')} className='outline-none px-4 py-1 text-white shadow-lg rounded-full cursor-pointer' style={{backgroundColor: 'olive'}}>
//             Olive
//           </button>
//           <button onClick={() => setColor('pink')} className='outline-none px-4 py-1 text-white shadow-lg rounded-full cursor-pointer' style={{backgroundColor: 'pink'}}>
//             Pink
//           </button>
//           <button onClick={() => setColor('purple')} className='outline-none px-4 py-1 text-white shadow-lg rounded-full cursor-pointer' style={{backgroundColor: 'purple'}}>
//             Purple
//           </button>
//           <button onClick={() => setColor('brown')} className='outline-none px-4 py-1 text-white shadow-lg rounded-full cursor-pointer' style={{backgroundColor: 'brown'}}>
//             Brown
//           </button>
          
//         </div>
//       </div>
//     </div>
//   )
// }

function App() {
  const [color, setColor] = useState('black')  // Imagine a label (color) that always points to the current color in a box. You’re not changing the label — you’re changing what’s in the box. So const means the location of color variable in the memory can not be changed.

  return (
    <div className='w-full h-screen duration-300' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          {/* We are sending the setColor function to the button component to update the color of this App page. */}
          <Button btncolor='blue' setColor={setColor}/>
          <Button btncolor='red' setColor={setColor}/>
          <Button btncolor='green' setColor={setColor}/>
          <Button btncolor='orange' setColor={setColor}/>
          <Button btncolor='olive' setColor={setColor}/>
          <Button btncolor='pink' setColor={setColor}/>
          <Button btncolor='purple' setColor={setColor}/>
          <Button btncolor='brown' setColor={setColor}/>
        </div>
      </div>
    </div>
  )
}

export default App
