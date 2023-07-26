import React, { useState } from "react";
import styles from './Card.module.scss'
import CommentsSVG from '../../../images/comment-dots.svg'
import ViewsSVG from '../../../images/eye.svg'
import AttachSVG from '../../../images/attachment.svg'
import ButtonInfo from "../ButtonInfo/ButtonInfo";
import ModalWindow from "../../common/ModalWindow/ModalWindow";
import { Draggable } from '@hello-pangea/dnd';

const Card = ({cardObj, index}) => {
    const[modalActive, setModalActive]=useState(false);

        return(

            <div><Draggable draggableId={cardObj.id} index={index}>
            {(provided) => (
              <div
                className="task"
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <div className={styles.wrapperCard} >
                <div className={styles.cardHeaderInfo}>
                    <p>{cardObj.tag}</p>
                <ButtonInfo></ButtonInfo>
                </div>
                <div className={styles.cardBody} onClick={()=>{setModalActive(true)}}>
                    <div className={styles.cardHeaderBody}>
                        <p>{cardObj.Label}</p>
                    </div>
                    <p>{cardObj.text}</p>
                </div>
                <div className={styles.cardFooter}>
                    <div>mem.</div>
                    <div>
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
                <ModalWindow nameWindow={cardObj.Label} active={modalActive} setActive={setModalActive}>
                <div>
                    {cardObj.text}
                </div>
            </ModalWindow>
            </div>
              </div>
            )}
          </Draggable>
            
            </div>
        );
};

export default Card;