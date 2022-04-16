import React, { useEffect, useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../Firebase.init';
import Loading from '../../../Loading/Loading';


const Resistation = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification(email);
        alert('Sent email for verification');
        await updateProfile({ displayName: name });

        console.log(name, email, password);
    }
    useEffect(() => {
        if (user) {
            navigate('/');
            console.log(user);
        }
    }, [user])

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
                {
                    loading || sending || updating ? <Loading></Loading>
                        :
                        ""
                }
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className='d-flex container align-items-center'>
                <div style={{ height: "1px" }} className='bg-primary w-50 '></div>
                <span className='d-block px-2 fs-3'>or</span>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
            </div>
            <button className='btn shadow py-2 px-5 mb-5 bg-body rounded-pill text-primary'>Google SignIn</button>
        </div>
    );
};

export default Resistation;