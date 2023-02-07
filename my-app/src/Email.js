import { useState} from 'react'


export default function Email() {

  const [email,setEmail]= useState();
  const[validate, setValidate]= useState(false);
  

  function handleSubmit(e) {
    setEmail(e.target.value);
    console.log(email);
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w)*(\.\w{2,3})+$/.test(email)) {
        setValidate(true);
    }
    else{
        setValidate(false);
    }
  }

  
  return (
    <>
    <div>
        <h3>
            submit button enables only when email in in formaat: abcd@xyz.uv
        </h3>
        <input placeholder="Enter Email" type="email" onChange={handleSubmit} />
        <button type ="submit" disabled ={validate===false}>submit</button>
    </div>

    <div>
        
    </div>
    </>
  )
}
