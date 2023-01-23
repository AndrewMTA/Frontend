import React from 'react'
import { linkedin } from '../assets'

const Success = () => {
  return (
    <div className='wrapper'>
        <div className='Container '>
            <h1 className='text-white  text-[35px] font-bold'>Success! Form Submitted</h1> 
            
            <h3 className='text-white text-[20px] '><br/>We plan to launch in around a month or two.  <br/> We'll reach out to you with more information then. <br/><br/>For more updates follow us on Linkedin.</h3>
          <a href='https://www.linkedin.com/company/pitch-connect123' ><img src={linkedin}/></a>
           
            </div>
    </div>
  )
}

export default Success