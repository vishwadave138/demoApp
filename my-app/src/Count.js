import {useState} from 'react'
import Buttons from './Buttons'

export default function Counter() {

    const[count, setCount]=useState(0)
    function increase(){
        setCount(count=>count+1)
      }
      function decrease(){
        setCount(count=>count-1)
      }
    
  return (
        <div>
            {/* <h3>example of counter but the increase and decrease buttons are in a child component.</h3> */}
            <h1>
                {count}
            </h1>
            <Buttons increase={increase} decrease={decrease} />
        </div>
  )
}
