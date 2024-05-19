import React from 'react';
import navImg from '../assets/evantoMarketLogo.svg';

const Header = () => {
  return (
    <div className="navbar bg-[#262626] z-100 flex items-center justify-between px-4 py-3 w-full">
      <div>
        <a className="text-xl">
          <img className="w-40 h-6" src={navImg} alt="" />
        </a>
      </div>
      <div>
        <button className="bg-[#82B440] w-24 h-10 text-sm text-white font-Sora rounded-md shadow-2xl">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Header;