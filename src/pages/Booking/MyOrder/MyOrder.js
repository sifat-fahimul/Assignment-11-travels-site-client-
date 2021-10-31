import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './MyOrder.css'

const MyOrder = () => {
    const [trips, setTrips] = useState([])
    console.log(trips);
    useEffect(() => {
        fetch('https://still-garden-06650.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setTrips(data))
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('are you sure to delete this item')
        if (proceed) {
            const url = `https://still-garden-06650.herokuapp.com/delete/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully')
                        const remaining = trips.filter(trip => trip._id !== id);
                        setTrips(remaining)
                    }
                })
        }

    }
    return (
        <div className='container py-5 my-5 text-center'>
            <h1>My Trips</h1>
            <div className=" my-5">
                <div className='row custom'>
                    {
                        trips.map(trip => <div key={trip._id} >
                            {trip.title && trip.img &&
                                < div >
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={trip.img} />
                                        <Card.Body>
                                            <Card.Title>{trip.title}</Card.Title>
                                            <Card.Text>{trip.description}
                                            </Card.Text>
                                            <button onClick={() => handleDelete(trip._id)} className='btn btn-danger px-4 me-4'>Delete</button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            }

                        </div>)
                    }
                </div>
            </div>

        </div >
    );
};

export default MyOrder;