import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import { signOut } from "firebase/auth";

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>


                    </ul>
                    <form className="d-flex">
                        {
                            user ?
                                <Link onClick={() => signOut(auth)} className="nav-link active" aria-current="page" to="/signin">SignOut</Link>
                                :
                                <Link className="nav-link active" aria-current="page" to="/signin">SignIn</Link>
                        }


                        <Link className="nav-link active" aria-current="page" to="/resistation">Resistation</Link>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;