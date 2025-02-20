import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";
const Main=lazy(()=>import ( "../Components/Pages/Main")) ;
import Aboutme from "../Components/ui/About me/Aboutme";
import Resume from "../Components/ui/Resume/Resume";

import Loading from "../Components/ui/Loading";
import ProjectDetails from "../Components/ui/Projects/ProjectDetails";

export const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<Suspense fallback={<Loading/>}><Main/></Suspense>,
          children:[
            {
                path:'aboutme',
                element:<Aboutme/>
            },
            {
              path:'resume',
              element:<Resume/>
            },
            {
              path:'projects',
              element:<ProjectDetails/>
            }
          ]
        }
    ]
)