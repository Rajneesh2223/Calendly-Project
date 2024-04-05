import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Category from './Components/Category'
import Questions from './Components/Questions'
import Footer from './Components/Footer'

const App = () => {
  return (
   <div>
    <Navbar/>
    <Home/>
    <Category/>
    <Questions/>
    <Footer/>

   </div>
  )
}

export default App