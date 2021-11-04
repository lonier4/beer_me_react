import React from "react";
import { Link } from 'react-router-dom';
import '../Navbar.css';
import {BsSearch} from 'react-icons/bs';

const Navbar = (props) => {
    const userID = props.user.id

    const logUserOut = () => {
        props.setUser({
            'id': null,
            'username': null,
            'email': null,
            'date_created': null
        })
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Beer Me</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/allbeers" >All Beers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Random Beers</Link>
                        </li>
                        {
                            (
                                userID ?
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" onClick={logUserOut}>Sign Out</Link>
                                    </li>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/signin">Sign In</Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link" to="/signup">Sign Up</Link>
                                        </li>
                                    </>
                            )
                        }


                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Types of Beer
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">IPAs</a></li>
                                <li><a className="dropdown-item" href="/">Lagers</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/">Stouts</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
                        
                        <p><BsSearch size="25px" color="white"/></p>
                        
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;