import React, { useState } from 'react'
import styles from './Header.module.scss'
import setingsSVG from '../../../images/settings-outline.svg';
import notificSVG from '../../../images/notification-outline.svg';
import SearchInput from '../../ui/SearchInput/SearchInput';
import AvatarUsers from '../../ui/AvatarUsers/AvatarUsers';
import { DataUsers } from '../../pages/dataUsers';
const Header = ()  =>{
 const[seacrhWord, setSearchWord]=useState('');
 const userID= 1001;
    return (
    <div className={styles.header}>
        <div className={styles.searchWrapper}>
            <SearchInput word={seacrhWord} setWord={setSearchWord}/>
        </div>
        <div className={styles.infoWrpaper}>
            <button>
            <img             
                src={setingsSVG} 
                alt={"settings"}
                draggable={false}
            />
            </button>
            <button className={styles.buttonNotific} data-count="7">
            <img             
                src={notificSVG} 
                alt={"notific"}
                draggable={false}
            />
            </button>
            <button className={styles.wrapperButtonProfile}><AvatarUsers count={1} arrayUsersId={[userID]}/><p>{DataUsers.find((user) => user.id === userID)?.name}</p></button>
        </div>
    </div>);
};

export default Header;