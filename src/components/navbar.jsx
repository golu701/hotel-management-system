import React from "react";
import {Link} from "react-router-dom";
import "../styles/navbar.scss"

function Navbar(props) {
    // const [loggedIn, setLoggedIn] = useState(false);

    // useEffect(() => {
    //     let data = localStorage.getItem('token');
    //     setLoggedIn(data !== undefined);
    // }, []);

    let mobile = true;
    const changeMobile = () => {
        mobile = !mobile;
    }

    const logout = () => {
        localStorage.clear();
        props.setLogValue();
    }

    return (
        <>
            <nav>
                <Link to="/">
                    <i className="fas fa-hotel"/>
                </Link>
                <i className="fas fa-bars menu" onClick={changeMobile}/>
                <i className="fas fa-times cross"/>

                <ul className={mobile ? 'pc' : "mobile"}>
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

                    {!props.loggedIn ? <>
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
                    </> : <li className="nav-item" onClick={logout}>
                        <i className="fas fa-sign-out-alt"/> Log out
                    </li>}

                </ul>
            </nav>
        </>
    )
}

export default Navbar;
