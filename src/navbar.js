import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='nav-links'>
        <li>
          <Link to="/">Ngừoi Dùng</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">Giới Thiệu</Link>
        </li>
      </ul>
    </nav>
  );
}

