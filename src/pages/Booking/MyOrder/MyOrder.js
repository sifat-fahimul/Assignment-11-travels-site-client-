import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MyOrder = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/booking/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [id])
    return (
        <div className='container'>
            <h1>here my order</h1>
        </div>
    );
};

export default MyOrder;