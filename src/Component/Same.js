import React from 'react'
import { NavLink } from 'react-router-dom';
import Home1 from '../Images/Home1.png';

const Same = (props) => {
  return (
    <>
    <div className='mainSection'>
     <div className='contentBox'>
       <h1>{props.title}</h1>
       <p>{props.text}</p>
          <div className='btnBox'>
           <div className='btn'>
             <NavLink to ='/about' className='readMore'>{props.btn}</NavLink> 
 
           </div>
 
          </div>
     </div>
     <div className='imgContainer'>
     <img src={props.imgsrc} alt="Home"/>
     </div>
    </div>
     </>
  )
}

export default Same
