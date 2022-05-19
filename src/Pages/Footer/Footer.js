import React from 'react';
import { FcSmartphoneTablet } from 'react-icons/fc';
import { BsFacebook, BsYoutube, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className=' bg-dark'>
            <div className='container forFlex text-light p-5'>
                <div className='respoAlingn'>
                    <h3>TO-DO-APP <FcSmartphoneTablet></FcSmartphoneTablet></h3>
                </div>
                <div className='container ms-5 overflow-hidden'>
                    <div className='row g-3'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
                            <h2 style={{ color: 'rgb(255, 196, 0)' }}>Our Links</h2>
                            <ul className='nav flex-column forHover'>
                                <li className='nav-item mb-2'><Link to='/home' className='nav-link p-0 text-light '>Home</Link></li>
                                <li className='nav-item mb-2'><Link to='/login' className='nav-link p-0  text-light'>Log In</Link></li>
                                <li className='nav-item mb-2'><Link to='/blogs' className='nav-link p-0 text-light'>Blogs</Link></li>
                                <li className='nav-item mb-2'><Link to='/unknown' className='nav-link p-0 text-light'>Recent Deliver</Link></li>

                            </ul>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
                            <h2 style={{ color: 'rgb(255, 196, 0)' }}>About Us</h2>
                            <ul className='nav flex-column forHover'>
                                <li className='nav-item mb-2'><Link to='/feedback' className='nav-link p-0 text-light '>Give Feedback</Link></li>
                                <li className='nav-item mb-2'><Link to='/contactus' className='nav-link p-0  text-light'>Contact Us</Link></li>
                                <li className='nav-item mb-2'><Link to='/about' className='nav-link p-0 text-light'>About</Link></li>
                                <li className='nav-item mb-2'><Link to='/help' className='nav-link p-0 text-light'>Get Help</Link></li>

                            </ul>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
                            <h2 style={{ color: 'rgb(255, 196, 0)' }}>Social Links</h2>
                            <ul className='nav flex-column forHover'>
                                <li className='nav-item mb-2'><Link to='/home' className='nav-link p-0 text-light '><BsFacebook className='forcolor'></BsFacebook> Facebook</Link></li>
                                <li className='nav-item mb-2'><Link to='/login' className='nav-link p-0  text-light'> <BsYoutube className='forcolor'></BsYoutube> Youtube</Link></li>
                                <li className='nav-item mb-2'><Link to='/blogs' className='nav-link p-0 text-light'><BsTwitter className='forcolor'></BsTwitter> Twitter</Link></li>
                                <li className='nav-item mb-2'><Link to='/unknown' className='nav-link p-0 text-light'><BsLinkedin className='forcolor'></BsLinkedin> LinkIn</Link></li>

                            </ul>
                        </div>



                    </div>

                </div>
            </div>
            <p className='text-light text-muted text-center pb-3 mb-0'><small>copyright &copy; {year} All rights reserved by PhoneFetch</small></p>
        </div>
    );
};

export default Footer;