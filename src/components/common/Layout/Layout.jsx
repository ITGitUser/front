import React, { useState } from "react";
import styles from './Layout.module.scss';
import cn from 'classnames';
import {useLocation, useNavigate} from 'react-router-dom'
const Layout=({children})=>{
    const navigate = useNavigate();
    const [activeButtonMenu, setActiveButtonMenu]=useState(0);
    const isAuth=true;
    const buttonsObj=[{
        name:'but',
        path: '',
        img: '',
    },{
        name:'but',
        path: '/projects',
        img: '',
    },{
        name:'but',
        path: '',
        img: '',
    },{
        name:'but',
        path: '',
        img: '',
    },{
        name:'but',
        path: '',
        img: '',
    },{
        name:'but',
        path: '',
        img: '',
    },{
        name:'but',
        path: '',
        img: '',
    }];
    const drawButton=(array)=>{
        let buttons=[];
        for (let i = 0; i < array.length; i++) {
                buttons.push(<button key={i} className={cn({
                    [styles.active]:activeButtonMenu === i
                })} onClick={()=>{navigate(array[i].path); setActiveButtonMenu(i)}}>but</button>)
            
        }
        return buttons;
    };
    return(
        <div className={styles.layoutWrapper}>
            <div className={styles.mainMenu}>
                <div>
                    <img src="" alt="Logo" />
                </div>
                <div className={styles.mainButton}>

                {drawButton(buttonsObj)}
                    
                </div>
                <div>
                    {isAuth&& <button>but</button>}
                   
                </div> 
            </div>
            <div className={styles.wrapperContent}>
                {children && <div className={styles.content}>{children}</div>}
            </div>
        </div>
    );
}

export default Layout;