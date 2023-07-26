import React, { useState } from "react";
import ButtonInfo from "../../ui/ButtonInfo/ButtonInfo";
import DotSVG from '../../../images/dot.svg'
import DotBlueSVG from '../../../images/dot-blue.svg'
import DotYellowSVG from '../../../images/dot-yellow.svg'
import DotGreenSVG from '../../../images/dot-green.svg'
import ButtonAdd from "../../ui/ButtonAdd/ButtonAdd";
import Card from "../../ui/Card/Card";
import styles from './GroupCards.module.scss'
import Field from '../../ui/Field/Field'
import ModalWindow from "../ModalWindow/ModalWindow";
import { Droppable } from '@hello-pangea/dnd';
const GroupCards=({column, board, refreshBoard, index})=>{
    const[modalActive, setModalActive]=useState(false);
    const[nameTask, setNameTask]=useState('');
    const[textTask, setTextTask]=useState('');
    const[columnState, setColumnState]=useState(column);
    let svg;
    switch (column.status) {
        case 'to_do':
            svg=DotSVG;
        break;
        case 'in_progress':
            svg=DotBlueSVG;
        break;
        case 'need_review':
            svg=DotYellowSVG;
        break;
        case 'done':
            svg=DotGreenSVG;
        break;
        default:
            break;
    }
    const drawHeaderList=()=>{
        let count= board.columns[index].taskIds.length;
        return(<div className={styles.Status}>
                <div><img 
                    src={svg} 
                    alt={"dot"}
                    draggable={false}/>
                <span>{column.name}</span>
                <span className={styles.countCards}>{count}</span>
                </div>
                <div><ButtonInfo/></div>   
            </div>);
    };
    const drawCard=(col)=>{
        let i=0;
        return (
            col.taskIds?.map((taskId)=>(
                <Card key={taskId} cardObj={board.cards.find(card=>card.id===taskId)} index={i++}/>  
            ))
        );

                
    
    };
    const handleSubmit = e => {
        e.preventDefault();
    };
    const AddTask=(nameTask, textTask)=>{
        const card={
            Label: nameTask,
            text: textTask,
            members: "alice",
            comments: "0",
            views: "0",
            files: "0",
            tag: "testTag",
            date: "create date",
            status: column.status,
            id_column: column.id,
            id: String(10+board.cards.length+1),
        };

        const newTaskIds= Array.from(column.taskIds);
        newTaskIds.push(card.id);

        const newColumn = {
            ...column,
            taskIds: newTaskIds,
          };
          setColumnState(newColumn);

        const newColumns= [
            ...board.columns,
        ];
        newColumns.splice(index, 1, newColumn);
          const newBoard = {
            ...board,
            columns: [
              ...newColumns
            ],
            cards: [
                ...board.cards,
                card]
            }


        refreshBoard(newBoard);
        
    };
    return(
        <div>
              {drawHeaderList()}
              <ButtonAdd text='+ Добавить новую задачу' callback={()=>{setModalActive(true)}}/>
              <Droppable droppableId={column.status}>
        {(provided) => (
          <div
            className="task-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {drawCard(columnState)}
          {provided.placeholder}
           
          </div>
        )}
      </Droppable>



              <ModalWindow nameWindow='Новая задача' active={modalActive} setActive={setModalActive}>
              <form action="" onSubmit={handleSubmit}>
                <Field
                placeholder = 'Введите заголовок...'
                value = {nameTask}
                onChange = {e => setNameTask(e.target.value)}
                required/>
                <Field
                placeholder = 'Введите текст задачи...'
                value = {textTask}
                onChange = {e => setTextTask(e.target.value)}
                typeInput='textarea'
                required/>
                <ButtonAdd text='Добавить' callback={()=>{if(nameTask!==''&&textTask!==''){AddTask(nameTask, textTask);setModalActive(false)}}}></ButtonAdd>
            </form>
            </ModalWindow>
        </div>
    )
}
export default GroupCards;