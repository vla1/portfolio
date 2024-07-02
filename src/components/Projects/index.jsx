import React from "react";
import ProjectCard from "./ProjectCard";
import imgElectro from '../../assets/images/electroraiguer.png'
import imgFacturada from '../../assets/images/facturada.png'
import imgLavisualtv from '../../assets/images/lavisualtv.png'
import imgTalia from '../../assets/images/talia.png'

import styles from './projects.module.scss';

const Projects = () => {

    const projs = [
        {
            title: 'Electro Raiguer',
            url: 'https://electroraiguer.com/es',
            img: imgElectro,
        },
        {
            title: 'Factur-Ada',
            url: 'https://factur-ada.com/es',
            img: imgFacturada,
        },
        {
            title: 'Talía Espectáculos',
            url: 'https://crm.taliaespectaculos.com/',
            img: imgTalia,
        },
        {
            title: 'LaVisual TV',
            url: 'https://www.lavisualtv.com/',
            img: imgLavisualtv,
        },
    ]

    return (
        <div className={styles['projects-container']}>
            <h2>Proyectos</h2>
            {
                projs.map((project, index)=>(
                    <ProjectCard project={project} key={index}/>
                ))
            }
        </div>
    )
}


export default Projects;