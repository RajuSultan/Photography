import React, { useEffect, useState } from 'react';


import { useParams } from 'react-router-dom';



const Checkout = () => {
    const services = [
        {
            "id": "6249e38417e4dcfd1d8e06de1",
            "price": "$1,000",
            "picture": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "name": "Wedding photo session - Titanium package",
            "comment": "“ Includes 12 hours of photography, a second photographer, complimentary engagement shoot, online gallery for sharing, and professional editing.”"
        },
        {
            "id": "6249e3847a3ac857c525c8a9",
            "price": "$700",
            "picture": "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "name": "Wedding photo session - Platinum package",
            "comment": "“Includes 10 hours of photography, complimentary engagement shoot, online gallery for sharing, and professional editing.” "
        },
        {
            "id": "6249e3845a55e6a86b18e6c9",
            "price": "$500",
            "picture": "https://images.unsplash.com/photo-1583939411023-14783179e581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "name": "Wedding photo session - Gold package",
            "comment": " Includes 8 hours of photography, complimentary engagement shoot, online gallery for sharing, and professional editing. ” "
        },
        {
            "id": "6249e3849d3516a6764b0cda",
            "price": "$1000",
            "picture": "https://images.unsplash.com/photo-1560238970-cc0ae073d3a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "name": "Personal photo session - Titanium package",
            "comment": "“Includes 12 hours of photography, a second photographer, complimentary engagement shoot, online gallery for sharing, and professional editing.”"
        },
        {
            "id": "6249e38417514c194a2375ab",
            "price": "$700",
            "picture": "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "name": "Personal photo session - Platinum package",
            "comment": "“Includes 10 hours of photography, complimentary engagement shoot, online gallery for sharing, and professional editing.”"
        },
        {
            "id": "6249e38417514c194a2375fdgab",
            "price": "$500",
            "picture": "https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "name": "Personal photo session - Gold package",
            "comment": "“ Includes 8 hours of photography, complimentary engagement shoot, online gallery for sharing, and professional editing. ”"
        }
    ];

    const { id } = useParams()

    let singleId;
    singleId = services.find(service => service.id === id);
    const { name, comment, picture, price } = singleId;

    return (
        <div className='container'>
            <h1 className="text-center mt-5 text-primary ">{name}</h1>
            <p className="fs-4 my-5">Our four photography package levels can be fully customized. When you tour, your coordinator will create a custom package that fits your vision and budget. Plus, with an all-inclusive wedding package, you get peace of mind knowing you’ll have WAY less planning to do.</p>
            <div className="border container shadow rounded">
                <div className='w-100 d-flex justify-content-center '>
                    <img src={picture} alt="" />
                </div>
                <div className="text-center">
                    <h2>{name}</h2>
                    <p>{price}</p>
                    <p>{comment}</p>
                    <button className="px-5 py-3 mb-4 btn btn-primary ">Book</button>
                </div>
            </div>

        </div>
    );
};

export default Checkout;