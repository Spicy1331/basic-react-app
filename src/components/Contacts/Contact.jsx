import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
export const Contact=()=>{
    return(
     <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
                <a href="mailto:sparshisingh034@gmail.com">Gmail</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon"/>
                <a href="https://www.linkedin.com/in/sparshi-singh-088128282/">LinkedIn</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="github icon"/>
                <a href="https://github.com/Spicy1331">Github</a>
            </li>
        </ul>
    </footer>
    );
};