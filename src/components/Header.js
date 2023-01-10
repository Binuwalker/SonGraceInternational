import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import './Header.css';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { SlClock } from 'react-icons/sl';
import { HiMail } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';

const Header = () => {

    const Navigate = useNavigate()

    return (
        <div>
            <div className='Header'>
                <Container>
                    <div className='header-top'>
                        <div className='timing'>
                            <p><FaRegCalendarAlt className='ic-cal' /> Monday - Friday <SlClock className='ic-clk' /> 9:00 AM - 5:30 PM, Pacific Standard Time</p>
                        </div>
                        <div className='contact'>
                            <p><HiMail className='ic-mail' /> Contact Us</p>
                        </div>
                        <span className='vr-line'></span>
                        <div className='phone'>
                            <p>Call: <BsTelephoneFill className='ic-ph' /> +972 50 718 6879</p>
                        </div>
                        <div className='contact-bottom'></div>
                    </div>
                </Container >
            </div>
            <Container>
                <div className='logo'>
                    <img src='/img/son-grace-international-logo.jpg' alt='son-rise-international-logo' className='brand-logo' onClick={() => Navigate('/')} />
                </div>
            </Container>
        </div>
    )
}

export default Header;