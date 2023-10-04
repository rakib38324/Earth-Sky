import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import DashBoard from "../DashBoard/DashBoard";
import DataAssets from "../DataAssests/DataAssets";
import Education from "../Education/Education";
import Analysis from "../Analysis/Analysis";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";


const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children: [
           
            {
                path: '/',
                element: <DashBoard></DashBoard>
            },
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            },
            {
                path: '/dataAssets',
                element: <DataAssets></DataAssets>
            },
            {
                path: '/education',
                element: <Education></Education>
            },
            {
                path: '/analysis',
                element: <Analysis></Analysis>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
        ]
    }
]);

export default router;