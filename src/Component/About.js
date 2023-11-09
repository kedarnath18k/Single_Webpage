import React from 'react'
import { NavLink } from 'react-router-dom';
import Home2 from '../Images/Home2.png';
import Same from './Same';

const About = () => {
  return (
    <>
    <Same
    title="Know more about us"
    text="The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    imgsrc={Home2}
    btn="Know More"/>
     </>
  )
}

export default About
