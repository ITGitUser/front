import React from  'react'
import styles from './ButtonAdd.module.scss'

const ButtonAdd = ({text, callback})=>{
    return(
        <div className={styles.WrapperButtonAdd}>
            <button onClick={callback}>{text}</button>
        </div>
    );

}

export default ButtonAdd;