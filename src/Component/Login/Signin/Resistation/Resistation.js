import React, { useRef } from 'react';

const Resistation = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(name, email, password);
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='w-50 mx-auto my-5'>
                <h1 className='text-center text-primary'>Please Resister</h1>
                <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input ref={nameRef} type="text" className="form-control" id="" aria-describedby="emailHelp" placeholder='Your name' />

                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your email' />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" >Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Resistation;