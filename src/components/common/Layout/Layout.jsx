import React, { useEffect, useMemo, useState} from "react";
import styles from './Layout.module.scss';
import cn from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';
import Icons from "./LayoutSVG";

const Layout = ({children }) => {
  const navigate = useNavigate();
  const[activeMainMenu, setActiveMainMenu]=useState(parseInt(localStorage.getItem("activeMainMenuButtonIndex_Layout")));
  const location = useLocation();
  const isAuth = true;

  const buttonsObj =  useMemo(
    () =>[
    { name: 'but', path: '/', img: 'menuSVG' },
    { name: 'but', path: '/projects', img: 'columnSVG' },
    { name: 'but', path: '/timer', img: 'timerSVG' },
    { name: 'but', path: '/calendar', img: 'calendarSVG' },
    { name: 'but', path: '/statistic', img: 'statsAltSVG' },
    { name: 'but', path: '/messages', img: 'messagesAltSVG' },
    { name: 'but', path: '/about', img: 'questionCircleSVG' }
  ]
  ,
    []
  );
  
  const handleButtonClick = (index) => {
        navigate('../'+buttonsObj[index].path);  
  };
  
  const drawButtons = () => {
    return buttonsObj.map((button, index) => (
      <button
        key={index}
        className={cn({
            [styles.active]:activeMainMenu === index
                })}
        onClick={() => handleButtonClick(index)}
      >
        <Icons 
        name={button.img}
        color={(activeMainMenu === index)?"#365EFD":"#9a9c9e"}
        size="24px"
       />
       
      </button>
    ));
  };

    // Обновление activeIndex на основе пути в адресной строке
    useEffect(() => {
        const buttonIndex = buttonsObj.findIndex((button) => button.path === location.pathname|| location.pathname.startsWith(button.path + "/"));
        setActiveMainMenu(buttonIndex);
        localStorage.setItem("activeMainMenuButtonIndex_Layout", activeMainMenu.toString());
      }, [location.pathname, setActiveMainMenu, buttonsObj, activeMainMenu]);

  return (
     <div className={styles.layoutWrapper}>
        <div className={styles.mainMenu}>
          <div className={styles.wrapperLogo}>
            <Icons name="logo" size="50px"/>
          </div>
          <div className={styles.mainButton}>{drawButtons()}</div>
          <div style={{margin:'0 0 10px 0'}} className={styles.logoutDivSVG}>{isAuth && <button>
            <Icons 
        name={"logout"}
        color={"#9a9c9e"}
        size="24px"
       />
            </button>}</div>
        </div>
        <div className={styles.wrapperContent}>
          {children && <div className={styles.content}>{children}</div>}
        </div>
      </div>
    
  );
};

export default Layout;