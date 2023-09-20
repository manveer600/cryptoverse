import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Coins from '../components/Coins';

const Home = () => {
    const {coins , setCoins } = useContext(AppContext) ; 
  return (
    <div className='p-2 translate-y-28'>
        <p className='text-center text-5xl'>Explore the Cryptoverse</p>
      <div className=' md:p-8 rounded-2xl mt-4 mx-auto md:w-4/5'>
        <div className='  md:flex justify-between '>
            <div className='md:ml-4 md:h-2/4 md:my-auto  md:w-2/4 '>
                <p className='text-center md:text-3xl text-2xl p-3'>
                At CryptoVerse, we are committed to providing you with comprehensive and real-time information about the exciting world of cryptocurrencies.
                </p>
            </div>
            <div className='  justify-center m-4'>
                <img className='' src='https://img.freepik.com/free-vector/bitcoin-concept-illustration_114360-670.jpg?w=740&t=st=1693276544~exp=1693277144~hmac=e98109aaccfd41a861f0c5df7c9c3ae8b3b5f6f644f254f6bbffeef537511b80'>
                </img>
            </div>
            
        </div>
      </div>
      <div className='md:w-5/6 mx-auto '>
      <Coins coins  = {coins}/>
      </div>
      
    </div>
  )
}

export default Home
