import Projects from "./components/pages/Projects/Projects";
import Home from "./components/pages/Home/Home";
import Board from "./components/pages/Board/Board";

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        auth: false
    },
    {
        path: '/projects',
        exact: false,
        component: Projects,
        auth: false
    },
    {
        path: '/projects/board',
        exact: false,
        component: Board,
        auth: false
    },
    
];