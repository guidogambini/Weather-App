import React from "react";
import styles from "./About.module.css";
import image from "./link.png"

export default function About() {
    return (
        <>  
            <div className={styles.bg-image}></div>
            <div className={styles.text}>
                <p  className={styles.parrafo} >Hi! how you doing? I'm Guido Gambini and i would appreciate if you dedicate a few minutes of your time visiting first React App.
                    This single page <br />application meant to me a lot because it represented my first little step towards the Web Full Stack Devoloper trip.
                    I really expect you to enjoy this<br /> Weather App built up by using React-Redux. It was a pleasure...</p>
            </div>
            <div className={styles.linkedin}>
                <a  href="https://www.linkedin.com/in/guido-gambini-183a641a2/" target="_blank" >
                <img className={styles.img} src={image} />
                </a>
            </div>
        </>
    );
}