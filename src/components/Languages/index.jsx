import React from "react";
import iconCss from '../../assets/icon/css3.png';
import iconJS from '../../assets/icon/javascript.png';
import iconMDB from '../../assets/icon/mongoDB.png';
import iconNode from '../../assets/icon/node.png';
import iconReact from '../../assets/icon/react.png';
import iconScss from '../../assets/icon/scss.png'
import styles from './languages.module.scss';

const Languages = () => {
    const langs = [
        iconReact, iconJS, iconCss, iconScss, iconNode, iconMDB
    ]
    return (
        <div className={styles['languages-container']}>
            <h2>Lenguajes</h2>
            <div className={styles['languages-wrapper']}>
            {
                langs.map((lang, index) => (
                    <img key={index} src={lang} />
                ))
            }
            </div>
        </div>
    )
}

export default Languages;