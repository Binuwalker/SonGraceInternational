import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars } from 'react-icons/fa'

const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <div className='top-navbar navbar-sticky'>
            <ul className='navlinks' ref={navRef}>
                <Container>
                    <li>
                        <Link to='/' className='navlink'>
                            <div className='navtext'>HOME</div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' className='navlink'>
                            <div className='navtext'>ABOUT</div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/services' className='navlink'>
                            <div className='navtext'>SERVICES</div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/blogs' className='navlink'>
                            <div className='navtext'>BLOGS</div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/trips' className='navlink'>
                            <div className='navtext'>TRIPS</div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/loginsignin' className='navlink'>
                            <div className='navtext'>LOGIN/SIGNIN</div>
                        </Link>
                    </li>
                </Container>
            </ul>
            <div className='nav-btn-container'>
                <div className='nav-btn-dummy'>
                </div>
                <div className='nav-btn' onClick={showNavbar}>
                    <FaBars />
                </div>
            </div>
        </div>
    )
}

export default Navbar;