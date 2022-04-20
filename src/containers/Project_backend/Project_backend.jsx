import React from 'react'
import { motion } from 'framer-motion';
import {useRef, useEffect, useState} from "react";
import './Project_backend.css';
import project_images from '../../assets/backend_projects';
import { Typewriter } from "react-simple-typewriter";

const ProjectCard = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);

    return (
        <div className="main_carousel">
            <h1 className="gradient__text">
                <Typewriter
                loop
                cursor
                cursorStyle="_"
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={1000}
                words={['Backend Projects.', 'Build in Django.', 'with Mysql server.']}
                />
            </h1>
            <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
                <motion.div 
                    drag="x"
                    dragConstraints={{ right: 0, left: -width}}
                    className="inner-carousel"
                >
                {project_images.map(image => {
                    return(
                        <motion.div className="item">
                        <img src={image} alt="" />
                        </motion.div>
                    );
                })}
                </motion.div>
            </motion.div>
        </div>
    )
}
export default ProjectCard;