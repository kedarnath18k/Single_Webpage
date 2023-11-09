import React from 'react'
import { NavLink } from 'react-router-dom';
import Home3 from '../Images/Home3.png';
import Same from './Same';
const Home=()=> {
  return (
    <>
   <Same
   title="Learning Made Easy"
   text="The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet,
   consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
   imgsrc={Home3}
   btn="Read More"/>
    </>
  )
}

export default Home;
