import React from 'react';
import { useState } from 'react';
import google from '../Assests/google.png'
import appstore from '../Assests/appstore.png'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Importing React Icons


const Footer = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
      setIsDropdownOpen(true);
    };
  
    const handleMouseLeave = () => {
      setIsDropdownOpen(false);
    };
  return (
    <footer className="bg-gray-100 py-8 h-[600px]">
      <div className="container mx-auto flex flex-wrap justify-between mt-28 ">
        <div className="w-full sm:w-1/3 mb-4  sm:mb-0 ">
          <h2 className='text-4xl pt-4 ml-8 font-black text-blue-950 '>Easy</h2>
          <h2 className='text-4xl ml-8 font-black text-blue-600'>ahead</h2>
          <p className='text-[15px] mt-4 ml-8'>We take the work out  of connecting with others  so you can accomplish more .</p>
                  <div className="relative inline-block">
          

         <button
        id="dropdownHoverButton"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-black mt-8 ml-8 bg-gray-100 hover:bg-gray-400 focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-32 py-2.5 text-center inline-flex items-center "
        type="button"
      >
     English 
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      {isDropdownOpen && (
        <div
          id="dropdownHover"
          className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hindi</a>
            </li>
           
          </ul>
          
        </div>
      )} 
      <div className=" flex">
      <div className="flex justify-center ">
        <a href="#" className=" h-auto">
          <img src={appstore} alt="App Store" className=" pt-9 h-28 " />
        </a>
        <a href="#" className=' h-auto' >
        <img src={google} alt="App Store" className="w-32 mt-3 " />
        
        </a>
      </div>
      

     
     
    </div>
    <div className="flex justify-center mt-4 mb-8">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-black    hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-black hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="#" className="text-black hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="text-black hover:text-gray-400">
              <FaLinkedin />
            </a>
            <a href="#" className="text-black hover:text-gray-400">
              <FaYoutube />
            </a>
          </div>
        </div>




        
   


    </div>
   
          
        </div>
        <div className="w-full sm:w-2/3">
          {/* Content for right column */}
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/3 mb-4 sm:mb-0  flex flex-col items-center">
              <h2 className="text-lg text-sky-950 font-black mb-2">Solutions</h2>
              <ul className="list-none flex flex-col items-center gap-4">
                <li>Customer Success</li>
                <li>Sales</li>
                <li>Recruiting</li>
                <li>Information Technology</li>
                <li>Marketing</li>
              </ul>
              <div>
              <h2 className="text-lg font-black text-sky-950  mb-2 mt-8 flex flex-col items-center">Support</h2>
              <ul className="list-none flex flex-col items-center gap-4">
                <li>Help Center</li>
                <li>Video Center </li>
                <li>Cookie Setting </li>
               
              </ul>
              </div>
            </div>
            <div className="w-full sm:w-1/3 mb-4 sm:mb-0   flex flex-col items-center " >
            <h2 className="text-lg text-sky-950 font-black mb-4">About</h2>
                 <ul className="list-none flex flex-col items-center gap-4">
                 <li>About Calendly</li>
                 <li>Contact Sales</li>
                 <li>Newsroom</li>
                 <li>Careers</li>
                 <li>Security</li>
                 </ul>
                 <div>
              <h2 className="text-lg text-sky-950 font-black mb-2 mt-8 flex flex-col items-center ">Add ONs </h2>
              <ul className="list-none flex flex-col items-center gap-4">
                <li>Download For Chrome     </li>
                <li>Download For Firefox</li>
              </ul>
              </div>
            </div>
            <div className="w-full sm:w-1/3 mb-4 sm:mb-0  flex flex-col items-center">
              <h2 className="text-lg text-sky-950 font-black mb-2 ">Popular Features</h2>
              <ul className="list-none flex flex-col items-center gap-4">
                <li>Embed Calendly</li>
                <li>Availability</li>
                <li>Sending Notifications</li>
                <li>Using Calendly Mobile</li>
              </ul>
              <div>
              <h2 className="text-lg text-sky-950 font-black mb-2 mt-8 flex flex-col items-center">Developers</h2>
              <ul className="list-none flex flex-col items-center gap-4">
                <li>Developer Tools</li>
               
              </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4 ">
        <div className="flex justify-between items-center">
          <div className="flex">
            {/* Social media icons */}
            <a href="#" className="mr-2"><i className="fab fa-twitter"></i></a>
            <a href="#" className="mr-2"><i className="fab fa-facebook"></i></a>
            <a href="#" className="mr-2"><i className="fab fa-instagram"></i></a>
            <a href="#" className="mr-2"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="mr-2"><i className="fab fa-youtube"></i></a>
          </div> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
