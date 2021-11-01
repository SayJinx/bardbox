import React from 'react';
import Navbar from '../navbar/Navbar';

import './Header.css';
import { StaticRouter } from 'react-router-dom'

function Header () {

    return (
        <section className='header'>
            <section className='header-logo'>
            <StaticRouter>
                <a href="/" className='jaskier'><img src='https://i.ibb.co/NKNp15n/token-1.png' alt='Cointoss' /></a>
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