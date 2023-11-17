import React from "react";
import styles from './Team.module.scss';
import { DataUsers } from "../dataUsers";
import { DataPro } from "../data";
import AvatarUsers from "../../ui/AvatarUsers/AvatarUsers";
import Icons from "../../common/Layout/LayoutSVG";
const Team=({projectID})=>{
    
    const drawTeam=()=>{
        return  <div className={styles.container}>
       { DataPro.find((project)=>(project.idProject===projectID))?.users.map((us, id)=>(
                
                <button key={id}>
                    <AvatarUsers className={styles.AvatarUsers} count="1" arrayUsersId={[us]}/>
                    <div className={styles.user}>
                        <div className={styles.userName}>{DataUsers.find((user)=>(user.id===us))?.name}</div>
                        <div className={styles.containerStatus}>
                            {DataUsers.find((user)=>(user.id===us))?.status?
                            <>
                            <Icons name="dot" color="#16bb92" size="13px"/>
                            <span className={styles.userStatus}>Online - 08:23:26</span>
                            </>
                            :
                            <>
                            <Icons name="dot" color="#e0e0e8" size="13px"/>
                            <span className={styles.userStatus}>Offline - 08:23:26</span>
                            </>
                            }
                        </div>
                    </div>
                    <div>
                        <Icons name="arrow-down" color="#6a6d74" size="24px"/>
                    </div>
                </button>
                
            
        ))}
        </div>
        
    };

    return(
        <>
        <div className={styles.MembersProject}>
            <span className={styles.head}>Команда</span>
                {drawTeam()}
        </div>
        </>
    );
}

export default Team;