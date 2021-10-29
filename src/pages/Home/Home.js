import { faCalendarPlus, faCar, faCommentsDollar, faDollarSign, faHeart, faMapMarked } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import About from '../About/About';
import Package from '../Package/Package';
import './Home.css'

const Home = () => {
    const calenderIcon = <FontAwesomeIcon icon={faCalendarPlus}></FontAwesomeIcon>
    const dolarIcon = <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
    const heartIcon = <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
    const mapIcon = <FontAwesomeIcon icon={faMapMarked}></FontAwesomeIcon>
    const carIcon = <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
    const chatIcon = <FontAwesomeIcon icon={faCommentsDollar}></FontAwesomeIcon>

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div>
            <Carousel className='banner'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image-size"
                        src="https://cdn.pixabay.com/photo/2018/08/19/10/16/nature-3616194__340.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Fill The Nature !</h3>
                        <p>Be Ready For a Hill tour and Explore yourself.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image-size"
                        src="https://cdn.pixabay.com/photo/2015/10/12/15/01/mountain-984083__340.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Mountain</h3>
                        <p>You can go Mountain and see the sun set and fell the view!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image-size"
                        src="https://cdn.pixabay.com/photo/2016/07/30/00/03/winding-road-1556177__340.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Sea and hill Together</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container my-5">
                <div className="row py-4">
                    <h1 className='text-center'>Why Choose Us ?</h1>
                    <p className='text-center'>Experience and Trustworthiness. · Friendly and Qualified Stuff. · Best Price, no Hidden Fees. · The Variety of Tours and Programs.</p>
                    <div className="col-lg-4 col-md-6 col-12 p-4">
                        <div className="d-flex">
                            <span className='icon-style'>{calenderIcon}</span>
                            <div>
                                <h4>Easy Booking</h4>
                                <p>our plane are as that as simple you can visit our website any time and book running Package of tour!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 p-4">
                        <div className="d-flex">
                            <span className='icon-style'>{dolarIcon}</span>
                            <div>
                                <h4>value for money</h4>
                                <p>our plane are as that as simple you can visit our website any time and book running Package of tour!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 p-4">
                        <div className="d-flex">
                            <span className='icon-style'>{heartIcon}</span>
                            <div>
                                <h4>Passionate Travel</h4>
                                <p>our plane are as that as simple you can visit our website any time and book running Package of tour!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 p-4">
                        <div className="d-flex">
                            <span className='icon-style'>{mapIcon}</span>
                            <div>
                                <h4>Awesome Place</h4>
                                <p>our plane are as that as simple you can visit our website any time and book running Package of tour!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 p-4">
                        <div className="d-flex">
                            <span className='icon-style'>{carIcon}</span>
                            <div>
                                <h4>Divers Destination</h4>
                                <p>our plane are as that as simple you can visit our website any time and book running Package of tour!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 p-4">
                        <div className="d-flex">
                            <span className='icon-style'>{chatIcon}</span>
                            <div>
                                <h4>24 / 7 Support</h4>
                                <p>our plane are as that as simple you can visit our website any time and book running Package of tour!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row my-5">
                    <h1 className='text-center'>Popular Packages</h1>
                    {
                        packages.map(pack => <Package
                            key={pack.id}
                            pack={pack}
                        ></Package>)
                    }
                </div>
                <hr />
            </div>

            <About></About>
        </div>
    );
};

export default Home;