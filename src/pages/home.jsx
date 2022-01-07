import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import style from "../styles/home.module.scss"

export default function Home() {

    return (
        <>
            <Navbar />
            {/*<div className="main"/>*/}
            <div>
                <img className={style.image} src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="image1"/>
                <img className={style.image} src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="image1"/>
                <img className={style.image} src="/img/info.jpg" alt="image1"/>
            </div>
            <Footer/>
        </>
    )
}
