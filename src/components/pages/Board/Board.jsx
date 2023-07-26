import { useEffect, useState } from 'react';
import styles from './Board.module.scss'
import GroupCards from '../../common/GroupCards/GroupCards.jsx';
//import {Data} from '../data.js';
import cn from 'classnames'
import ProgressBar from '../../ui/ProgressBar/ProgressBar';
import ButtonAdd from '../../ui/ButtonAdd/ButtonAdd';
//import { onDragEnd } from '../dndHandler';
import { DragDropContext } from '@hello-pangea/dnd';
const Board = ({bData}) =>{
  const [boardData, setBoardData] = useState(bData);
 const [activeMenu, setActiveMenu]=useState(1);
 const [activeViewButton, setActiveViewButton]=useState(0); 
 const[progress, setProgress]=useState(0);

 useEffect(() => {
    let p=0;
    boardData?.columns.map((column,id)=>(
        (column.status==='done')?(p=column.taskIds.length):(p)
    ))
    setProgress(Math.round((p*100)/boardData?.cards.length));
  }, [boardData]);
console.log('b1');
console.log(bData);
console.log('b2');
console.log(boardData);
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
            })} onClick={()=>setActiveViewButton(i)}>{array[i]}</button>) 
        }
    }
    return buttons;
};

const onDragEnd = (result) => {
    //куда, откуда, что
    const { destination, source, draggableId } = result;
  
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
  let startColumn, indexCol, endColumn, indexDestinationCol;
  for (let i = 0; i < boardData.columns.length; i++) {
   if(boardData.columns[i].status===source.droppableId){
    startColumn=boardData.columns[i];
    indexCol=i;
   }  
  }
  for (let i = 0; i < boardData.columns.length; i++) {
    if(boardData.columns[i].status===destination.droppableId){
        endColumn=boardData.columns[i];
        indexDestinationCol=i;
       }
  }
  const newColumns= [
    ...boardData.columns,
];
//логика для dnd внутри блока
  if( destination.droppableId === source.droppableId){
    const TaskIds=Array.from(startColumn.taskIds);
    TaskIds.splice(source.index, 1);
    TaskIds.splice(destination.index, 0, draggableId);
    const newSourceColumn = {
        ...startColumn,
        taskIds: TaskIds,
      }
      newColumns.splice(indexCol, 1, newSourceColumn);
}
//логика для dnd между блоками
else{
    const oldTaskIds=Array.from(startColumn.taskIds);
    oldTaskIds.splice(source.index, 1);
    console.log(oldTaskIds);
    const newSourceColumn = {
        ...startColumn,
        taskIds: oldTaskIds,
      }

    const newTaskIds = Array.from(endColumn.taskIds);
    newTaskIds.splice(destination.index, 0, draggableId);
    console.log(newTaskIds);
    const newDestinationColumn = {
        ...endColumn,
        taskIds: newTaskIds,
      };
      newColumns.splice(indexCol, 1, newSourceColumn);
      newColumns.splice(indexDestinationCol, 1, newDestinationColumn);
}

      const newBoardData = {
        ...boardData,
        columns: [
          ...newColumns
        ],
    }
    setBoardData(newBoardData);
    
  };

   return (
    
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
                    <div className={styles.ButtonAddMembers}><ButtonAdd text='+ Добавить участника'/></div>
                    <div className={styles.viewButton}>
                        {drawButton(['Доска','Таблица','Список'], 'view')}
                    </div>
                </div>
            </div>):(<div className={styles.noneContent}></div>)
}{boardData&&
            <div className={styles.wrapperCards}> 
            <DragDropContext onDragEnd={onDragEnd}>
              
                {boardData?.columns?.map((column,id)=>(
                    <GroupCards key={id} column={column} board={boardData} refreshBoard={setBoardData} index ={id}/>
                ))}
                </DragDropContext>
            </div>
}
        </div>
        
    );
};

export default Board;