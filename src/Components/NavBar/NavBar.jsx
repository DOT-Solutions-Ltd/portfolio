import React from 'react'
import { navLinks } from "../../data";
import NavLogo from "../../assets/nav-logo.png";
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className='nav-container' >
            <img src={NavLogo} alt="nav-logo" className='nav-logo' />
            <ul className="nav-links-container">
                {
                    navLinks.map(({ pageName, path, id }) => {
                        return (
                            <li key={id} className="nav-links">{pageName}</li>
                        )
                    })
                }
            </ul>
            <button className="nav-button">Contact Us</button>
        </nav>
    )
}

export default NavBar