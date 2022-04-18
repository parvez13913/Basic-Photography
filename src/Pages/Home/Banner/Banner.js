import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner-1.jpg';
import banner2 from '../../../images/banner/banner-2.jpg';
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
                   <h3>Cate & Matt - Zest </h3>
                   <p>Just wanted to say thank you so so much for being a part of our special day. </p>
                 </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src= {banner2}
                    alt="Second banner"
                  />
                <Carousel.Caption>
                  <h3>Kathy & Neal - Moby Dicks Whale Beach</h3>
                  <p>Amazing, thank you so much for the photos. They look great and we love them so much!</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src= {banner3}
                    alt="Third banner"
                  />
               <Carousel.Caption>
                 <h3>Marc and Steph - Long Reef Golf Club</h3>
                 <p>Thank you for all your help leading up to and on our wedding day!</p>
               </Carousel.Caption>
               </Carousel.Item>
           </Carousel>
        </div>
    );
};

export default Banner;