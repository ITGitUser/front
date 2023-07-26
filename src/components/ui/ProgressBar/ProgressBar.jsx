import React from "react";
import styles from './ProgressBar.module.scss';
import ic from '../../../images/office-building.svg'
const ProgressBar=({name, progress, icon=ic})=>{

return(
    <div className={styles.wrapperProgressBar}>
        <div className={styles.IconProgressBar}><img src={icon} alt="иконка" draggable={false}/></div>
        <div className={styles.wrapperBar}>
            <div className={styles.NameProgressBar}>{name}</div>
            <div className={styles.ProgressBar}><div className={styles.Progress} style={{width: progress+'%'}}></div></div>
        </div>
        <div className={styles.complete}>{progress}% выполнено</div>
    </div>
);
}

export default ProgressBar;