import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButterflyLogo from './images/butterflylogo.png';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-header">
                <img className='logo' src={ButterflyLogo} alt="Butterfly Logo" />
                <button className="navbar-toggle" onClick={toggleNavbar}>
                    ☰
                </button>
            </div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <ul className='navList'>
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                    <li><Link to="/jobs" onClick={() => setIsOpen(false)}>Jobs</Link></li>
                    <li><Link to="/Scholarships" onClick={() => setIsOpen(false)}>Scholarships</Link></li>
                    <li><Link to="/SupportPrograms" onClick={() => setIsOpen(false)}>Support Programs</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;