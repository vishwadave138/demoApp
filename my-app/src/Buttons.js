import React from 'react'

export default function Buttons({increase, decrease}) {
  return (
    <div>
        <button onClick ={increase}>+</button>
        <button onClick ={decrease}>-</button>
    </div>
  )
}
