import React from 'react'
import Homepage from './Homepage'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Mealinfo from './Mealinfo';
import Navbar from './Navbar';
import FoodComp from './FoodComp';
import Footer from './Footer';




const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>} />
        <Route path='/:mealid' element={<Mealinfo></Mealinfo>}></Route>
        <Route path='/food' element={<FoodComp></FoodComp>}></Route>
      </Routes>
      <Footer></Footer>

    </>

  )
}

export default App