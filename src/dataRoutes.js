import Projects from "./components/pages/Projects/Projects";
import Home from "./components/pages/Home/Home";
import Board from "./components/pages/Board/Board";
import Timer from "./components/pages/Timer/Timer";
import Calendar from "./components/pages/Calendar/Calendar";
import Statistic from "./components/pages/Statistic/Statistic";
import Chat from "./components/pages/Chat/Chat";
import About from "./components/pages/About/About";

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
        path: '/projects/:id',
        exact: false,
        component: Board,
        auth: false
    },
    {
        path: '/timer',
        exact: false,
        component: Timer,
        auth: false
    },
    {
        path: '/calendar',
        exact: false,
        component: Calendar,
        auth: false
    },
    {
        path: '/statistic',
        exact: false,
        component: Statistic,
        auth: false
    },
    {
        path: '/messages',
        exact: false,
        component: Chat,
        auth: false
    },
    {
        path: '/about',
        exact: false,
        component: About,
        auth: false
    },
    
];