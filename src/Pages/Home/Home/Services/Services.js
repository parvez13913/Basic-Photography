import React from 'react';
import useServices from '../../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices([]);
    return (
        <div className='container'>
            <h1 className='text-center my-4'> Our Services</h1>
            <div className='row g-4'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service = {service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;