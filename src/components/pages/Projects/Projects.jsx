import Layout from "../../common/Layout/Layout.jsx";
import Header from '../../common/Header/Header.jsx';
import styles from './Projects.module.scss'
import {DataPro} from '../data.js';
import cn from 'classnames';
import { useNavigate, useParams } from "react-router-dom";
import Icons from "../../common/Layout/LayoutSVG.jsx";
import AllTime from "./AllTime.jsx";
import Team from "./Team.jsx";

const Projects = ({children}) =>{
    const idParam=useParams();
 const navigate = useNavigate();
const drawProjectsButton=()=>{
   return <div className={styles.WrapperProjectButton}>
    <span>Проекты</span>
    <div className={styles.containerProjectButton}>
   {DataPro.map((project, index)=>(
        <button 
        key={index} 
        className={cn({
            [styles.activeButtonProjectsMenu]:project.idProject === idParam.id
                })}
        onClick={()=>{navigate('../projects/'+project.idProject)}}>{project?.nameProject}
        <div className={styles.ButtonInfo} onClick={()=>{console.log('he3')}}>
    <Icons name="info" color={(project.idProject === idParam.id)?"#fff":"#c1bfbf"} size="24px"/>
    </div>
        </button>
     ))}
     </div>
     </div>
};
    return (

        <Layout>
             
            <div className={styles.projectsWrapper}>
            <div className={styles.projectsMenu}>
                
                {drawProjectsButton()}
                <Team projectID={idParam.id}></Team>
                <AllTime></AllTime>
                <div className={styles.buttonAddProject}><button>+ Добавить проект</button></div>
            </div>
            <div style={{width:'100%'}} className={styles.projectsContent}>
                <Header/>
                {children?children:<h2 style={{color: 'gray', width: "100%", textAlign: "center" }}>Пожалуйста, выберите проект</h2>}
            </div>
            </div>
            </Layout>

        
    );
};

export default Projects;