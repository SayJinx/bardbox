import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar () {

    return (
        
        <section>
            <Link to='/' className='navbar-item'>Home</Link>
            <Link to='/playlists' className='navbar-item'>Playlists</Link>
            <Link to='/contribute' className='navbar-item'>Contribute</Link>
        </section>

    )

}

export default Navbar