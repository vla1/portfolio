import React from "react";

import styles from './navbar.module.scss';

const Navbar = ({scrollToAbout, scrollToProject }) => {
    return (
        <div className={styles['navbar-container']}>
            <button onClick={scrollToAbout}>Sobre mí</button>
            <button onClick={scrollToProject}>Proyectos</button>
        </div>
    )
}


export default Navbar;