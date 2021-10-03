import React from 'react'
import NavBarAdmin from './NavBarAdmin';
const About=() =>{
    return(
        <div>
        <NavBarAdmin/>
        <div className='information'>
            <div className='a1'>
                <h1>Name</h1> 
                XYZ          
            </div>
            <div className='a1'>
                   <h1>Email </h1> 
                   XYZ@gmail.com         
            </div>
            <div className='a1'>
                  <h1>Address</h1> 
                  vill.-XYZ, Ayodhya,Lucknow.            
            </div>
        </div>
        </div>
    );
};
export default About;