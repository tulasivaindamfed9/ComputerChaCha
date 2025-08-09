import React from "react";

const Navbar: React.FC = () => (
  <header className="w-full py-6 px-6 md:px-20 flex justify-between items-center bg-black text-white">
    <div className="text-xl font-bold tracking-wider ">ERICA SCHADE</div>
    <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wide">
      <a href="#">Home</a>
      <a href="#">Portfolio</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </nav>
    <button className="px-5 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
      Get in Touch
    </button>
  </header>
);

export default Navbar;
