import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';
import rej from './img/rej.jpg';
import phy from './img/phy.jpg';
import php from './img/php.jpg';
import nod from './img/nod.jpg';
import net from './img/net.jpg';
import mond from './img/mond.jpg';
import jq from './img/jq.jpg';
import ios from './img/ios.jpg';
import dj from './img/dj.jpg';
import boot from './img/boot.jpg';
import and from './img/and.jpg';
import ang from './img/ang.jpg';




export default function Home() {
  return (
    <>
    <div className='hom'>
      <div className='h'>
       <h1><br/>Innovative And <br/>Intelligent Technology <br/>Solution And Service</h1>
       </div>
       <div className='btn'>
        <button className='btn1'>GET START</button>
       </div>
    </div>
    
    <div className='sol'>
      <div className='sol1'>
      <h1>Solution We Deliver</h1>
      <p>Implementing new solutions can be intimidating and challenging. We will carry the burden
         of managing implementation,<br/> help you define your business requirements, and liaise with 
         your vendors.</p>
      </div>
      <div className='sol2'>
        <div className='so1'>
     {/* <FontAwesomeIcon icon="fa-regular fa-newspaper" /> */}
     <h3>Newspaper</h3>
     <p>The Indian government issued orders to block 138 betting and gambling apps and
        94 loan providing apps due to foreign links on an urgent. </p>
     </div>
     <div className='so2'>
     {/* <FontAwesomeIcon icon="fa-regular fa-newspaper" /> */}
     <h3>Newspaper</h3>
     <p>The Indian government issued orders to block 138 betting and gambling apps and
       94 loan providing apps due to foreign links on an urgent. </p>
     </div>
     <div className='so3'>
     {/* <FontAwesomeIcon icon="fa-regular fa-newspaper" /> */}
     <h3>Newspaper</h3>
     <p>The Indian government issued orders to block 138 betting and gambling apps and
       94 loan providing apps due to foreign links on an urgent.</p>
     </div>
     <div className='so4'>
     {/* <FontAwesomeIcon icon="fa-regular fa-newspaper" /> */}
     <h3>Newspaper</h3>
     <p>The Indian government issued orders to block 138 betting and gambling apps and
       94 loan providing apps due to foreign links on an urgent. </p>
     </div>
      </div>

      <div className='tec'>
      <div className='tec1'>
      <h1>Technologies We Work With</h1>
      <p>we help bring our customers bold ideas to life. Our global team of experts help solve
         complex business problems across <br/>a variety of domains using innovative technology and 
         their unparalled expertise.</p>
      </div>
      <div className='tec2'>
        <img src={rej} alt='' />
        <img src={php} alt='' />
        <img src={phy} alt='' />
        <img src={nod} alt='' />
        <img src={net} alt='' />
        <img src={boot} alt='' />
        <img src={jq} alt='' />
        <img src={mond} alt='' />
        <img src={dj} alt='' />
        <img src={ios} alt='' />
        <img src={and} alt='' />
        <img src={ang} alt='' />
      </div>
      </div>

      <div className='cek'>
      <div className='cek1'>
      <h1>Clients Who Trust Us</h1>
      <p>We always focus on our client, and the client’s success is Rödl & Partner's success. We 
        perform our services across disciplines, efficiently, <br/>and in a manner tailored to the needs 
        of global enterprises.</p>
      </div>
      <br/>
      <div className='cek2'>
        <h1 className='cek2'>THE #1 <br/>COMMUNITY<br/> FOCUSED NFT<br/> MARKETPLACE</h1>
      </div>
      <div className='cek3'>
        <h1 className='cek3'>AN ONLINE<br/> EDUCATION WEBSITE</h1>
      </div>
      <div className='cek4'>
        <h1 className='cek4'>AN INDUSTRY'S <br/>LEADING CAR-SELLING <br/>PLATFORM</h1>
      </div>
      <div className='cer5'>
        <h1 className='cek5'>THE APP FOR <br/>BLOCK-CHAIN</h1>
      </div>
      <div className='cer6'>
        {/* <button>SEE MORE</button> */}
      </div>
      </div>


    </div>

    </>
  )
}
