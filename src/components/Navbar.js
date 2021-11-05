import React from "react";
import { Link } from 'react-router-dom';
import '../Navbar.css';
import {IoBeerOutline} from 'react-icons/io5';
import SearchBox from "./SearchBox";
import SearchCards from "./SearchCards";

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
                <Link className="navbar-brand" to="/"><IoBeerOutline size="40px" color="orange"/></Link>
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
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/searchresults">Search Beers</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/favorite_beers">Favorite Beers</Link>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center mt-4 mb-4 authUser">
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
                    <SearchBox userInput={props.userInput} setUserInput={props.setUserInput}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;