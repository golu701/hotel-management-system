import React, {useState} from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Style from "../styles/login.module.scss";
import Axios from "axios";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:8000/login", {
            password: values.password,
            email: values.email,
        }).then((res) => {
            const results = res.data;
            localStorage.setItem("token", results['token'])
            toast.success("Balle balle ji")
        }).catch((err) => {
            toast.error("gayo ji ")
        });
    }

    return (
        <>
            <Navbar/>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <div className={Style.login}>
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className={Style.form_group}>
                        <label htmlFor="email">Email <span>*</span></label><br/>
                        <input type="email" name="email" id="email" value={values.email} onChange={handleChange}/>
                    </div>

                    <div className={Style.form_group}>
                        <label htmlFor="password">Password <span>*</span></label><br/>
                        <input type="password" name="password" id="password" value={values.password}
                               onChange={handleChange}/>
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
            <Footer/>
        </>
    )
}
