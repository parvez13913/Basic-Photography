import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({service}) => {
    console.log(service)
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
                   <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
        </div>
    );
};

export default Service;