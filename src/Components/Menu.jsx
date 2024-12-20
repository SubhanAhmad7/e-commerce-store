import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Images/logo-01.png';
import { Search, ShoppingCart, Mail } from 'lucide-react';




function Menu() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg px-5 bg-body-tertiary">
                <div className="container-fluid p-1">
                    <Link className="navbar-brand ms-5" to="/"><img src={logo} alt="Website Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active text-success fw-bold ms-5 gap-5" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold ms-3" to="/shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold ms-3" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold ms-3" to="/about">About</Link>
                            </li>
                        </ul>
                        <div className=" px-5 ms-auto me-5">
                            <Link className='mx-3' to="/search"><Search color='green' /></Link>
                            <Link className='mx-3' to="/shop"><ShoppingCart color='green' /></Link>
                            <Link className='mx-3' to="/contact"><Mail color='green' /></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu