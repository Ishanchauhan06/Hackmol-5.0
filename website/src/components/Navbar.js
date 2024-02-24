import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from "../Images/LogoSpasth.png"
const Navigationbar = () => {
  return (
    <nav className="p-4 top-0 font-serif z-20">
      <div className="container flex justify-between items-center">
        {/* <img src="https://i.ibb.co/BgVpWTM/Screenshot-2024-02-19-202209-removebg-preview-1.png" alt="logo" className='w-48'/> */}
        <img src={logo} className='w-48 h-16 m-0'/>
        {/* <a href="/home" className="ml-8 text-xl font-bold text-black">SPASHT</a> */}
        <div className="hidden md:flex flex-grow justify-center space-x-4 text-black">
          <a href="/home" className="font-medium text-lg">Home</a>
          <a href="/bookslot" className="font-medium text-lg">Reservations</a>
          <a href="#" className="font-medium text-lg">Profile</a>
          <a href="/" className="font-medium text-lg">Logout</a>
        </div>

        <div className="md:hidden">
          {/* Added mobile menu icon here */}
          <div className="md:hidden">
            <GiHamburgerMenu className="text-black text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigationbar;
