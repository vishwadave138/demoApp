import React from 'react'
import {Link} from "react-router-dom";
import './App.css';
import logo from './img/logo.png';
// import { useState } from 'react';

export default function Nav() {
 
     

  return (
    <div className='bar'>
        <div className='lo'>
          <img src={logo} alt='' height="100px" width="100px" ></img>
        </div>
        <div className='sar'>
        <Link className='tar' to={"/"}>Home</Link>
        <Link className='tar' to={"/aboutus"}>About Us</Link>
        <Link className='tar' to={"/gallery"}>Gallery</Link>
        <Link className='tar' to={"/service"}>Service</Link>
        <Link className='tar' to={"/contact"}>Contact</Link>
        </div>
       <div className='but'>
        <button>Log In</button>
        </div>
        
        
    </div>
  )
}
