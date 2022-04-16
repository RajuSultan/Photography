import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, comment, price, picture } = service;
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 '>
            <div className=''>
                <img style={{ height: "300px" }} className='w-100' src={picture} alt="" />
            </div>
            <div className=''>
                <p>{price}</p>
                <h3>{name}</h3>
                <p>{comment}</p>
                <button type="button" className="btn btn-primary"><Link className='text-decoration-none text-white' to={`/checkout/${id}`}>Check Out</Link> </button>

            </div>

        </div>
    );
};

export default Service;