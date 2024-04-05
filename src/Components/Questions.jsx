import React from 'react'
import { useState } from 'react';

const Questions = () => {
    const [showInput1, setShowInput1] = useState(false);
  const [showInput2, setShowInput2] = useState(false);
  const [showInput3, setShowInput3] = useState(false);
  const [showInput4, setShowInput4] = useState(false);

  // Function to toggle input box visibility for each FAQ item
  const toggleInput1 = () => {
    setShowInput1(!showInput1);
    setShowInput2(false); // Close other input boxes
    setShowInput3(false);
    setShowInput4(false);
  };

  const toggleInput2 = () => {
    setShowInput2(!showInput2);
    setShowInput1(false); // Close other input boxes
    setShowInput3(false);
    setShowInput4(false);
  };

  const toggleInput3 = () => {
    setShowInput3(!showInput3);
    setShowInput1(false); // Close other input boxes
    setShowInput2(false);
    setShowInput4(false);
  };

  const toggleInput4 = () => {
    setShowInput4(!showInput4);
    setShowInput1(false); // Close other input boxes
    setShowInput2(false);
    setShowInput3(false);
  };


  return (
    <div className='h-full flex flex-col justify-center items-center bg-blue-50'>
     

      <div className='flex flex-col justify-center items-center h-full w-full mt-8 '>
      <div className='flex flex-col  justify-center items-center h-full w-full'>
        <h1 className='text-3xl font-inter mb-4 lg:text-4xl font-bold'>Frequently Asked Question </h1>
        <p className="text-base mb-2 lg:text-lg">Not seeing what you are looking for?</p>
        <a href="#" className="text-blue-500 mb-4 lg:text-lg">Go to our help center</a>
      </div>

      <div className='flex flex-col justify-center items-center h-full w-full'>
        <div className="  flex w-[800px] items-center justify-between px-20 py-2 my-4  hover:bg-blue-300 rounded-lg border border-gray-300 shadow-md">
          <div className="flex items-center  ">
            <h2 className="text-lg font-medium">Want to build a Calendly integration? Learn about our API.</h2>
          </div>
          <div className="flex items-center justify-center h-12   hover:border-blue-500 cursor-pointer" onClick={toggleInput1}>
            <span className="text-gray-500 hover:text-blue-500 text-2xl">+</span>
          </div>
          {showInput1 && (
  <div className="flex flex-col px-20 py-2">
    <div className="text-lg font-medium mb-2">Answer:</div>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  </div>
)}   </div>

        <div className="flex w-[800px]  items-center justify-between px-20 py-2 my-4  hover:bg-blue-300 rounded-lg border border-gray-300 shadow-md">
          <div className="flex items-center ">
            <h2 className="text-lg font-medium">How can I request a new integration?</h2>
            </div>
          <div className="flex items-center justify-center h-12  hover:border-blue-500 cursor-pointer" onClick={toggleInput2}>
            <span className="text-gray-500 hover:text-blue-500">+</span>
          </div>
          
          {showInput2 && (
  <div className="flex flex-col px-20 py-2">
    <div className="text-lg font-medium mb-2">Answer:</div>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  </div>
)} 
        </div>

        <div className="flex w-[800px] items-center justify-between px-20 py-2 my-4 hover:bg-blue-300 rounded-lg border border-gray-300 shadow-md">
          <div className="flex items-center">
            <h2 className="text-lg font-medium">What are Calendly apps?</h2>
          </div>
          <div className="flex items-center justify-center h-12  hover:border-blue-500 cursor-pointer" onClick={toggleInput3}>
            <span className="text-gray-500 hover:text-blue-500">+</span>
          </div>
          {showInput3 && (
  <div className="flex flex-col px-20 py-2">
    <div className="text-lg font-medium mb-2">Answer:</div>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  </div>
)} 
        </div>

        <div className="flex w-[800px] items-center justify-between px-20 py-2 my-4 mb-4 hover:bg-blue-300 rounded-lg border border-gray-300 shadow-md">
          <div className="flex items-center">
            <h2 className="text-lg font-medium">What are Calendly integrations?</h2>
          </div>
          <div className="flex items-center justify-center h-12  hover:border-blue-500 cursor-pointer" onClick={toggleInput4}>
            <span className="text-gray-500 hover:text-blue-500">+</span>
          </div>
          {showInput4 && (
  <div className="flex flex-col px-20 py-2">
    <div className="text-lg font-medium mb-2">Answer:</div>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  </div>
)} 
        </div>
      </div>
      
      

</div>

  </div>
  
  )
}

export default Questions
