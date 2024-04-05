import React from 'react'
import zoom from '../Assests/zoom.png'
import circluarLogo from '../Assests/circlelogo.png'
import microsoft from '../Assests/microsoft.png'
import salesforce from '../Assests/salesforce.png'
import paypal from '../Assests/paypal.png'
import stripe from '../Assests/stripe.png'
import zapier from '../Assests/zapier.png'

const Category = () => {
  return (
        <div className="lg:h-full bg-gray-50">
          <div className="grid grid-cols-3 gap-0">
            <div className="min-h-[200px] col-span-1 lg:col-span-1 bg-gray-50">
            <h1 className='font-inter text-xl relative top-14 left-10 font-semibold '>Categories</h1>
               <div className=' relative'>
             
              <div className='top-20 left-10  mt-32 ml-10 lg:w-60  md:w-40 mr-4 '>
                 <ul>
                 <li className="flex items-center justify-between px-4 py-2   gap-1  hover:bg-blue-300 rounded-lg "> ALL</li>
                <li className="flex items-center justify-between px-4 py-2   gap-1  hover:bg-blue-300 rounded-lg ">Popular</li>
                <li className="flex items-center justify-between px-4 py-2   gap-1 hover:bg-blue-300 rounded-lg ">Extensions And Apps </li>
                <li className="flex items-center justify-between px-4 py-2   gap-1 hover:bg-blue-300 rounded-lg ">Calendars</li>
                <li className="flex items-center justify-between px-4 py-2   gap-1 hover:bg-blue-300 rounded-lg ">Sales & CRM</li>
                <li className="flex items-center justify-between px-4 py-2   gap-1 hover:bg-blue-300 rounded-lg ">Video Conferencing </li>
                <li className="flex items-center justify-between px-4 py-2   gap-1 hover:bg-blue-300 rounded-lg ">Marketing </li>
                <li className="flex items-center justify-between px-4 py-2   gap-1 hover:bg-blue-300 rounded-lg ">Recruiting & ATS </li>
                <li className="flex items-center justify-between px-4 py-2   gap-1 hover:bg-blue-300 rounded-lg ">Payments </li>
                <li className="flex items-center justify-between px-4 py-2   gap-1 hover:bg-blue-300 rounded-lg ">Payments</li>
                <li className="flex items-center justify-between px-4 py-2   gap-1 hover:bg-blue-300 rounded-lg ">Analytics </li>
                <li className="flex items-center justify-between px-4 py-2   gap-1 hover:bg-blue-300 rounded-lg ">APi & Connectors </li>
                <li className="flex items-center justify-between px-4 py-2   gap-1 hover:bg-blue-300 rounded-lg ">Email Messaging</li>
                <li className="flex items-center justify-between px-4 py-2   gap-1 hover:bg-blue-300 rounded-lg ">Embed Calendly </li>
                 
                 </ul>
              </div>

         
            </div>
              
             </div>
            <div className="min-h-[200px] col-span-2 lg:col-span-2  ">
              <div className='font-inter text-  l relative top-10 left-3 '>viewing 15 results </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 ml-3 mr-3 mt-16 ">
              <div className='shadow-lg min-h-56 rounded-lg relative'>
  <img className='absolute  top-2  h-12 bg-cover bg-center' src={zoom} alt=''/>
  <div className="absolute inset-0 flex flex-col justify-center items-start px-4 h-full pt-8">
    <h2 className="text-xl py-2 font-semibold">Zoom</h2>
    <p className="text-l py-4">Connect from anywhere and eliminate administrative work</p>
    <a href="#" className="text-blue-500 ">Learn more</a>
</div>
</div>
<div className='shadow-lg min-h-56 rounded-lg relative'>
  <img className='absolute top-2  h-12 bg-cover bg-center' src={microsoft} alt=''/>
  <div className="absolute inset-0 flex flex-col justify-center items-start px-4 h-full pt-8">
    <h2 className="text-xl py-2 font-semibold">Zoom</h2>
    <p className="text-l py-4">Connect from anywhere and eliminate administrative work</p>
    <a href="#" className="text-blue-500 ">Learn more</a>
</div>
</div>
<div className='shadow-lg min-h-56 rounded-lg relative'>
  <img className='absolute top-2  h-12 bg-cover bg-center' src={salesforce} alt=''/>
  <div className="absolute inset-0 flex flex-col justify-center items-start px-4 h-full pt-8">
    <h2 className="text-xl py-2 font-semibold">Zoom</h2>
    <p className="text-l py-4">Connect from anywhere and eliminate administrative work</p>
    <a href="#" className="text-blue-500 ">Learn more</a>
</div>
</div>  
<div className='shadow-lg min-h-56 rounded-lg relative'>
  <img className='absolute top-2  h-12 bg-cover bg-center' src={paypal} alt=''/>
  <div className="absolute inset-0 flex flex-col justify-center items-start px-4 h-full pt-8">
    <h2 className="text-xl py-2 font-semibold">Zoom</h2>
    <p className="text-l py-4">Connect from anywhere and eliminate administrative work</p>
    <a href="#" className="text-blue-500 ">Learn more</a>
</div>
</div> 
<div className='shadow-lg min-h-56 rounded-lg relative'>
  <img className='absolute top-2  h-12 bg-cover bg-center' src={zapier} alt=''/>
  <div className="absolute inset-0 flex flex-col justify-center items-start px-4 h-full pt-8">
    <h2 className="text-xl py-2 font-semibold">Zoom</h2>
    <p className="text-l py-4">Connect from anywhere and eliminate administrative work</p>
    <a href="#" className="text-blue-500 ">Learn more</a>
</div>
</div>  
<div className='shadow-lg min-h-56 rounded-lg relative'>
  <img className='absolute top-2  h-12 bg-cover bg-center' src={salesforce} alt=''/>
  <div className="absolute inset-0 flex flex-col justify-center items-start px-4 h-full pt-8">
    <h2 className="text-xl py-2 font-semibold">Zoom</h2>
    <p className="text-l py-4">Connect from anywhere and eliminate administrative work</p>
    <a href="#" className="text-blue-500 ">Learn more</a>
</div>
</div>  
<div className='shadow-lg min-h-56 rounded-lg relative'>
  <img className='absolute top-2  h-12 bg-cover bg-center' src={zoom} alt=''/>
  <div className="absolute inset-0 flex flex-col justify-center items-start px-4 h-full pt-8">
    <h2 className="text-xl py-2 font-semibold">Zoom</h2>
    <p className="text-l py-4">Connect from anywhere and eliminate administrative work</p>
    <a href="#" className="text-blue-500 ">Learn more</a>
</div>
</div> 
<div className='shadow-lg min-h-56 rounded-lg relative'>
  <img className='absolute top-2  h-12 bg-cover bg-center' src={salesforce} alt=''/>
  <div className="absolute inset-0 flex flex-col justify-center items-start px-4 h-full pt-8">
    <h2 className="text-xl py-2 font-semibold">Zoom</h2>
    <p className="text-l py-4">Connect from anywhere and eliminate administrative work</p>
    <a href="#" className="text-blue-500 ">Learn more</a>
</div>
</div>  
<div className='shadow-lg min-h-56 rounded-lg relative'>
  <img className='absolute top-2  h-12 bg-cover bg-center' src={zapier} alt=''/>
  <div className="absolute inset-0 flex flex-col justify-center items-start px-4 h-full pt-8">
    <h2 className="text-xl py-2 font-semibold">Zoom</h2>
    <p className="text-l py-4">Connect from anywhere and eliminate administrative work</p>
    <a href="#" className="text-blue-500 ">Learn more</a>
</div>
</div>
<div className='shadow-lg min-h-56 rounded-lg relative'>
  <img className='absolute top-2  h-12 bg-cover bg-center' src={microsoft} alt=''/>
  <div className="absolute inset-0 flex flex-col justify-center items-start px-4 h-full pt-8">
    <h2 className="text-xl py-2 font-semibold">Zoom</h2>
    <p className="text-l py-4">Connect from anywhere and eliminate administrative work</p>
    <a href="#" className="text-blue-500 ">Learn more</a>
</div>
</div>  
<div className='shadow-lg min-h-56 rounded-lg relative'>
  <img className='absolute top-2  h-12 bg-cover bg-center' src={stripe} alt=''/>
  <div className="absolute inset-0 flex flex-col justify-center items-start px-4 h-full pt-8">
    <h2 className="text-xl py-2 font-semibold">Zoom</h2>
    <p className="text-l py-4">Connect from anywhere and eliminate administrative work</p>
    <a href="#" className="text-blue-500 ">Learn more</a>
</div>
</div>  
<div className='shadow-lg min-h-56 rounded-lg relative'>
  <img className='absolute top-2  h-12 bg-cover bg-center' src={paypal} alt=''/>
  <div className="absolute inset-0 flex flex-col justify-center items-start px-4 h-full pt-8">
    <h2 className="text-xl py-2 font-semibold">Zoom</h2>
    <p className="text-l py-4">Connect from anywhere and eliminate administrative work</p>
    <a href="#" className="text-blue-500 ">Learn more</a>
</div>
</div>    
              </div>
            </div>
          </div>
        </div>
   
      
    
  );
}

