import  { useState } from "react";
import images from './AllData';
import'./App.css';


function Picture() {
    const[img, setImg]= useState(images);

    const allItem = () =>{
        const finalData = images.filter((value) =>{
            return value;
        })

        setImg(finalData);
    }

    
    const naturelIm = (categoryItem) =>{
        const finalData = images.filter((value) =>{
            return value.id===categoryItem;
        })

         setImg(finalData);

    }

    const travelIm = (categoryItem) =>{
        const finalData= images.filter((value)=>{
            return value.id===categoryItem;
        })

        setImg(finalData);

    }

    const animalIm = (categoryItem) =>{
        const finalData= images.filter((value)=>{
            return value.id===categoryItem;
        })

        setImg(finalData);
        
    }


    return(
        <>
        <div className="xy">
            <button onClick={allItem}>ALL</button>
            <button onClick={() =>naturelIm('nat')}>Natural</button>
            <button onClick={() =>travelIm('tra')}>Travel</button>
            <button onClick={() =>animalIm('ani')}>Animal</button>
        </div>
    
        <div class="xyz">
            {img.map ((value) =>{
                return (
                <div className="ip"> 
                    <img src={value.pic}  alt=" "/>
                </div>)
            })}
        </div>
 </>   

    )
   

}


export default Picture;