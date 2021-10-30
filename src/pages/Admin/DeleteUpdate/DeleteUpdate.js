import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const DeleteUpdate = () => {
    const [trips, setTrips] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/trip')
            .then(res => res.json())
            .then(data => setTrips(data))
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/delete/${id}`;
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

    return (
        <div className='container py-5 my-5 text-center'>
            <h1>manage Trip</h1>
            <div className=" my-5">
                <div className='row'>
                    {
                        trips.map(trip => <div key={trip._id} className="col-lg-3 col-md-6 col-12" >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={trip.img} />
                                <Card.Body>
                                    <Card.Title>{trip.title}</Card.Title>
                                    <Card.Text>{trip.description}
                                    </Card.Text>
                                    <button onClick={() => handleDelete(trip._id)} className='btn btn-danger px-4 me-4'>Delete</button>
                                    <button className='btn btn-success px-4 ms-4'>Update</button>
                                </Card.Body>
                            </Card>

                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default DeleteUpdate;