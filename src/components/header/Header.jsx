import React from 'react';
import Navbar from '../navbar/Navbar';
import logo from './image-from-rawpixel-id-2418992-original.png'
import './Header.css';
import { StaticRouter } from 'react-router-dom'

function Header () {

    return (
        <section className='header'>
            <section className='header-logo'>
            <StaticRouter>
                <a href="/" className='jaskier'><img src={logo} alt='Image @Noon on rawpixel.com' /></a>
                </StaticRouter>
                <section className='header-left'>
                <section className='header__navigation'>
                    <Navbar></Navbar>
                </section>
                </section>
            </section>
        </section>
    )

}

export default Header;