import React from 'react';

import './Navbar.css';

function Navbar () {

    return (
        
        <section>
            <a href='/' className='navbar-item'>Home</a>
            <a href='/playlists' className='navbar-item'>Playlists</a>
            <a href='/contribute' className='navbar-item'>Contribute</a>
        </section>

    )

}

export default Navbar