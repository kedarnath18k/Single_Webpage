import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <h1>Contact Us</h1>
    <form className='contact'>
      <div>
        <label htmlFor='name'>Name:-</label>
        <input type='text' placeholder='Enter your name'/>
      </div>
      <div>
        <label htmlFor='name'>Email:-</label>
        <input type='email' placeholder='Enter your email'/>
      </div>
      <div>
        <label htmlFor='name'>Password:-</label>
        <input type='Password' placeholder='Enter your Password'/>
      </div>
      <div>
        <label htmlFor='mobile'>Mobile:-</label>
        <input type='text' placeholder='Enter your Mobile'/>
      </div>
      <div className='btnBox'>
       <div className='btn'>
         <NavLink to ='/' className='readMore'>Submit here</NavLink> 

       </div>
       </div>
    </form>
    </>
  )
}

export default Contact
