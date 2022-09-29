import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <h1 style={{ color: 'orange' }}>Power gym Club</h1>
            <div>
                <a href="/Join">Join</a>
                <a href="/Booking">Booking</a>
                <a href="/Gym Tools">Gym Tools</a>
                <a href="/About">About</a>
            </div>
        </nav>
    );
};

export default Header;