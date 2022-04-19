import React,{ useEffect } from 'react'
import styles from "./Technologies.module.css";
import gsap from "gsap";
import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import bootstrap from '../../assets/bootstrap.jpg';
import python from '../../assets/python.png';
import motion from '../../assets/motion.png';
import mysql from '../../assets/mysql.png';
import django from '../../assets/django.jpg'
import django_rest from '../../assets/django_rest.png';
import vs_code from '../../assets/vs_code.jpg';
const Gasp = () => {
    useEffect(() =>{
        const divs = document.querySelectorAll(".testimonials")
        gsap.set(divs[1], {x:100, opacity:1});

        gsap
        .timeline({repeat: -1, defaults:{duration:3}})

        .add("one")
        .to(divs[0], {y:600, x:0, opacity: 0.05}, "one")
        .to(divs[1], {y:-350, x:0, opacity: 0.05}, "one")
        .to(divs[2], {y:-450, x:100, opacity: 1}, "one")

        .add("two")
        .to(divs[0], {y:300, x:100, opacity: 1}, "two")
        .to(divs[1], {y:300, x:0, opacity: 0.05}, "two")
        .to(divs[2], {y:-600, x:100, opacity: 0.05}, "two")

        .add("three")
        .to(divs[0], {y:0, x:0, opacity: 0.05}, "three")
        .to(divs[1], {y:0, x:100, opacity: 1}, "three")
        .to(divs[2], {y:0, x:0, opacity: 0.05}, "three")

    },)

  return (
    <div className={styles.content}>
        <h1 className="gradient__text">TECHNOLOGIES I USED AND EXPERIENCED!</h1>
        <div className="testimonials">
            <div className={styles.container}>
                <div>
                    <img
                        className={styles.img}
                        alt="javascript"
                        src={javascript}
                     />
                </div>
                <div>
                    <img
                        className={styles.img}
                        alt="html"
                        src={html}
                     />
                </div>
                <div>
                    <img
                        className={styles.img}
                        alt="css"
                        src={css}
                     />
                </div>
                <div>
                    <img
                        className={styles.img}
                        alt="react"
                        src={react}
                     />
                </div>
                
            </div>
        </div>
        <div className="testimonials">
            <div className={styles.container}>
                <div>
                    <img
                        className={styles.img}
                        alt="person"
                        src={bootstrap}
                     />
                </div>
                <div>
                    <img
                        className={styles.img}
                        alt="person"
                        src={vs_code}
                     />
                </div> 
                <div>
                    <img
                        className={styles.img}
                        alt="person"
                        src={motion}
                     />
                </div> 
            </div>
        </div>
        <div className="testimonials">
            <div className={styles.container}>
                <div>
                    <img
                        className={styles.img}
                        alt="person"
                        src={python}
                     />
                </div>
                <div>
                    <img
                        className={styles.img}
                        alt="person"
                        src={mysql}
                     />
                </div>
                <div>
                    <img
                        className={styles.img}
                        alt="person"
                        src={django}
                     />
                </div>
                <div>
                    <img
                        className={styles.img}
                        alt="person"
                        src={django_rest}
                     />
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Gasp;