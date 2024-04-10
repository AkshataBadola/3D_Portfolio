import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);


  return (
    // nav is a semantic tag where the class name is a dynamic template string
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      {/* 
    1. w-full means full width
    2. items-center means items will appear in the centre
    3. padding y of 5 fixed at the top by 0 which is going to make it stay on top
    4. z-20 to make it appear on top of everything
*/}

      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* 
Logo and site title 
1. max-w-7xl means we want to have a lot of width in the navbar
2. margin is auto
  */}

        <Link
          to='/'
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Akshata &nbsp;
            <span className='sm:block hidden'> | Software Developer</span>
          </p>
        </Link>



      
        {/* 
Navigation links
Dynamic block of code starts where each link is rendered as a list item where each has a dynamic template string
*/}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {/* Dynamic rendering of navigation links */}

          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        {/* this is for mobile application when the three lines show up as a drop down menu */}

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex justify-end items-start flex-col gap-4">
              {/* Dynamic rendering of navigation links */}

              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
