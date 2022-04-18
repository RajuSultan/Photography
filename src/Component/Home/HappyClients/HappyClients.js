import React from 'react';
import img4 from '../../images/img4.avif';
import img5 from '../../images/img5.avif';
import img6 from '../../images/img6.avif';
import './happyClints.css';

const HappyClients = () => {
    return (
        <div className='client-section container my-5'>
            <h1 className='text-center text-primary'>Happy Clients</h1>
            <div className='d-flex align-aitems-center'>

                <div className='my-5 row g-4 container'>
                    <div style={{ maxWidth: "350px" }} className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='rounded shadow'>
                            <div style={{ height: "150px", width: "150px", borderRadius: "50%" }} className="d-block mx-auto happyimg">
                                <img className='w-100 mt-4' src={img6} alt="" />
                            </div>
                            <div className='text-center pb-2'>
                                <h3>Dorado Khabn</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusantium doloremque ullam consectetur labore voluptatum fuga, quasi earum esse laudantium unde debitis suscipit facere excepturi ratione aliquam ex,</p>
                                <p><small>Rattings: 4/5</small></p>
                            </div>
                        </div>

                    </div>
                    <div style={{ maxWidth: "350px" }} className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='rounded shadow'>
                            <div style={{ height: "150px", width: "150px", borderRadius: "50%" }} className="d-block mx-auto happyimg">
                                <img className='w-100 mt-4' src={img4} alt="" />
                            </div>
                            <div className='text-center pb-2'>
                                <h3>Rido Keite</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusantium doloremque ullam consectetur labore voluptatum fuga, quasi earum esse laudantium unde debitis suscipit facere excepturi ratione aliquam ex,</p>
                                <p><small>Rattings: 3/5</small></p>
                            </div>
                        </div>

                    </div>
                    <div style={{ maxWidth: "350px" }} className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='rounded shadow'>
                            <div style={{ height: "150px", width: "150px", borderRadius: "50%" }} className="d-block mx-auto happyimg">
                                <img className='w-100 mt-4' src={img5} alt="" />
                            </div>
                            <div className='text-center pb-2'>
                                <h3>Kebin shield</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusantium doloremque ullam consectetur labore voluptatum fuga, quasi earum esse laudantium unde debitis suscipit facere excepturi ratione aliquam ex,</p>
                                <p><small>Rattings: 5/5</small></p>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        </div>
    );
};

export default HappyClients;