import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Coin from '../routes/Coin'
import { AppContext } from '../context/AppContext'
import {FcLikePlaceholder ,FcLike} from 'react-icons/fc'
import { toast } from 'react-toastify'

const CoinItem = ({coin}) => {
  const  {likedArray , setLikedArray  } = useContext(AppContext)
  
   
  const likeHandler = ()=>{ 
    // toast.success("Crypto liked ")
    setLikedArray([...likedArray, coin]);
  }
  const unlikeHandler = ()=>{
    // toast.success("Crypto unliked ")
    setLikedArray(likedArray.filter((c) => c!==coin))
   }
   
   useEffect(()=>{

   },[likedArray])
  return (
    
     <div className=' mb-2 '>
      <div className="  md:p-6 mb-5 shadow-md p-3 text-blue-900">
        <h1 className="text-xl font-semibold mb-4">{coin.name} &nbsp; 
        { 
          likedArray.some((liked) => liked.id==coin.id  ) ? (<button onClick={unlikeHandler}><FcLike/></button>) : (<button onClick={likeHandler}><FcLikePlaceholder/>  </button>)
        }
        </h1>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={coin.image} alt="Coin Icon" className="w-8 h-8 mr-2" />
            <span className="text-gray-700 md:text-xl font-medium uppercase">{coin.name} ({coin.symbol})</span>
          </div>
          <div className="text-green-500 font-medium">
            <span className="text-lg">Price : {'$'+coin.current_price}</span>
           
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-gray-700 font-medium">
            <span className="text-sm">Market Cap Rank:</span> <br></br>
            <span className="text-lg text-yellow-900">{coin.market_cap_rank} </span>
          </div>
          <div className="text-blue-500 font-medium">
            <span className="text-sm">24h Change:</span>
            <span className="text-lg">{coin.price_change_percentage_24h}%</span>
          </div>
        </div>
      </div>
      
    </div>

  )
}

export default CoinItem
