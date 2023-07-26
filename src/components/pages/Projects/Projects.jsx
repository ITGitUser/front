import Layout from "../../common/Layout/Layout.jsx";
import Header from '../../common/Header/Header.jsx';
import Board from '../../pages/Board/Board.jsx';
import styles from './Projects.module.scss'
import {DataPro} from '../data.js';
import { useState } from "react";

const Projects = () =>{
 const[activeProject, setActiveProject]=useState();


    return (
       
        <Layout>
             
            <div className={styles.projectsWrapper}>
            <div className={styles.projectsMenu}>
                <h2>Проекты</h2>
                <div><button onClick={()=>{setActiveProject(DataPro[0])}}>{DataPro[0]?.nameProject}</button></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.projectsContent}>
                <Header/>
                <Board bData={activeProject}/>
            </div>
            </div>
            </Layout>
        
    );
};

export default Projects;