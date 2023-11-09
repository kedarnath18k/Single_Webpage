import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Contact from './Component/Contact';
import Policy from './Component/Policy';
import Error from './Component/Error';
import List from './Component/List';
import Footer from './Component/Footer';


const App=()=>{
  return (

   <>
   <List/>
   <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/Services" element={<Services/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Policy" element={<Policy/>}/> 
    <Route element={<Error/>}/>    
    
   
    
    </Routes>

    <Footer/>
   </>
  );
}

export default App;
