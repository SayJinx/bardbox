import React from 'react';
import Navbar from '../navbar/Navbar';

import './Header.css';

function Header () {

    return (
        <section className='header'>
            <section className='header-logo'>
                <a href="/" className='jaskier'>Bardbox</a>
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