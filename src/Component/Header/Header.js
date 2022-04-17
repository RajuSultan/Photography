import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import { signOut } from "firebase/auth";
import logo from '../../Component/images/logo.png'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <nav className="sticky-top  navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand m-0" to="/"><img style={{ width: '150px', height: "66px" }} src={logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto fs-4  mb-2 mb-lg-0 ms-5">
                        <li className="nav-item  me-3">
                            <Link className="nav-link text-white active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item me-3 ">
                            <Link className="nav-link active text-white" aria-current="page" to="/aboutme">About</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link active text-white" aria-current="page" to="/blogs">Blogs</Link>
                        </li>


                    </ul>
                    <form className="d-flex fs-4 text-white">
                        {
                            user ?
                                <Link onClick={() => signOut(auth)} className="nav-link text-white active" aria-current="page" to="/signin">SignOut</Link>
                                :
                                <Link className="nav-link text-white active" aria-current="page" to="/signin">SignIn</Link>
                        }


                        <Link className="nav-link text-white active" aria-current="page" to="/resistation">Resister</Link>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;