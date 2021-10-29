import { faFacebookSquare, faInstagramSquare, faLinkedinIn, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const fbIcon = <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
    const twIcon = <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
    const instaIcon = <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
    const linkedIcon = <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
    return (
        <div className='footer-container'>
            <div className="container">
                <div className="py-5 row">
                    <div className="col-lg-4 col-md-6 col-12 p-4">
                        <h4 className='text-white'>This is Ural Travels</h4>
                        <p className='gray'>Ural Travels is equipped with everythig required for an amazing campground business website. Set up camp now.</p>
                        <h4 className='text-white'>Get Social </h4>
                        <span className='fs-4 gray px-2'>{fbIcon}</span>
                        <span className='fs-4 gray px-2'>{twIcon}</span>
                        <span className='fs-4 gray px-2'>{instaIcon}</span>
                        <span className='fs-4 gray px-2'>{linkedIcon}</span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 p-4">
                        <h4 className='text-white'>Contact Us</h4>
                        <p className='gray'>A: Via Dhaka, Bangladesh.</p>
                        <p className='gray'>P: +154 487 225 </p>
                        <p className='gray'>App: Viber, WhatsApp</p>
                        <p className='gray'>E: UralTravels@gmail.com</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 p-4">
                        <h4 className='text-white'>Links</h4>
                        <Link className='text-decoration-none gray' to='/home'><p>Home</p></Link>
                        <Link className='text-decoration-none gray' to='/about'><p>About</p></Link>
                        <Link className='text-decoration-none gray' to='/contact'><p>Contact Us</p></Link>

                    </div>
                </div>

                <div className="d-flex justify-content-sm-between border-top pt-3 px-5">
                    <p className='gray px-5'>Terms of Use | Privacy Policy</p>
                    <p className='gray px-5'>© 2021 Ural Travels, All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;