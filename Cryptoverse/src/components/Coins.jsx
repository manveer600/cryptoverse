import React from 'react'
import CoinItem from './CoinItem';
import Coin from '../routes/Coin';
import { Link, NavLink } from 'react-router-dom';

const Coins = ({coins}) => {
    
  return (
    <div>
        {
            coins.map((coin)=> { 
                
               return<div className='flex-row'> 
                <div ><CoinItem coin = {coin}/><Link to={`/coin/${coin.id}`} element = {<Coin coin={coin}/> } key={coin.id} >
                <div className='text-end  '><button className='button-30 '>Explore More  </button> </div> </Link>
                </div> 
                
                 </div>

            })
        }
        
   
      
    </div>
  )
}

export default Coins
