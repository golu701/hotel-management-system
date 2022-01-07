import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "../styles/navbar.scss"

function Navbar() {

    const [active, setActive] = useState(false);

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        let data = localStorage.getItem('token');
        setLoggedIn(data !== null);
    }, []);

    const toggleClass = () => {
        setActive(!active)
    }

    const logout = () => {
        setLoggedIn(false);
        localStorage.clear();
    }

    return (
        <>
            <nav>
                <Link to="/">
                    <i className="fas fa-hotel"/>
                </Link>
                <i className={active ? "fas fa-bars menu" : "fas fa-times menu"} onClick={toggleClass}/>

                <ul>
                    <li className="nav-item">
                        <Link to="/" className="nav-links">
                            <i className="fa fa-home"> </i>Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links">
                            <i className="fa fa-info-circle"/> About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/rooms" className="nav-links">
                            <i className="fas fa-door-closed"/> Rooms
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/gallery" className="nav-links">
                            <i className="fas fa-image"/> Gallery
                        </Link>
                    </li>

                    {!loggedIn ? <>
                            <li className="nav-item nav-mobile">
                                <Link to="/signup" className="nav-links-mobile"
                                >
                                    <i className="fas fa-user-plus"/> Sign Up
                                </Link>
                            </li>
                            <li className="nav-item nav-mobile">
                                <Link
                                    to="/login"
                                    className="nav-links-mobile"
                                >
                                    <i className="fas fa-sign-in-alt"/> Login
                                </Link>
                            </li>
                        </> :
                        <>
                            <Link to="/">
                                <li className="nav-item" onClick={logout}>
                                    <i className="fas fa-sign-out-alt"/> Log out
                                </li>
                            </Link>
                        </>
                    }

                </ul>
            </nav>
        </>
    )
}

export default Navbar;
