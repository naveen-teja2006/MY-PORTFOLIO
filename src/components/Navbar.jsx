import "./Navbar.css";
import React from 'react'
function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className="nav-title">Naveen Teja</div>
                <ul className="nav-links">
                    <li><a href="#Home">Home</a></li>
                    <li ><a href="#About">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li ><a href="#Skills">Skills</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;