import React, { useState } from "react";
import styles from './Card.module.scss'
import CommentsSVG from '../../../images/comment-dots.svg'
import ViewsSVG from '../../../images/eye.svg'
import AttachSVG from '../../../images/attachment.svg'
import ButtonInfo from "../ButtonInfo/ButtonInfo";
import ModalWindow from "../../common/ModalWindow/ModalWindow";
import SubTasks from "../SubTasks/SubTasks";
import Icons from "../../common/Layout/LayoutSVG";
import AvatarUsers from "../AvatarUsers/AvatarUsers";
import DataTags from "../../pages/dataTag";

const Card = ({cardObj, index, color}) => {
    const[modalActive, setModalActive]=useState(false);

        return(

            <div>
                <div className={styles.wrapperCard} >
                <div className={styles.cardHeaderInfo}>
                    <p style={{
                        color:DataTags.find((tag)=>tag.id===cardObj.tag)?.textColor,
                        background: DataTags.find((tag)=>tag.id===cardObj.tag)?.backgroundColor
                        }}>{DataTags.find((tag)=>tag.id===cardObj.tag)?.name}
                    </p>
                    <ButtonInfo arrayButtonObj={[
                        {
                            name:"Удалить",
                            callback: ()=>{}
                        }
                    ]}>
                    </ButtonInfo>
                </div>
                <div className={styles.cardBody} onClick={()=>{setModalActive(true)}}>
                    <div className={styles.cardHeaderBody}>
                        <p>{cardObj.Label}</p>
                    </div>
                    <p>{cardObj.text}</p>
                    <div><SubTasks objectSubTasks={cardObj.subTasks} type="small"/></div>
                </div>
                <div className={styles.cardFooter}>
                    <div className={styles.wrapperCardFooterAvatar}><AvatarUsers count={4} arrayUsersId={cardObj.members}/></div>
                    <div className={styles.wrapperCardFotterInfo}>
                        <button>
                            <img 
                            key={`view img`}
                            src={ViewsSVG} 
                            alt={"views"}
                            draggable={false}
                            />
                            {cardObj.views}</button>
                        <button>
                            <img 
                            key={`com img`}
                            src={CommentsSVG} 
                            alt={"comments"}
                            draggable={false}
                            />{cardObj.comments}</button>
                        <button>
                        <img 
                            key={`attach img`}
                            src={AttachSVG} 
                            alt={"attachment"}
                            draggable={false}
                            />{cardObj.files}</button>
                    </div>
                </div>
                <ModalWindow  active={modalActive} setActive={setModalActive}>
                    <div className={styles.headerModalWindowAboutCard}>
                        <span className={styles.headerLabel}>
                        <Icons name="dot" color={color} size="30px"/>
                        <h2>{cardObj.Label}</h2>
                        </span>
                        
                        <div><p style={{
                        color:DataTags.find((tag)=>tag.id===cardObj.tag)?.textColor,
                        background: DataTags.find((tag)=>tag.id===cardObj.tag)?.backgroundColor
                        }}>{DataTags.find((tag)=>tag.id===cardObj.tag)?.name}
                    </p></div>
                    </div>
                    <div>
                    {cardObj.text}
                    </div>
                    <div className={styles.wrapperSubTasks}>
                        <SubTasks objectSubTasks={cardObj.subTasks} type="open"/>
                    </div>
                    <div className={styles.cardFotterModal} >
                    <div className={styles.WrapperCardDateInfo}>{cardObj.date.toLocaleString()}</div>
                    <div className={styles.wrapperCardFotterInfo}>
                        <button>
                            <img 
                            key={`view img`}
                            src={ViewsSVG} 
                            alt={"views"}
                            draggable={false}
                            />
                            {cardObj.views}</button>
                        <button>
                            <img 
                            key={`com img`}
                            src={CommentsSVG} 
                            alt={"comments"}
                            draggable={false}
                            />{cardObj.comments}</button>
                        <button>
                        <img 
                            key={`attach img`}
                            src={AttachSVG} 
                            alt={"attachment"}
                            draggable={false}
                            />{cardObj.files}</button>
                    </div>
                </div>
            </ModalWindow>
            </div>          
            
            </div>
        );
};

export default Card;