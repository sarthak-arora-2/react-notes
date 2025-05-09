// To create react-functional-component like below just type rfc(shortcut) and enter.

import React from 'react'

export default function Card({username, btnText="click me"}) {  // props are sent from the calling of Card component in App.jsx to add into this card. We can also access these using Card(props.username, props.btnText)
  return (
    <div>
      <div className="flex flex-col rounded-xl  p-4"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">Bored ape nft accidental {username}</h1>
            <button>
                <h1 className="font-bold font-RubikBold">{btnText}</h1>
            </button>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
    </div>
  )
}
