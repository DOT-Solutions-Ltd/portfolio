import React from 'react'
import { navLinks } from "../../data";
import { Link } from "react-router-dom";
import NavLogo from "../../assets/nav-logo.png";
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className='nav-container' >
            <Link to="/" style={{all: "unset"}} ><img src={NavLogo} alt="nav-logo" className='nav-logo' /></Link>
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
            <Link to="/about#contact-us" className="nav-button">Contact Us</Link>
        </nav>
    )
}

export default NavBar