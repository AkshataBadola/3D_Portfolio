import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    //nav is a semantic tag where the class name is a dynamic template string
    <nav className="${styles.paddindX} w-full flexitems-center py-5 fixed top-0 z-20 bg-primary">
    {/* 
    1. w-full means full width
    2. items-center means items will appear in the centre
    3. padding y of 5 fixed at the top by 0 which is going to make it stay on top
    4. z-20 to make it appear on top of everything*/}

    <div className="w-full flex justify-between items-center max-w-7xl mx-auto" >
      {/* 
      1. max-w-7xl means we want to have a lot of width in the navbar
      2. margin is auto
      */}

      <Link 
          to ="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(""); //this keeps track of where we are on the page
            window.scrollTo(0,0); //scrolls to top of page
          }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>

            <p className="text-white text-[18px] font-bold cursor-pointer">Akshata <span className="sm:block hidden">| Software Developer</span></p>

          </Link>
    </div>
    </nav>
  )

}

export default Navbar