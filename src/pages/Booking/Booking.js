import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/booking/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [id])

    return (
        <div className='container '>
            <div className=" py-5 my-5 text-center">
                <h1>{details.title}</h1>
                <div><img className='w-75' src={details.img} alt="" /></div>
                <p>{details.description}</p>
                <Link to={`/order/${id}`}><button className='btn btn-outline-primary px-4'>Book Now</button></Link>
            </div>
        </div>
    );
};

export default Booking;