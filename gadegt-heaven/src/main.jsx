import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componants/Routs/Root.jsx';
import Home from './componants/Home/Home.jsx';
import Dashboard from './componants/Dashboard/Dashboard.jsx';
import Dtails from './componants/DtailsCard/Dtails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        
      },
      
      {
        path:'/statistic',
        element:<daas></daas>
      },

      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/dtails/:productId',
        element:<Dtails></Dtails>,
        loader:()=>fetch('./catagory.json')
      }
     

    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
