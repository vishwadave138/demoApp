import React from 'react'
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Service from "./Service";
import Gallery from "./Gallery";
import AboutUs from "./AboutUs";
import Contact from "./Contact";


export default function Tech() {
  return (
    <div>
        <Router>
            <Nav />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/service' element={<Service/>} />
                <Route path='/gallery' element={<Gallery/>} />
                <Route path='/aboutus' element={<AboutUs/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='*' element={<h1>page not found</h1>} />
            </Routes>
        </Router>
    </div>
  )
}
