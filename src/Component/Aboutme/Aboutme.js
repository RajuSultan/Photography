import React from 'react';

const Aboutme = () => {
    return (
        <div>
            <div className='w-75 my-5  mx-auto row g-4'>
                <div className='col-lg-6 col-sm-12 d-flex align-items-center'>
                    <div>
                        <h1> I AM DENIAL BROCK
                        </h1>
                        <h1 className='fs-3'>A PROFESSIONAL PHOTOGRAPHER</h1>
                        <p>“When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.”</p>
                        <button type="button" class="btn btn-primary px-5 py-2 shadow">Hire Me</button>
                    </div>
                </div>
                <div className=' col-lg-6 col-sm-12'>
                    <img className='w-100' style={{ height: "500px" }} src="https://images.unsplash.com/photo-1618886614638-80e3c103d31a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>

            </div>
            <div className='w-75 my-5  mx-auto row g-4'>
                <div className='col-lg-6 col-sm-12'>
                    <img className='w-100' style={{ height: "500px" }} src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className='col-lg-6 col-sm-12 d-flex align-items-center'>
                    <div>
                        <h1> My Story
                        </h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                        <p className='fs-3'>I Do Photography since I was 18 Years Old</p>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <button type="button" class="btn btn-primary px-5 py-2 shadow">Details</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Aboutme;