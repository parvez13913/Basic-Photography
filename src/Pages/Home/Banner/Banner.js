import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner-1.png';
import banner2 from '../../../images/banner/banner-2.png';
import banner3 from '../../../images/banner/banner-3.png';

const Banner = () => {
    return (
        <div>
            <Carousel>
               <Carousel.Item interval={1000}>
                   <img
                     className="d-block w-100"
                     src= {banner1}
                     alt="First Banner"
                   />
                 <Carousel.Caption>
                   <h3>First slide label</h3>
                   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                 </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src= {banner2}
                    alt="Second banner"
                  />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src= {banner3}
                    alt="Third banner"
                  />
               <Carousel.Caption>
                 <h3>Third slide label</h3>
                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
               </Carousel.Caption>
               </Carousel.Item>
           </Carousel>
        </div>
    );
};

export default Banner;