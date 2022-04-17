import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, comment, price, picture } = service;
    return (
        <div className='col-lg-4 col-md-6 col-sm-12  '>
            <div className='shadow bg-white rounded'>
                <div className=''>
                    <img style={{ height: "300px" }} className='w-100 rounded' src={picture} alt="" />
                </div>
                <div style={{ height: "270px" }} className='mt-3  d-flex flex-column justify-content-between'>
                    <div className='mx-2'>
                        <h3>{name}</h3>
                        <p className='text-warning fs-5'>{price}</p>
                        <p>{comment}</p>
                    </div>
                    <div>
                        <button type="button" className="btn rounded btn-primary w-100"><Link className='text-decoration-none text-white' to={`/checkout/${id}`}>Check Out</Link> </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Service;