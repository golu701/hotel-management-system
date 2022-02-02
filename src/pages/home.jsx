import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import style from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <img className={style.image} src="/img/info.jpg" alt="image1" />
        <div className={style.about}>
          <img src="/img/info.jpg" alt="about image" />
          <div>
            <h2>About Hotel</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad,
              architecto beatae consequatur debitis doloribus eos fuga, fugiat
              id laudantium maxime minus molestias nam nisi nulla officiis omnis
              perspiciatis quam rerum sed unde vero voluptatibus. Aliquam
              assumenda atque dolore eaque eius.
            </p>
          </div>
        </div>

        <div className={style.status}>
          <div>
            <h2>2012</h2>
            <p>User access</p>
          </div>
          <div>
            <h2>2012</h2>
            <p>rooms</p>
          </div>
          <div>
            <h2>2012</h2>
            <p>transactions</p>
          </div>
          <div>
            <h2>2012</h2>
            <p>rating & reviews</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
