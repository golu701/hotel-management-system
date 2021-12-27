import React, {useState} from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import style from "../styles/login.module.scss";
import Axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Signup() {

    const [values, setValues] = useState({
        email: "",
        password: "",
        first_name: '',
        last_name: '',
        phone: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        console.log(values)
        e.preventDefault();
        Axios.post("http://localhost:8000/register", {
            first_name: values.first_name,
            last_name: values.last_name,
            phone: values.phone,
            password: values.password,
            email: values.email,
        }).then((res) => {
            toast.success("balle balle Registration successful!");
        }).catch((err) => {
            toast.error("Balle balle error pa gaya ")
        });

    }


    return(
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
            <div className={style.login}>
                <form onSubmit={handleSubmit}>
                    <h2>Registration </h2>
                    <div className={style.form_group}>
                        <label htmlFor="name">First Name <span>*</span></label><br/>
                        <input type="text" name="first_name" id="name" value={values.first_name} onChange={handleChange}/>
                    </div>
                    <div className={style.form_group}>
                        <label htmlFor="last_name">Last Name <span>*</span></label><br/>
                        <input type="text" name="last_name" id="last_name" value={values.last_name} onChange={handleChange}/>
                    </div>
                    <div className={style.form_group}>
                        <label htmlFor="phone">Phone <span>*</span></label><br/>
                        <input type="number" name="phone" id="phone" value={values.phone} onChange={handleChange}/>
                    </div>
                    <div className={style.form_group}>
                        <label htmlFor="email">Email <span>*</span></label><br/>
                        <input type="email" name="email" id="email" value={values.email} onChange={handleChange}/>
                    </div>

                    <div className={style.form_group}>
                        <label htmlFor="password">Password <span>*</span></label><br/>
                        <input type="password" name="password" id="password" value={values.password} onChange={handleChange}/>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
            <Footer/>
        </>
    )
}
