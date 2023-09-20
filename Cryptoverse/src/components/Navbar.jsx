import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {FiAlignRight} from 'react-icons/fi'
import {BiCaretUpCircle} from 'react-icons/bi'
export function NavbarWithSearch() {
   const [navBg, setNavBg] = useState(false);
    const changeNavBg = () =>
      {
       window.scrollY > 0 ? setNavBg(true) : setNavBg(false);
      }
      window.addEventListener('scroll', changeNavBg);


  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="navtext mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        
        
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center text-xl">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        
        
        className="p-1 font-normal text-xl"
      >
        <Link to="/news" className="flex items-center">
           News
        </Link>
      </Typography>
      <Typography
        as="li"
        
        
        className="p-1 font-normal"
      >
        <Link to="/liked" className="flex items-center text-xl">
          LikedCryptos 
        </Link>
      </Typography>
      {/*<Typography
        as="li"
        variant="small"
        
        className="p-1 font-normal"
      >
        <Link to="" className="flex items-center">
          Docs
        </Link>
      </Typography> */}
    </ul>
  );
 
  return (
    <Navbar className={`z-10 fixed flex-col rounded-none w-full border-none max-w-none `}>
      <div className="navtext rounded-none text-center align-middle mx-auto justify-between flex text-black w-full  ">
       <Link to ="/" className=""><Typography
          as="a"
          
          className="cursor-pointer text-3xl p-0 m-0 "
        >
        CryptoVerse
        </Typography> </Link>
        <div className="hidden lg:block ">{navList}</div>
        
        <IconButton
          variant="text"
          className="h-14 w-14 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-14 w-14 p-0 m-0 "
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
            {!openNav ?  <FiAlignRight size={20} />: <BiCaretUpCircle size={20} />}
            </svg>
          }
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container  h-full  text-black ">
          {navList}
          {/* <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button> */}
        </div>
      </Collapse>
    </Navbar>
  );
}