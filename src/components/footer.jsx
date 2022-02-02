import React from "react";
import style from "../styles/footer.module.scss";


export default function Footer() {
    return (
        <>
            <footer className={style.footer}>
                <div>
                    <p>&copy;2022 All Rights Reserved0</p>

                </div>

                <div>
                    <p>Company </p>

                    <p>About us</p>
                    <p>Hotels</p>
                    <p>Customers</p>
                    <p>Care</p>
                    <p>Contact Us</p>
                </div>

                <div>
                    <p>Our Facilities</p>

                    <p>Restaurant</p>
                    <p>Bars</p>
                    <p>Pick-up</p>
                    <p>Swimming</p>
                    <p>Pool</p>
                    <p>Spa</p>
                    <p>Gym</p>
                </div>

                <div>
                    <p>Subscribe</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid fuga nihil ratione, repellat
                        repellendus vel!</p>
                    <input type="search" placeholder="Email Address"/> <span>Send</span>
                </div>

                <div >
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x "/>
                      <i className="fab fa-twitter fa-stack-1x fa-inverse"/>
                    </span>
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"/>
                      <i className="fab fa-facebook fa-stack-1x fa-inverse"/>
                    </span>
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"/>
                      <i className="fab fa-instagram fa-stack-1x fa-inverse"/>
                    </span>
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"/>
                      <i className="fab fa-linkedin fa-stack-1x fa-inverse"/>
                    </span>
                </div>

            </footer>
        </>
    )
}
