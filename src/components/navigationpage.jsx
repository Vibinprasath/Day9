import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/navigationpage.css';
import LoginForm from './loginform';
 function Navbar(){

    return (
      <div className='bacg'>
      
      
        <li><div class="search">
    <input type="text" class="search__input" placeholder="Type your text"></input>
    <button class="search__button">
        <svg class="search__icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
        </svg>
    </button>
</div></li>
        <li>
        <Link to ="/HomePage"><button class="button">
    <span class="button-content">Home </span>
</button></Link>
        </li>
        <li>
        <Link to="/volunteerform"><button class="button">
    <span class="button-content">Volunteer Form </span>
</button></Link>
        </li>
        
        <li>
        <Link to="/grid"><button class="button">
    <span class="button-content">Communication </span>
 </button>
</Link>
        </li>
      
        <li>
        <Link to="/about"><button class="button">
    <span class="button-content">About us</span>
 </button>
</Link>
        </li>
        <li>
        <Link to="/loginform"><button class="button">
    <span class="button-content">Logout </span>
</button></Link>
        </li>
      
    {/* </nav> */}
    </div>
  );
}

export default Navbar;