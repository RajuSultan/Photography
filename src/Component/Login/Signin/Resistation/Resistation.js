import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useEffect, useRef } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../Firebase.init';
import Loading from '../../../Loading/Loading';
import github from '../../../images/github.png'
import google from '../../../images/google.png'


const Resistation = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [
        createUserWithEmailAndPassword,
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

    const provider = new GoogleAuthProvider();
    const handleGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }
    useEffect(() => {
        if (user) {
            navigate('/');
            console.log(user);
        }
    }, [user]);


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
            <div className='d-flex justify-content-center container'>
                <div>
                    <button style={{ padding: "10px 100px" }} onClick={handleGoogle} className='btn shadow fs-3   mb-5 bg-body rounded-pill text-primary my-3'><img src={google} alt="" /> Google SignUp</button><br />
                    <button style={{ padding: "10px 100px" }} onClick={() => signInWithGithub()} className='btn shadow  fs-3 mb-5 bg-body rounded-pill text-primary mb-5'> <img src={github} alt="" /> Github SignUp</button>
                </div>
            </div>
        </div>
    );
};

export default Resistation;