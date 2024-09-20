import React from 'react'
import { navLinks } from "../../data";
import { Link } from "react-router-dom";
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
                            <Link style={{all: "unset"}}  to={path} key={id}>
                                <li className="nav-links">{pageName}</li>
                            </Link>
                        )
                    })
                }
            </ul>
            <button className="nav-button">Contact Us</button>
        </nav>
    )
}

export default NavBar