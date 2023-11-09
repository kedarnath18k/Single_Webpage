import React from 'react'
import Card from './Card'
import Data from './Data'

const Services = () => {
  return (
    <>
    <h1>Our Services</h1>
    <div className='services'>
      {Data.map((values)=>{
        return(
          <Card
              title1={values.stitle}
              imgSource={values.imgsrc}
              desc1={values.desc}
              btnServices={values.btnService }/>
        )
      })}
    </div>
   
      
  
    </>
  )
}

export default Services
