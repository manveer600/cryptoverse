import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const LikedCryptos = () => {
    const {likedArray} = useContext(AppContext) ;
    
  return (
    <>
    <div><p className='text-center text-2xl '>Liked Cryptos</p></div>
    <div className='  md:flex flex-wrap  mt-20 mx-auto justify-center w-4/5 '>
      {likedArray.length !=0 ?  likedArray.map((liked)=>{
      return  (<div className='flex-col mt-4 p-3 shadow-[0_10px_10px_rgba(8,_112,_184,_0.7)]'> 
      <div>
        <img src ={liked.image} className='mx-auto w-1/5'></img>
      </div>
      <div className=' mx-auto mt-2 '> 
      <div className='flex-row text-center  '>
       <p ><span className=''>Price </span> &nbsp; &nbsp; &nbsp;
        <span>{'$'+liked.current_price}</span></p>
      </div>
      <div className='flex-row text-center w-full  mt-1'>
      <p  > 
        <span >24 hrlow </span> &nbsp; &nbsp; &nbsp;
        <span>{'$'+liked.low_24h}</span>
        </p>
      </div>
      </div>

      </div>)
      }) : <div className='text-center text-2xl'> Add Your Favourite  Cryptocurrencies Here  </div>}
    </div>
    </>
    
  )
}

export default LikedCryptos
