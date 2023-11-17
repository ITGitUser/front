import React from "react";
import styles from './AllTime.module.scss';
import Icons from "../../common/Layout/LayoutSVG";
const AllTime=()=>{
    let counter=2.5;
    let boolIndex=true;
    return(
        <>
        <div className={styles.Time}>
            <span className={styles.textTime}>Время</span> 
                <div className={styles.containerTime}>
                    <div className={styles.text}><span>ОБЩЕЕ ВРЕМЯ</span></div>
                    <div className={styles.hours}><span>23.7 часа</span></div>
                    {boolIndex?
                    <div className={styles.graph}><Icons name="graph-up" color="#3bb699" size="18px"/><span style={{color: "#3bb699"}}> {counter}%</span ><span className={styles.text}> с прошлой недели</span></div>:
                    <div className={styles.graph}><Icons name="graph-down" color="#f78a88" size="18px"/><span style={{color: "#f78a88"}}> {counter}%</span ><span className={styles.text}> с прошлой недели</span></div>
                    }
                    
                </div>
                </div>
        </>
    );
}
export default AllTime;