import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Package = ({ pack }) => {
    const { title, img, description, id } = pack;

    // const handleBookBtn=()=>{

    // }

    return (
        <div className='col-lg-4 col-md-6 col-12 py-4'>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                    <Link to={`/booking/${id}`}><button className='btn btn-primary px-3'>Book Now</button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Package;