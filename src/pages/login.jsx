import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Style from "../styles/login.module.scss";
import axios from "axios";

export default function Login() {
    //
    // const login = () => {
    //
    // }
    //
    // let formData = new FormData();
    // formData.append('')

    return (
        <>
            <Navbar/>
            <div className={Style.login}>
                <form method="POST" >
                    <h2>Login</h2>
                    <div className={Style.form_group}>
                        <label htmlFor="email">Email <span>*</span></label><br/>
                        <input type="email" name="email" id="email"/>
                    </div>

                    <div className={Style.form_group}>
                        <label htmlFor="password">Password <span>*</span></label><br/>
                        <input type="password" name="password" id="password"/>
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
            <Footer/>
        </>
    )
}
