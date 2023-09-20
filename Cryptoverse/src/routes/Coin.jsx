import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { Url } from 'url';
import Chart from '../components/Chart';
import Chartt from '../components/Chart';

const Coin = () => {
   const {coins} = useContext(AppContext) ;
   
   const [url, seturl ] = useState('') ;
   const [coin , setcoin ] = useState({});
   const [loading, setloading ] = useState(true) ; 

   useEffect(()=>{
      const str = window.location.href;
      let ans ="";
      for ( let i = str.length -1 ; str[i]!='/' ; i-- ) {
        ans+=str[i];
      }
      ans = ans.split('').reverse().join(''); ;
      seturl(ans);  
      if(url!="") coins.find((c)=>{if(c.id == url) setcoin(c) })      
      setloading(false) ; 
    }) ; 
   
  
   
  
  





 
  return (
    <div className=' '>

<div className='md:flex-col justify-center '>
   


     <div className=' w-2/4 flex-col mx-auto justify-center text-center items-center'>
      <img src={coin.image} className='mx-auto pt-20'></img>
      <p className='text-4xl'>{coin.name}</p>
     </div>
     <div className='mb-5 text-center mt-4'>Today's Data</div>
  <Chartt coin = {coin}  />
  </div>  
     <table className='table mx-auto text-lg md:w-3/5 mt-10 w-5/6 gap-y-1.5 h-4/5'>
  <tbody>
    <tr className='  border'>
      <td className='py-2 px-4 text-blue-500 font-semibold'>Current Price</td>
      <td className='py-2 px-4 text-right text-blue-500 font-semibold'>{'$ ' + coin.current_price}</td>
    </tr>
    <tr className='  border'>
      <td className='py-2 px-4 text-blue-500 font-semibold'>Market Rank</td>
      <td className='py-2 px-4 text-right text-blue-500 font-semibold'>{coin.market_cap_rank}</td>
    </tr>
    <tr className='  border'>
      <td className='py-2 px-4 text-blue-500 font-semibold'>24 hr High</td>
      <td className='py-2 px-4 text-right text-blue-500 font-semibold'>{'$ ' + coin.high_24h}</td>
    </tr>
    <tr className='  border'>
      <td className='py-2 px-4 text-blue-500 font-semibold'>24 hr Low</td>
      <td className='py-2 px-4 text-right text-blue-500 font-semibold'>{'$ ' + coin.low_24h}</td>
    </tr>
    <tr className='  border'>
      <td className='py-2 px-4 text-blue-500 font-semibold'>Total Volume</td>
      <td className='py-2 px-4 text-right text-blue-500 font-semibold'>{coin.total_volume}</td>
    </tr>
    <tr className='  border'>
      <td className='py-2 px-4 text-blue-500 font-semibold'>Total Supply</td>
      <td className='py-2 px-4 text-right text-blue-500 font-semibold'>{coin.total_supply}</td>
    </tr>
  </tbody>
</table>






  




     
    </div>
  )
}

export default Coin
