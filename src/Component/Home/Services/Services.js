import React, { useEffect, useState } from 'react';
import Service from './Service/Service'


const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    // console.log(services);
    return (
        <div className='container'>
            <h1 className='text-center my-5 text-primary'>Packages</h1>
            <div className='row g-4'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;