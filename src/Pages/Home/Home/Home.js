import React from 'react';
import Banner from '../Banner/Banner';
import UsersReview from '../UsersReview/UsersReview';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='mb-3'>
            <Banner/>
            <Services/>
            <UsersReview/>
        </div>
    );
};

export default Home;