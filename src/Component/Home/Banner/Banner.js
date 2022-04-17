import React from 'react';
import img4 from '../../images/img4.avif';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src='https://images.unsplash.com/photo-1595407753234-0882f1e77954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' className="d-block w-100" alt="..." />
                        <div style={{ marginBottom: "30%" }} className="carousel-caption d-none d-md-block  d-flex align-items-center ">
                            <div className='d-block'>
                                <h5 className='fs-1'>Wellcome Photo World</h5>
                                <p>Our multinational customer support team is always here to help you with choosing and booking your package and dealing with vendors.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
                        <div style={{ marginBottom: "30%" }} className="carousel-caption d-none d-md-block  d-flex align-items-center ">
                            <div className='d-block'>
                                <h5 className='fs-1'>Wellcome Photo World</h5>
                                <p>Our multinational customer support team is always here to help you with choosing and booking your package and dealing with vendors.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/flagged/photo-1620830102229-9db5c00d4afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
                        <div style={{ marginBottom: "30%" }} className="carousel-caption d-none d-md-block  d-flex align-items-center ">
                            <div className='d-block'>
                                <h5 className='fs-1'>Wellcome Photo World</h5>
                                <p>Our multinational customer support team is always here to help you with choosing and booking your package and dealing with vendors.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;