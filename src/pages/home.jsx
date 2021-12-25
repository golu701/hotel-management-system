import React, {useEffect, useState} from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/home.scss"

export default function Home() {

    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        let data = localStorage.getItem('token');
        setLoggedIn(data === undefined);
    }, []);

    return (
        <>
            <Navbar loggedIn={loggedIn} setLogValue={setLoggedIn}/>

            <div className="main"/>

            <div className="info">
                {/* <img  alt="" /> */}
                <img src="/img/info.jpg" alt="" id="info_img" />

            </div>

            <Footer/>
        </>
    )
}
