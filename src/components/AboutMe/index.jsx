import React from "react";
import img from '../../assets/images/foto.png';
import icon from '../../assets/icon/enlace.png';
import styles from './aboutMe.module.scss';

const AboutMe = () => {
    return (
        <div className={styles['presentation-container']}>
            <img src={img} />
            <div className={styles['presentation-wrapper']}>
                <h2>Hola, soy Vladyslav Pyven Godz </h2>
                <p>Soy full-stack developer, entusiasta en formar parte de equipos que ayudan y crean de una idea en
                    una aplicación para mejorar y ayudar en el día a día de las personas.</p>
                <a href="https://www.linkedin.com/in/vladyslav-pyven-godz/"> <img src={icon} />Linkedin</a>
            </div>
        </div>
    )
}

export default AboutMe;