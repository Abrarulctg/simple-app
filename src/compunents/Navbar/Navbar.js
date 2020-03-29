import React from 'react';
import './Navbar.css';
import logo from '../../resource/logo.png';

const Navbar = () => {
    return (
        <div>
             <div className="navbar">
                 <img className="nav nav-img" src={logo} alt=""/>
                 <h1 className="nav">Lumipex</h1>
                 <h4>(Complete Online Service Provider)</h4>
            </div>
            <div className="manu">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/blog">Blog</a>
            </div>

        </div>
    );
};

export default Navbar;