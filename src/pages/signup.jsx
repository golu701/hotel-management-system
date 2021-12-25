import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


export default function Signup() {
    return(
        <>
            <Navbar/>
            <div className="login-main">
                <form>
                    <h2>Registration </h2>
                    <div className="form-group">
                        <label htmlFor="name">Name <span>*</span></label><br/>
                        <input type="text" name="name" id="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone <span>*</span></label><br/>
                        <input type="number" name="phone" id="phone"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email <span>*</span></label><br/>
                        <input type="email" name="email" id="email"/>
                    </div>

                    <div className="form-group">
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
