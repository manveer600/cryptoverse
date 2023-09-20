import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Coins from './components/Coins';
import { Route, Routes } from 'react-router-dom';
import Coin from './routes/Coin';
import { AppContext } from './context/AppContext';
import { NavbarWithSearch } from './components/Navbar';
import { Navbar } from '@material-tailwind/react';
import Home from './routes/Home';
import News from './routes/News';
import LikedCryptos from './routes/LikedCryptos';
import { ToastContainer } from 'react-toastify';

const App = () => { 
  
  return (
    <>
      <NavbarWithSearch/>
    <Routes>
      <Route path='/' element = {<Home/>} > 
     
       </Route>
      <Route path='/coin' element = {<Coin/>} >
        <Route path=":coinid" element = {<Coin />} > </Route>
      </Route>
      <Route path='/news' element = {<News/>} > </Route>
      
      <Route path='/liked' element = {<LikedCryptos/>} > </Route>
    </Routes>
    </>
  )
}

export default App
