import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import DashBoard from "../DashBoard/DashBoard";
import DataAssets from "../DataAssests/DataAssets";
import Education from "../Education/Education";
import Analysis from "../Analysis/Analysis";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";
import EOSDIS from "../EOSDIS/EOSDIS";
import NasaEarthScience from "../NasaEarthScience/NasaEarthScience";
import AtmosphericComposition from "../AtmosphericComposition/AtmosphericComposition";
import Weather from "../Weather/Weather";
import Climate from "../Climate/Climate";
import WaterandEnergyCycle from "../WaterandEnergyCycle/WaterandEnergyCycle";
import CarbonCycleandEcosystems from "../CarbonCycleandEcosystems/CarbonCycleandEcosystems";


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
            {
                path: '/eosdis',
                element: <EOSDIS></EOSDIS>
            },
            {
                path: '/nasaEarthScience',
                element: <NasaEarthScience></NasaEarthScience>
            },
            {
                path: '/astronomical',
                element: <AtmosphericComposition></AtmosphericComposition>
            },
            {
                path: '/weather',
                element: <Weather></Weather>
            },
            {
                path: '/climate',
                element: <Climate></Climate>
            },
            {
                path: '/waterandEnergyCycle',
                element: <WaterandEnergyCycle></WaterandEnergyCycle>
            },
            {
                path: '/climate',
                element: <Climate></Climate>
            },
            {
                path: '/carbon',
                element: <CarbonCycleandEcosystems></CarbonCycleandEcosystems>
            },
        ]
    }
]);

export default router;