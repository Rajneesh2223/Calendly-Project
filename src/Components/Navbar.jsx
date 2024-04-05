import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assests/logo.png';

const Navbar = () => {
  return (
    <nav className='bg-white h-20 shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16'>
        <div className='mr-2'> 
        
          <Link to='/'>
            <img src={logo} alt='Calendly' className='h-[150px] w-auto' />
          </Link>
        </div>
        <div className='hidden sm:block'>
          <ul className='flex space-x-8'>
            <li>
              <Link to='/' className='text-gray-700 hover:text-gray-900  font-medium   '>
                Individuals
              </Link>
            </li>
            <li>
            
              <Link to='/' className='text-gray-700 hover:text-gray-900 font-medium  '>
                Teams
              </Link>
            </li>
            <li>
             
              <Link to='/' className='text-gray-700 hover:text-gray-900 font-medium  '>
                Enterprise
              </Link>
            </li>
            <li>
             
              <Link to='/' className='text-gray-700 hover:text-gray-900 font-medium  '>
                Product
              </Link>
            </li>
            <li>
              
              <Link to='/' className='text-gray-700 hover:text-gray-900 font-medium  '>
                Pricing
              </Link>
            </li>
            <li>
              
              <Link to='/' className='text-gray-700 hover:text-gray-900 font-medium  '>
                Resources
              </Link>
            </li>
          </ul>
        </div>
        <div>
          
          <Link to='/' className='text-gray-700 hover:text-gray-900'>
            Log In
          </Link>
          <button className='ml-4 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-sm font-medium'>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
