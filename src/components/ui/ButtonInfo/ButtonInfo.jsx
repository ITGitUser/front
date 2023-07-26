import React from "react";
import styles from './ButtonInfo.module.scss'
import InfoSVG from '../../../images/dots-vertical.svg'

const ButtonInfo =() => {
    return(
        <button className={styles.ButtonInfo} onClick={()=>{console.log('he3')}}>
    <img 
                key={`info img`}
                src={InfoSVG} 
                alt={"info"}
                draggable={false}
                />
    </button>
    );
    
    
}
export default ButtonInfo;