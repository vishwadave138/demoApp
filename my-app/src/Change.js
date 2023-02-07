import {React, useState} from 'react';
import"./App.css";

 function Change() {

     const[show, setShow]= useState(false);
     const[isActive,setIsActive]= useState('show');
     const[text,setText]= useState('');
     const[colour,setColour]= useState('#371B58')

 
     function showHide(){
       setShow(!show);
       if(show === false) {
        setIsActive('hide')
        setText('Hello Good Morning')
       }
       else{
        setIsActive('show')
        setText('')
       }
     }
     function chan(){
      setColour("#" +
      Math.floor(Math.random()*16777215).toString(16))
     }
  return (
    <div>
        
        <button onClick={showHide}>{isActive}</button>
        <h1>{text}</h1>
     <div>
      <div style={{backgroundColor:colour, height:"500px", width:'300px'}}>
      </div>
      <button onClick={chan}>Random Colour</button>
     </div>
      
    </div>   
  );
}
export default Change;