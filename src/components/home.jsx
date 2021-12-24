import React, {useEffect, useState} from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "../styles/home.scss"

export default function Home() {

    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        let data = localStorage.getItem('token');
        setLoggedIn(data !== undefined);
    }, []);

    return(
        <>
            <Navbar loggedIn={loggedIn}/>

            <div className="main">

            </div>

            <Footer/>
        </>
    )
}
