import React from 'react'
import { BsTwitter,BsFacebook,BsInstagram,BsLinkedin} from "react-icons/bs";

const Footer = () => {
  return (
    <>
    <footer>
    <div className='container container-flex'>
      <div className='icons'>
    <BsTwitter className='icon'/>
    <BsFacebook className='icon'/>
    <BsInstagram className='icon'/>
    <BsLinkedin className='icon'/>
    </div>
    <div className='line'>
      <hr/>
      <hr/>
    </div>
    <div className='copyright'>
      <p>All rights are reserved &copy;</p>
      <p>Made with love by kedarnath</p>
    </div>
    </div>
    </footer>
    </>
  )
}

export default Footer
