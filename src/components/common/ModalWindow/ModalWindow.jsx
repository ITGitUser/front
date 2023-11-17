import React from "react";
import styles from './ModalWindow.module.scss'
import cn from 'classnames'
const ModalWindow=({nameWindow, active, setActive, children})=>{
    
    return(
        <div className={cn(styles.modalWindow,{[styles.modalWindowActive]:active})}
             onClick={()=>{setActive(false)}}>
            <div className={styles.modalContent} onClick={e=>e.stopPropagation()}>
                {nameWindow?<h2>{nameWindow}</h2>:""}
            {children}
            </div>
          
        </div>
    );
}

export default ModalWindow;