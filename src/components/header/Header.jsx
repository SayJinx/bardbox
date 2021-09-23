import React from 'react';
import Navbar from '../navbar/Navbar';

import './Header.css';

function Header () {

    return (
        <section className='header'>
            <section className='header-logo'>
                <a href="/" className='jaskier'><img src='https://i.ibb.co/NKNp15n/token-1.png' alt='cointoss' /></a>
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