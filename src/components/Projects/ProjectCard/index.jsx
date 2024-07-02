import React from "react";
import icon from '../../../assets/icon/enlace.png'
import styles from './projectcard.module.scss'

const ProjectCard = ({ project }) => {
    return (
        <div className={styles['project-container']}>
            <div className={styles['image-wrapper']}>
                <a href={project.url}>
                    <img src={project.img} />
                </a>
            </div>
            <div className={styles['info-wrapper']}>
                <p>{project.title}</p>
                <a href={project.url}> <img src={icon} />Link</a>
            </div>
        </div>
    )
}

export default ProjectCard;