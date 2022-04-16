import React from 'react';

const Service = ({ service }) => {
    const { name, comment, price, picture } = service;
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 '>
            <div className=''>
                <img style={{ height: "300px" }} className='w-100' src={picture} alt="" />
            </div>
            <div className=''>
                <p>{price}</p>
                <h3>{name}</h3>
                <p>{comment}</p>
                <button type="button" className="btn btn-primary">Check Out</button>

            </div>

        </div>
    );
};

export default Service;