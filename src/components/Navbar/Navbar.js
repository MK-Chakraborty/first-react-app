import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand mx-auto d-flex align-items-center py-5" href="/App.js">
                        <i className="fas fa-virus navIcon pe-3"></i>
                        <h1 className='text-warning fs-1 fw-bold'>Covid-19 Tracker</h1>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;