export default Category;



// <div className=' bg-gray-300 lg:h-[1500px]  '>
//            <div className='grid grid-flow-row-dense grid-cols-3 bg-gray-300 h-[1500px] lg:w-full   absolute'>
           
       
       
      
      
      
//         <div className=' relative   lg:col-span-2 lg:w-full lg:h-[1500px] bg-red-400  md:w- sm:w-full'>
//             <h1 className='font-inter text-[15px] font-medium absolute top-14 left-10'>viewing: 15 popular</h1>
//           <div className=' grid grid-cols-3 gap-2 mt-32 ml-3  bg-zinc-600 h-[1350px] mr-3'>
//           <div className='shadow-lg min-h-56 rounded-lg relative'>
//                 <img className='absolute top-2 left-1 h-10 bg-cover bg-center' src={zoom} alt=''/>
//           </div>  
//           <div className='bg-red-300 min-h-56 rounded-lg relative '>  
//           <img className='absolute top-2 left-1 h-10 bg-cover bg-center '  src={zoom} alt=''/>
//           </div>
//           <div className='bg-red-300 min-h-56 rounded-lg relative'>
//           <img className='absolute top-2 left-1 h-10 bg-cover bg-center '  src={zoom} alt=''/>
//           </div>
//           <div className='bg-red-300 min-h-56 rounded-lg relative'> 
//           <img className='absolute top-2 left-1 h-10 bg-cover bg-center '  src={zoom} alt=''/>
//           </div>
//           <div className='bg-red-300 min-h-56 rounded-lg relative'>
//           <img className='absolute top-2 left-1 h-10 bg-cover bg-center '  src={zoom} alt=''/>
//           </div>
//           <div className='bg-red-300 min-h-56 rounded-lg relative'>
//           <img className='absolute top-2 left-1 h-10 bg-cover bg-center '  src={zoom} alt=''/>
//           </div>
//           <div className='bg-red-300 min-h-56 rounded-lg relative'>
//           <img className='absolute top-2 left-1 h-10 bg-cover bg-center '  src={zoom} alt=''/>
//           </div>
//           <div className='bg-red-300 min-h-56 rounded-lg relative'>
//           <img className='absolute top-2 left-1 h-10 bg-cover bg-center '  src={zoom} alt=''/>
//           </div>
//           <div className='bg-red-300 min-h-56 rounded-lg relative'>
//           <img className='absolute top-2 left-1 h-10 bg-cover bg-center '  src={zoom} alt=''/>
//           </div>
//           <div className='bg-red-300 min-h-56 rounded-lg relative'>
//           <img className='absolute top-2 left-1 h-10 bg-cover bg-center '  src={zoom} alt=''/>
//           </div>
//           <div className='bg-red-300 min-h-56 rounded-lg relative'>
//           <img className='absolute top-2 left-1 h-10 bg-cover bg-center '  src={zoom} alt=''/>
//           </div>
//           <div className='bg-red-300 min-h-56 rounded-lg relative'>
//           <img className='absolute top-2 left-1 h-10 bg-cover bg-center '  src={zoom} alt=''/>
//           </div>
//           <div className='bg-red-300 min-h-56 rounded-lg relative'>
//           <img className='absolute top-2 left-1 h-10 bg-cover bg-center '  src={zoom} alt=''/>
//           </div>
         


//         </div>




//         </div>
        
//       </div>

//     </div>