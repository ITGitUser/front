import React from "react";
import Icons from "../../common/Layout/LayoutSVG";
import styles from './SubTasks.module.scss';
import cn from 'classnames';
const SubTasks=({objectSubTasks, type})=>{
    let count=0;
    for (let i = 0; i < objectSubTasks?.arrayTasks?.length; i++) {
        if(objectSubTasks.arrayTasks[i].done===true){count++}
        
    }
   
const drawTasks=()=>{
    if (type==='small'&&(objectSubTasks.arrayTasks.length)!==0) {
       
            return(<div className={cn({ 
                [styles.activeWrapperSubTasks]:objectSubTasks?.done===true
                    }, styles.wrapperSubTasks)}>
                <Icons name="Список" color={(objectSubTasks?.done===true)?"#6caa9f":"#9a9c9e"} size="15px"/>
                <span>{count}/{objectSubTasks?.arrayTasks?.length}</span>
            </div> );
    
}
else if(type==="open"&&(objectSubTasks.arrayTasks.length)!==0){
return(
    <div>
        <form >
            {objectSubTasks?.arrayTasks.map((subTask, id)=>{
                return (
                   <div key={id}>
                    <label>
                    {subTask.done?
                    <input  type="checkbox" name={subTask.name} value="a2" checked onChange={()=>{}}/>:
                    <input type="checkbox" name={subTask.name} value="a2"/>}
                    
                    {subTask.name}
                    </label>
                   </div>
                
                  
                )
            })}

  </form>
    </div>
)
}
}


    return(
        drawTasks()
    );
}

export default SubTasks;    