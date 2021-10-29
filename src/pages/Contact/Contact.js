import { faClinicMedical, faLocationArrow, faMapMarkedAlt, faPhoneAlt, faUserMd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    const doctorIcon = <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>
    const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
    const medicalIcon = <FontAwesomeIcon icon={faClinicMedical}></FontAwesomeIcon>
    return (
        <div>
            <div className="container my-5">
                <h1>Contact Us</h1>
                <div className="row">
                    <div className="col-8 my-4">
                        <h5>Contact us anytime</h5>
                        <p className='custom-border'></p>
                        <h2>SEND US YOUR COMMENTS</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name </Form.Label>
                                <Form.Control className='rounded-pill bg-light' required type="text" placeholder="Type your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className='rounded-pill bg-light' required type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control className='rounded-pill bg-light' required type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder='Type your comment' />
                            </Form.Group>
                            <button className='btn btn-primary px-3'>Submit</button>
                        </Form>
                    </div>
                    <div className="col-4 text-center">
                        <div className='my-4'>
                            <span className='contact-circle text-white fs-1 text-center' >{medicalIcon}</span>
                            <h5 className='mt-4'>EMERGENCY CONTACT</h5>
                            <small>Free call 24/7 </small><br />
                            <small>+1555 6761 020</small>
                        </div>
                        <div className='my-4'>
                            <span className='contact-circle text-white fs-1 text-center' >{doctorIcon}</span>
                            <h5 className='mt-4'> VISIT OFFICE</h5>
                            <small>WE ARE ONLINE  24/7  </small><br />
                            <small>DHAKA 1200, BANGLADESH</small>
                        </div>
                        <div className='my-4'>
                            <span className='contact-circle text-white fs-1 text-center' >{phoneIcon}</span>
                            <h5 className='mt-4'>PHONE CONTACT</h5>
                            <small>Within working hours  </small><br />
                            <small>+1555 6761 020</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;