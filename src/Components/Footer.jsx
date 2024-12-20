import React from 'react'
import { Link } from 'react-router-dom'
import icon1 from './Images/icon-pay-01.png';
import icon2 from './Images/icon-pay-02.png';
import icon3 from './Images/icon-pay-03.png';
import icon4 from './Images/icon-pay-04.png';
import icon5 from './Images/icon-pay-05.png';
import { Twitter, Facebook, Linkedin } from 'lucide-react';



function Footer() {
    return (
            <div className='bg-dark'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='URL'>
                                <h4 className='text-white mt-5'>Categories</h4>
                                <Link className="nav-link fw-bold text-white mt-4" to="/shop">Women</Link>
                                <Link className="nav-link fw-bold text-white mt-4" to="/shop">Men</Link>
                                <Link className="nav-link fw-bold text-white mt-4" to="/shop">Shoes</Link>
                                <Link className="nav-link fw-bold text-white mt-4" to="/shop">Watches</Link>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='URL'>
                                <h4 className='text-white mt-5'>Help & Support</h4>
                                <Link className="nav-link fw-bold text-white mt-4" to="/shop">Order</Link>
                                <Link className="nav-link fw-bold text-white mt-4" to="/shop">Returns</Link>
                                <Link className="nav-link fw-bold text-white mt-4" to="/shop">Shipping</Link>
                                <Link className="nav-link fw-bold text-white mt-4" to="/shop">FAQs</Link>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='URL'>
                                <h4 className='text-white mt-5'>GET IN TOUCH</h4>
                                <p className='text-white mt-3 fs-6'>Any questions? Let us know in <br /> store at 8th floor, 379 Hudson <br /> St, New York, NY 10018 or call <br /> us on (+1) 96 716 6879</p>
                                <div className='text-success'>
                                <span className='me-3'><Twitter /></span>
                                <span><Facebook /></span>
                                <span className='ms-3'><Linkedin /></span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='URL'>
                                <h4 className='text-white mt-5'>Newsletter</h4>
                                <input className="rounded-pill p-2 px-3 me-2 mb-2 bg-dark border-0" type="email" placeholder="Your Email Address" />
                                <div className=" ms-auto me-5"><Link className="btn btn-success btn-md form-control p-2 px-2 text-white rounded-pill" to="/contact" style={{ padding: "65px" }}> Subscribe</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 text-center mb-4'>
                        <img src={icon1} alt="icon" />
                        <img src={icon2} alt="icon" />
                        <img src={icon3} alt="icon" />
                        <img src={icon4} alt="icon" />
                        <img src={icon5} alt="icon" />
                    </div>
                    <div className='text-center text-white'>
                        <p className='mb-5'>Copyright ©2024 All rights reserved | Made by Subhan</p>
                    </div>
                </div>
            </div>
    )
}

export default Footer