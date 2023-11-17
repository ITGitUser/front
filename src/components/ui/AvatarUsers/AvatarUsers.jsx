import React from "react";
import styles from './AvatarUsers.module.scss';
import { DataUsers } from "../../pages/dataUsers";
import Icons from "../../common/Layout/LayoutSVG";
const AvatarUsers=({count, arrayUsersId})=>{
    const drawAvatar=()=>{
        let arrayDivUsers=[];
        for (let index = 0; index < count; index++) {
            if (!arrayUsersId[index]) {
                
            }else{
                const color=DataUsers.find((user) => user.id === arrayUsersId[index])?.backgroundColor;
                arrayDivUsers.push(<div key={arrayUsersId[index]} style={{backgroundColor: color}} className={styles.wrapperAvatarUsersView}><Icons name="userAvatar" color={"#969696"} size="32.5px"/></div>)
            } 
        }
        if(arrayUsersId.length>count){
            arrayDivUsers.splice(count-1, 1);
            arrayDivUsers.push(<div key={arrayUsersId.length} className={styles.wrapperAvatarUsersMore}><p>+{(arrayUsersId.length-count+1)}</p></div>)
        }
        return arrayDivUsers;
    };
    return (
        <div className={styles.wrapperAvatarUsers}>
            {drawAvatar()}
        </div>
    );
}

export default AvatarUsers;