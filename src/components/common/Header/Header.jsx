import React from 'react'
import styles from './Header.module.scss'


const Header = ()  =>{
 
 

    return (
    <div className={styles.header}>
        <div className={styles.searchWrapper}></div>
        <div className={styles.infoWrpaper}>
            <button>settings</button>
            <button>notific</button>
            <button>profile</button>
        </div>
    </div>);
};

export default Header;