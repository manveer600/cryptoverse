import axios from "axios";

import { createContext, useEffect, useState } from "react";
import { news } from "../news";


export const AppContext = createContext() ; 

function AppContextProvider({children} ) { 
    const url = "https://mocki.io/v1/f20965d1-3645-4453-8ca6-d4e1ee0ae78e"
    const [coins , setCoins ] = useState([]);
    const [allnews , setAllNews ] = useState([]) ; 
    const [likedArray , setLikedArray ] = useState([]); 
    
    
  
  //  useEffect(()=>{
  //      liked ? settext('unlike') :settext('like')
  //  }, [liked])
   const fetchCoinData=()=>{
      axios.get(url).then((res)=>{
        setCoins(res.data)      
       
      }).catch((err)=> console.log("notfound"))
    }
    const fetchNews = () => { 
      setAllNews(news)
    }
    useEffect(()=>{
      fetchCoinData();
  } , [])
     const value = { 
        coins , 
        setCoins,
        news,
        likedArray,
        setLikedArray ,
       
     }
     return <AppContext.Provider value={value}>
     {children}
     </AppContext.Provider>
}
export default AppContextProvider