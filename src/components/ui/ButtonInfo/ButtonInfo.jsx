import React, { useEffect, useRef, useState } from "react";
import styles from './ButtonInfo.module.scss'
import InfoSVG from '../../../images/dots-vertical.svg'
import cn from "classnames";

const ButtonInfo =({arrayButtonObj, isDisabled=false, children}) => {
   const [isOpen, setIsOpen] = useState(false);
    const componentRef = useRef(null);

 
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if ( componentRef.current && !componentRef.current.contains(event.target)) {
                setIsOpen(false);
            }
          };
      document.addEventListener('mousedown', handleOutsideClick, true);

      return () => {
        document.removeEventListener('mousedown', handleOutsideClick, true);
      };
    }, []);

    const toggleDropdown = () => {
        setIsOpen( !isOpen);
      };
      
    return(
       <div ref={componentRef} className={styles.wrapperButtonInfo}>
         <button className={styles.ButtonInfo} onClick={toggleDropdown}>
         <img 
                key={`info img`}
                src={InfoSVG} 
                alt={"info"}
                draggable={false}
                />
                </button>
                {isOpen && (
                    <div>
                    <div className={styles.triangle}></div>
                <div className={cn(styles.DropDownList,{[styles.DropDownListVisible]:isOpen===true})}>
                    {arrayButtonObj.map((button, id)=>{
                        return isDisabled?<button key={id} disabled>{button.name}</button>:
                        <button key={id} onClick={()=>{setIsOpen(false); button.callback()}}>{button.name}</button>
                    })}
                    
                    <button>#2</button>
                    <button>#3</button>
                    
                {children}
                </div>
                </div>
                )}
       </div>
    );
    
    
}
export default ButtonInfo;