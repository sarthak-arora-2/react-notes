import React from 'react'
import { useState } from 'react'

export default function Button({btncolor, setColor}) {

  return (  // We didn't do {btncolor} inside setColor below because setColor needs a string value and {btnColor} will return an object like {btncolor: 'blue'}.
    <button onClick={() => setColor(btncolor)} className='outline-none px-4 py-1 text-white shadow-lg rounded-full cursor-pointer' style={{backgroundColor: btncolor}}>
            {btncolor}
    </button>
  )
}
