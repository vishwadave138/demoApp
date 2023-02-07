import { useState } from 'react';
import './App.css';
import React from 'react';
import images from './AllData';

function App() {

  const[img, setImg]= useState(images);
  const[num, setNum]= useState(0);
  
  

    const allItem = () =>{
        const finalData = images.filter((value) =>{
            return value;
        })

        setImg(finalData);
    }

    
    const breakI = (categoryItem) =>{
        const finalData = images.filter((value) =>{
            return value.id===categoryItem;
        })

         setImg(finalData);

    }

    const lunchI = (categoryItem) =>{
        const finalData= images.filter((value)=>{
            return value.id===categoryItem;
        })

        setImg(finalData);

    }

    const dinnerI = (categoryItem) =>{
        const finalData= images.filter((value)=>{
            return value.id===categoryItem;
        })

        setImg(finalData);
        
    }
    
   
    const update = () => {
      setNum(num+1);
    };

    const decrement = () => {
      if (num<=0){
        return setNum(0);
      }
      else{
        return setNum(num-1);
      }
    };

    

    return(
      <div>
      <div className='rest'>
        <h1>Specialties</h1>
        <h2>Our Menu</h2>
      </div>

      <div className="xy">
            <button onClick={allItem}>ALL</button>
            <button onClick={() =>breakI('break')}>BreakFast</button>
            <button onClick={() =>lunchI('lunch')}>Lunch</button>
            <button onClick={() =>dinnerI('dinner')}>Dinner</button>
        </div>

      <div class="xyz">
            {img.map ((value) =>{
                return (
                <div className="ip"> 
                  <div className='men'>
                    <div className='img'>
                    <img src={value.pic}  alt=" "/>
                    </div>
                    <div className='info'>
                    <h3>{value.name}</h3>
                    <p>{value.des}</p>
                    <h2>{value.price}</h2>
                    </div>
                  </div> 

                       
                        <div className='upd' style={{fontSize:"11px",height:"65px", width:"65px"}}>
                          <button onClick={decrement}>-</button>
                          <h1>{num}</h1>
                          <button onClick={update}>+</button>
                        </div>
                      
                </div>
                );
            })}
        </div>

      </div>
    );

}
export default App;
