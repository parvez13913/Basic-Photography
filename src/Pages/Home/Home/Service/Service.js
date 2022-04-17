import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const navigate = useNavigate();
    const handelBookButton = () => {
        navigate('/checkout');
    }
    const {name,picture,reviews} = service;
    return (
        <div className=' d-grid col-sm-12 col-md-6 col-lg-4'>
            <Card>
              <Card.Img variant="top" src= {picture} />
              <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                    {reviews}
                   </Card.Text>
              </Card.Body>
              <Button onClick={handelBookButton} className='w-100' variant="primary">Book Now</Button>
            </Card>
        </div>
    );
};

export default Service;