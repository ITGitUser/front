import { useEffect, useState } from 'react';
import styles from './Board.module.scss'
import GroupCards from '../../common/GroupCards/GroupCards.jsx';
import {DataPro} from '../data.js';
import { CirclePicker } from "react-color";
import cn from 'classnames'
import ProgressBar from '../../ui/ProgressBar/ProgressBar';
import ButtonAdd from '../../ui/ButtonAdd/ButtonAdd';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { useParams } from 'react-router-dom';
import Projects from '../Projects/Projects';
import Icons from '../../common/Layout/LayoutSVG';
import AvatarUsers from '../../ui/AvatarUsers/AvatarUsers';
import ModalWindow from '../../common/ModalWindow/ModalWindow';
import Field from '../../ui/Field/Field';

const Board = () =>{
  const idParam=useParams();
  const [boardData, setBoardData] = useState(DataPro.find(project => (project.idProject ===idParam.id)));
 const [activeMenu, setActiveMenu]=useState(1);
 const[modalActive, setModalActive]=useState(false);
 const[nameColumn, setNameColumn]=useState('');
 const [color, setColor] = useState("#aabbcc");
 const [activeViewButton, setActiveViewButton]=useState(parseInt(localStorage.getItem("activeViewButtonIndex_Board"))); 
 const[progress, setProgress]=useState(0);
 const[flexDirection, setFlexDirection]=useState(localStorage.getItem("flexDirectionForWrapperCards_Board"));
 
 const changeStyle = (num, idDropAreaEnd, idDropAreaStart, index, sourceIndex) => {
  //const elements = document.querySelectorAll('[data-rfd-placeholder-context-id]');
  const elementDropableAreaEnd = document.querySelector(`[data-rfd-droppable-id="${idDropAreaEnd}"]`);
  const elementDragableEnd = elementDropableAreaEnd.querySelector('[data-rfd-placeholder-context-id=":r1:"]');
  const elementDivIntoDragEnd=elementDropableAreaEnd.querySelectorAll('[data-rfd-draggable-context-id=":r1:"]')
  const elementDropableAreaStart = document.querySelector(`[data-rfd-droppable-id="${idDropAreaStart}"]`);
  const elementDragableStart = elementDropableAreaStart.querySelector('[data-rfd-placeholder-context-id=":r1:"]');
    

    elementDragableEnd.style.border='1px dashed gray';
    elementDragableEnd.style.borderRadius='10px';
    //логика для для отрисовки плэйсхолдера при перемещении между колонками
    if(idDropAreaEnd!== idDropAreaStart){
      let countHeight=0;
      for (let i = elementDivIntoDragEnd.length-1; i >= index; i--) {
        countHeight=countHeight+elementDivIntoDragEnd[i].clientHeight+11.5;
        
      }
      elementDragableEnd.style.transform=`translate(0, ${(-countHeight)}px)`;
      elementDragableStart.style.backgroundColor = 'transparent';
      elementDragableStart.style.border='none';
    }
    //логика для отрисовки плэйсхолдера при перемещении внутри одной колонки
    else{
      const newArrayDiv=[...elementDivIntoDragEnd];
      newArrayDiv.splice(sourceIndex,1);
      let countHeight=0;
      for (let i = newArrayDiv.length-1; i >= index; i--) {
        countHeight=countHeight+newArrayDiv[i].clientHeight+11.5;
        
      }
      elementDragableEnd.style.transform=`translate(0, ${(-countHeight)}px)`;
    }
   
  
};
  const flexContainerStyle = {
    display: "flex",
    flexDirection: flexDirection, // или "column" в зависимости от нужного направления
    justifyContent: "space-between"
  };

 useEffect(() => {
    let p=0;
    boardData?.columns.map((column,id)=>(
        (column.status==='done')?(p=column.taskIds.length):(p)
    ))
    setProgress(Math.round((p*100)/boardData?.cards.length));
  }, [boardData]);
  
 useEffect(()=>{
    setBoardData(DataPro.find(project => (project.idProject ===idParam.id)));
 },[idParam])
 
 useEffect(() => {
  const setStyleForWrapperCards=()=>{
    if(activeViewButton===0){
      setFlexDirection("row")
    }else if(activeViewButton===1){
  
    }else if(activeViewButton===2){
      setFlexDirection("column")
    }
   };
  localStorage.setItem("activeViewButtonIndex_Board", activeViewButton.toString());
  localStorage.setItem("flexDirectionForWrapperCards_Board", flexDirection);
  setStyleForWrapperCards();
}, [activeViewButton, flexDirection]);


const drawButton=(array, type)=>{
    let buttons=[];
    for (let i = 0; i < array.length; i++) {
        if (type==='menu') {
            buttons.push(<button key={i} className={cn({
                [styles.active]:activeMenu === i
            })} onClick={()=>{setActiveMenu(i)}}>{array[i]}</button>)
        }else if(type==='view'){
            buttons.push(<button key={i} className={cn({
                [styles.active]:activeViewButton === i
            })} onClick={()=>{setActiveViewButton(i)}}>
              <Icons name={array[i]} color={(activeViewButton === i)?"#365EFD":"black"} size="20px"/>
              {array[i]}</button>) 
        }
    }
    return buttons;
};



const AddColumnOnBoard=(name)=>{
  let newArrayBoardData=boardData.columns;
  
  newArrayBoardData.push({
                id: Date.now().toString(),
                name: name,
                color: color,
                status: name,
                taskIds: [],
  });

  const newBoard = {
    ...boardData,
    columns: [
      ...newArrayBoardData
    ],
    }

  setBoardData(newBoard);

};
const drawGroupCards=()=>{
  let t= activeViewButton===0?'row':'column';
  return <div style={flexContainerStyle} className={styles.wrapperCards}> 
  {boardData?.columns?.map((column,i)=>(
    
    <Draggable  key={column.id} draggableId={column.id} index={i}>
      
    {(provided, snapshot) => (
      <div
      className={styles.wrapperDragableCard}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={{
          background: snapshot.isDragging ? 'rgb(237, 241, 253)' : '',
          ...provided.draggableProps.style,
        }}
        
      >
        
<GroupCards column={column} colID={column.id} board={boardData} refreshBoard={setBoardData} index ={i} type={t}/>
</div>)}
      </Draggable>

))
}
</div>}

const handleSubmit = e => {
  e.preventDefault();
};
const handleChangeComplete = (color) => {
  setColor(color.hex);
};
const onDragEnd = (result) => {
    //куда, откуда, что
    const { destination, source, draggableId, type } = result;
  
  if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
 
  //droppableId-области, в которые можно опускать перетаскиваемые элементы.
  //draggableId- отдельные элементы, которые можно перетаскивать.
  if(type==='CARD'){
    const newColumns = [...boardData.columns];
    const sourceColumn = newColumns.find(column => column.id === source.droppableId);
    const destinationColumn = newColumns.find(column => column.id === destination.droppableId);
    const card = sourceColumn.taskIds.find(card => card === draggableId);
      sourceColumn.taskIds.splice(source.index, 1);
      destinationColumn.taskIds.splice(destination.index, 0, card);
   
    const newBoardData = {
      ...boardData,
      columns: [
        ...newColumns
      ],
  }
  setBoardData(newBoardData);
}
if (type === 'COLUMN') {
  const newColumns = [...boardData.columns];
  const column = newColumns.splice(source.index, 1);
  newColumns.splice(destination.index, 0, column[0]);

  const newBoardData = {
    ...boardData,
    columns: [
      ...newColumns
    ],
}
setBoardData(newBoardData);

 
}
  };

  const onDragUpdate = (update) => {
    const { destination, type, source } = update;
    
    // Проверяем, есть ли объект destination
    if (destination) {
      if(type==='CARD'){
        const draggedIndex = destination.index;
      const draggedDroppableId = destination.droppableId;
      const draggedDroppableIdStart = source.droppableId;
      
      const currentNum=boardData.columns.find((col)=>col.id===draggedDroppableId).taskIds.length-draggedIndex;
      changeStyle( currentNum, draggedDroppableId, draggedDroppableIdStart, draggedIndex, source.index);
      // Вы можете выполнить нужные вам действия с полученными значениями
      }
      
    }
    
  };


   return (
      <Projects>
        <div className={styles.wrapperBoard}>
          {(boardData)?
            (
            <div className={styles.HeaderBoard}>
              
                <div className={styles.menu1}>
                    <div><ProgressBar name={boardData?.nameProject} progress={progress}/></div>
                    <div className={styles.menuButton}>
                        {drawButton(['Обзор', 'Задачи', 'Заметки', 'Вопросы'], 'menu')}
                    </div>
                </div>
                <div className={styles.menu2}>
                    <div className={styles.wrapperButtonAddAndUsers}>
                    <AvatarUsers count={5} arrayUsersId={boardData.users}/>
                    <div className={styles.ButtonAddMembers}><ButtonAdd text='+ Добавить участника'/></div>
                    </div>
                    <button className={styles.buttonAddColumn} onClick={()=>{setModalActive(true)}}>+Добавить колонку</button>
                    <div className={styles.viewButton}>
                      
                        {drawButton(['Доска','Таблица','Список'], 'view')}
                        
                    </div>
                    
                </div>
            </div>):(<div className={styles.noneContent}></div>)
}{boardData&&
            
            <DragDropContext onDragUpdate={onDragUpdate}  onDragEnd={onDragEnd}>
            <Droppable droppableId={boardData.idProject} direction={activeViewButton!==2?'horizontal':'vertical'} type="COLUMN">
           {(provided, snapshot) => (
             <div
               ref={provided.innerRef}
               {...provided.droppableProps}
               
               style={{ display:'flex', flexDirection:activeViewButton!==2?'row':'column',  width:'100%', background: 'rgb(247, 247, 247)'}}
             >
             
             {drawGroupCards()}
             {provided.placeholder}
            
           </div>
         )}
       </Droppable>
           

                </DragDropContext>
            
}
        </div>
        <ModalWindow  active={modalActive} setActive={setModalActive}>
          
            <h2 style={{margin: '0 0 15px 0'}}>Новая колонка</h2>
          
          <form action="" onSubmit={handleSubmit}>
          <Field
                placeholder = 'Введите название новой колонки...'
                value = {nameColumn}
                onChange = {e => setNameColumn(e.target.value)}
                required
                isFocused={true}
                />
                <CirclePicker width="100%" color={color} onChangeComplete={handleChangeComplete }  />
                <button className={styles.buttonConfirm} onClick={()=>(nameColumn!==''?(AddColumnOnBoard(nameColumn), setModalActive(false)):'')}>Добавить</button>
          </form>
        </ModalWindow>
        </Projects>
        
    );
};

export default Board;