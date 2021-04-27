import React from 'react';
import ReactTypingEffect from "react-typing-effect";
import styles from './banner.module.css'
const Banner = () => {
    return (
        <div className={styles.container}>
             <img className={styles.image} src="https://github.com/adrianhajdin/project_corona_tracker/blob/master/src/images/image.png?raw=true" alt="Covid-19"/>
             <h4 className={styles.text} ><ReactTypingEffect text={["Updated Stats Of COVID-19"]} /></h4>
             
        </div>
    );
};

export default Banner;