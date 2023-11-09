import React from 'react'
import Logo1 from '../Images/Logo1.png';
import { NavLink } from 'react-router-dom';
import { HiOutlineSearch,HiOutlineUser, HiOutlinePhone} from "react-icons/hi";


const List = () => {
  return (
    <header>
        <div className='container container-flex'>
            <div className='logoContainer'>
                <img src={Logo1} alt='logo1' className='logo1'/>
               
            </div>
            <nav>
                <div className='list'>
                    <NavLink exact to ='/' className='listItem' activeClassName="activeItem"> Home</NavLink>
                    <NavLink to ='/about' className='listItem' activeClassName="activeItem">About</NavLink>
                    <NavLink to ='/services' className='listItem' activeClassName="activeItem">Services</NavLink>
                    <NavLink to ='/contact' className='listItem' activeClassName="activeItem">Contact</NavLink>
                    <NavLink to ='/policy' className='listItem' activeClassName="activeItem">Policy</NavLink>

                </div>
            </nav>
            <div className='icons'>
                <HiOutlineSearch className='icon'/>
                <HiOutlineUser className='icon'/>
                <HiOutlinePhone className='icon'/>
            </div>
        
        </div>
    </header>
  )
}

export default List
