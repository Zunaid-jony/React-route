import React from 'react';
import { Link } from 'react-router-dom';
import Friend from './../Friends/Friend';
import './Header.css'

const Header = () => {
    return (
        <div className='nav'>
            <Link className='a' to="/home">Home</Link>
            <Link className='a' to="/friends">Friends</Link>
            <Link className='a' to="/about">About</Link>
           
        </div>
    );
};

export default Header;