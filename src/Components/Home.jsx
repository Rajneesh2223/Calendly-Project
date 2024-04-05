import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import circluarLogo from '../Assests/circlelogo.png'
import microsoft from '../Assests/microsoft.png'
import salesforce from '../Assests/salesforce.png'
import paypal from '../Assests/paypal.png'
import stripe from '../Assests/stripe.png'
import zoom from '../Assests/zoom.png'
import zapier from '../Assests/zapier.png'

const Home = () => {
  // Define state for navigation items
  const [navItems, setNavItems] = useState([
    { label: 'Home', url: '/' },
    { label: 'Product', url: 'Product' },
    { label: 'Integrations', url: 'Integration' },
    // Add more items as needed
  ]);

  return (
    <div className=' '>
    
     
      
      <div className='lg:row lg:flex   bg-blue-50 '>
  <div className='lg:w-6/12 lg:h-[500px]  '>
  <div className=" p-4 ml-9">
        <ul className="flex space-x-2">
          
          {navItems.map((item, index) => (
            <li key={index}>
             
              <a href={item.url} className=" active:bg-blue-500">
                {item.label}
              </a>
            
              {index !== navItems.length - 1 && <span>/</span>}
            </li>
          ))}
        </ul>
      </div>
    <div className='mt-10 ml-12 '>
      <h2 className='font-inter text-2xl'>
        Apps & Integration
      </h2>
      <br/>
      <br/>
      <div>
        <h1 className=' font-inter font-black text-5xl'>Integrate Calendly,</h1>   
        <h1 className='font-inter font-black text-5xl'>boost productivity</h1>    
        <br/>
        <p className='font-inter  text-lime-800'>Smart scheduling automation will change the way - and your <br/> tools - work</p>    
      </div>
      <br/>
      <br/>
      <div className="relative">
        <input 
          type="text"
          placeholder="Search for an Integration "
          className="w-4/5 border shadow-lg  border-gray-300 rounded-full py-5 pl-16 pr-6 focus:outline-none focus:border-blue-500"
        />
        <div className="absolute  inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
          <FaSearch className="text-blue-400  size-6" />
        </div>
      </div>
    </div>
  </div>
  
  <div className='lg:w-6/12    sm:m-top[40px]  h-[500px]    sm:top-[500px]  flex justify-center items-center '>
    <div class='w-[500px] h-[500px] rounded-full  bg-gray-50 flex justify-center items-center absolute '>
    
      <div class='w-56 h-56 rounded-full bg-blue-100 flex justify-center items-center'>
        <div class='w-40  h-40 rounded-full bg-blue-200 flex justify-center items-center'>
          <div class='w-26 h-26 rounded-full '>
              <img className='w-20 h-20' src={circluarLogo} alt=''/>
                  </div>
        </div>
    </div>
  </div>
  <div className='w-20 h-20 lg:top-[25%] lg:left-[40%] sm:top-[100px]  sm:left-[100px] relative bg-white shadow-md rounded-lg'>
    <img src={microsoft} alt=''/>
  </div>
  <div className='w-20 h-20 lg:top-[25%] lg:left-[10%] relative sm:top-[130px]  sm:left-[240px] shadow-md bg-white rounded-lg'>
    <img className='mt-4' src={zoom} alt='' />
  </div>
  <div className='w-20 h-20 lg:bottom-[28%] sm:right-[100px] lg:left-[15%] shadow-md relative bg-white rounded-lg'>
    <img src={paypal} alt=''/>
  </div>
  <div className='w-20 h-20 relative sm:right-[80px] sm:bottom-[25%] lg:bottom-[28%] shadow-md lg:right-[15%] bg-white rounded-lg'>
    <img className='mt-4' src={stripe} alt=''/>
  </div>
  <div className='w-20 h-20 relative bg-white shadow-md lg:bottom-[5%] lg:left-[7%] rounded-lg sm:left-12'>
    <img className='mt-4' src={zapier} alt=''/>
  </div>
  <div className='w-20 h-20 relative sm:bottom-[110px] sm:right-24 bg-white shadow-md lg:bottom-[4%] lg:right-[49%] rounded-lg'>
    <img src={salesforce} alt=''/>
  </div>
    
      </div>



        </div>

    </div>
  );
}

export default Home;
