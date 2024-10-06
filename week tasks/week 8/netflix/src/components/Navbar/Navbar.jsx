import React from "react";
import './Navbar.css'
import { FaBell,FaSearch } from 'react-icons/fa'; 


const Navbar = () => {
  return (
    <div className="Navbar">
      
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="logo"
      />
      <div className="nav-row">
      <a>HOme</a>
      <a>TVShows</a>
      <a>Movies</a>
      <a>New & Poppular</a> 
      <a>MyList</a>
      <a>Browse by Languages</a>
      </div>
      <FaSearch className='Header-Icon1' size={20} />
      <h5 className="Header-text">Children</h5>
      <FaBell className='Header-Icon' size={20} />
      <img  
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="avatar"
      />
  
    </div>
  );
};

export default Navbar;
