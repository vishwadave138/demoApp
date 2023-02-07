import {useState} from 'react';
import './App.css';

export default function Factorial() {

  const[num,setNum]= useState();

  function factorial(n){
    var result = n;
    if(n<0){
        return 0;
    }
    if(n===0 || n===1) {
        return 1;
    }
    else{
        while (n>=2){
            result = result * (n-1);
            n--;
        }
        return result;
    }
  }

  return (
    <div>
        <h3>write positio no and get its factorial bellow</h3>
        <input type="number" onChange={(e) =>setNum(e.target.value)} min="0" />
        Factorial: {factorial(num)}
    </div>
  );
}
