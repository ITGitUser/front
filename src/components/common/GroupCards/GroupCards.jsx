import React, {  useState } from "react";
import Select from 'react-select';
import ButtonInfo from "../../ui/ButtonInfo/ButtonInfo";
import ButtonAdd from "../../ui/ButtonAdd/ButtonAdd";
import Card from "../../ui/Card/Card";
import styles from './GroupCards.module.scss'
import Field from '../../ui/Field/Field'
import ModalWindow from "../ModalWindow/ModalWindow";
import { Draggable, Droppable } from '@hello-pangea/dnd';
import Icons from "../Layout/LayoutSVG";
import DataTags from "../../pages/dataTag";

const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected}) => {
      return {
        ...styles,
         backgroundColor: (isFocused || isSelected)? isSelected?"rgba(6, 50, 228, 0.9)":"rgba(6, 50, 228, 0.4)" : 'white',
      };
    },
    
  };

const GroupCards=({column, colID, board, refreshBoard, index, type='row'})=>{
    const[modalActive, setModalActive]=useState(false);
    const[modalAlertActive, setModalAlertActive]=useState(false)
    const[nameTask, setNameTask]=useState('');
    const[SubTask, setSubTask]=useState('');
    const[textTask, setTextTask]=useState('');
    const[currentTag, setCurrentTag]=useState({});
    const[currentArraySubTasks, setCurrentArraySubTasks]=useState([]);

    



    const DeleteColumnFromBoard=()=>{
        let arrayColumn=board.columns;
        let arrayCards=board.cards;
        arrayColumn[index].taskIds?.map((task)=>(
            arrayCards.splice(board.cards.findIndex((card)=>card.id===task), 1)
        ));
        arrayColumn.splice(index, 1);
        const newBoard = {
            ...board,
            columns: [
              ...arrayColumn
            ],cards:[
                ...arrayCards
            ]
            }
            refreshBoard(newBoard);
    };
    const openAlert=()=>{
        setModalAlertActive(true);
            };
            
    const drawHeaderList=()=>{
        let count= board.columns[index]?.taskIds.length;
        return(<div className={styles.Status}>
                <div><Icons name='dot' color={board.columns[index]?.color} size='15px'></Icons>
                    
                <span>{column.name}</span>
                <span className={styles.countCards}>{count}</span>
                </div>
                <div>
                    {column.status!=='done'?<ButtonInfo  arrayButtonObj={[
                    {name:"Удалить",
                     callback:openAlert,
                    },
                    ]}>
                    
                    </ButtonInfo>:
                    <ButtonInfo isDisabled={true} arrayButtonObj={[
                        {name:"Удалить",
                         callback:()=>{},
                        },
                        ]}>
                        
                        </ButtonInfo>}
                    </div>   
            </div>);
    };

    const drawCard=()=>{
        let i=0;
        return (
            column?.taskIds?.map((taskId, ind)=>(
                <Draggable key={taskId} draggableId={taskId} index={ind}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                   
                  >
                    <Card 
                key={taskId} cardObj={board?.cards?.find(card=>card.id===taskId)} index={i++} color={column.color}/>  
                    {/* Ваш код для отображения карточки */}
                  </div>
                )}
              </Draggable>
                
            ))
        );

                
    
    };
    const handleSubmit = e => {
        e.preventDefault();
    };
    const AddTask=(nameTask, textTask, tagID, arrayST)=>{
        let arr=[];
        arrayST.map((ST)=>(
            arr.push({
                name:ST,
                done: false,
            })
            
        ));
        const card={
            Label: nameTask,
            text: textTask,
            members: [1001],
            comments: "0",
            views: "0",
            files: "0",
            tag: tagID,
            date: new Date(),
            status: column.status,
            id_column: colID,
            id: Date.now().toString(),
            subTasks:{
                done: false,
                arrayTasks:arr,
            }
        };

        const newTaskIds= Array.from(column.taskIds);
        newTaskIds.push(card.id);

        const newColumn = {
            ...column,
            taskIds: newTaskIds,
          };

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
        
            <div className={type==='row'?styles.wrapperHeaderColumnTypeRow:styles.wrapperHeaderColumnTypeColumn}>
              {drawHeaderList()}
              
              <ButtonAdd text='+ Добавить новую задачу' callback={()=>{setModalActive(true)}}/>
              </div>
              <Droppable droppableId={colID}  type="CARD">
            {(provided, snapshot) => {
               
              return (
                <div
                className={type==='row'?styles.wrapperColumnTypeRow:styles.wrapperColumnTypeColumn}
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                    border: snapshot.isDraggingOver ? '1px dashed transparent' : '1px dashed transparent',
                    borderRadius:'5px'
                  }}
              >
                
                {drawCard( )}
                {provided.placeholder}
            
              </div>
              );
            }}
      </Droppable>
      
    {modalAlertActive?<ModalWindow active={modalAlertActive} setActive={setModalAlertActive}>
                <div>
                    <h3>Вы действительно хотите удалить колонку "{column.name}"?</h3>
                </div>
                <div className={styles.modalAlertButtons}>
                <button className={styles.buttonConfirm} onClick={()=>{DeleteColumnFromBoard();setModalAlertActive(false)}}>Да</button>
                    <button className={styles.buttonCancel} onClick={()=>setModalAlertActive(false)}>Нет</button>
                </div>
            </ModalWindow>:
            ''}
      

{modalActive?
    <ModalWindow active={modalActive} setActive={setModalActive}>
                <div className={styles.wrapperHeaderNewCard}>
                    <Icons name='dot' color={column.color} size='24px'/>
                    <h2>Новая задача</h2>
                </div>
              <form action="" onSubmit={handleSubmit}>
                <Field
                placeholder = 'Введите заголовок...'
                value = {nameTask}
                onChange = {e => setNameTask(e.target.value)}
                required
                isFocused={true}/>
                <Field
                placeholder = 'Введите текст задачи...'
                value = {textTask}
                onChange = {e => setTextTask(e.target.value)}
                typeInput='textarea'
                required/>
                <div className={styles.wrapperSubTasksNewCard}>
                    <div className={styles.subTasks}></div>
                    {currentArraySubTasks.map((task,id)=>(
                        <div >{id+1}. {task}</div>
                    ))}
                    <div className={styles.subTasksField}>
                    <Field
                placeholder = 'Введите подзадачу...'
                value = {SubTask}
                onChange = {e => setSubTask(e.target.value)}
                />
                <button onClick={()=>((SubTask!=='')?setCurrentArraySubTasks([...currentArraySubTasks, SubTask]):'')}>+</button>
                
                    </div>
                </div>
                <div className={styles.wrapperFooterNewCard}> 
                <Select
                        classNamePrefix='select'
                        placeholder='Выберите тэг'
                        title='тэги'
                        options={
                            DataTags.map(tag=>({
                                value: tag.id,
                                label: tag.name,
                            }))}
                        isSearchable={false}
                        styles={colourStyles}
                        isClearable={true}
                        //menuIsOpen={true}
                        //value={currentTag}
                        onChange={setCurrentTag}
                        isMulti={false}
                        required
                    />
                <ButtonAdd text='Добавить' callback={()=>{if(nameTask!==''&&textTask!==''&& currentTag?.value){AddTask(nameTask, textTask, currentTag.value, currentArraySubTasks);setModalActive(false)}}}></ButtonAdd>
                </div>
                
            </form>
            </ModalWindow>:
            ''}
              
        </div>
    )
}
export default GroupCards;