import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componants/Routs/Root.jsx';
import Home from './componants/Home/Home.jsx';
import Dashboard from './componants/Dashboard/Dashboard.jsx';
import Dtails from './componants/DtailsCard/Dtails.jsx';
import Help from './componants/Home/Help.jsx';
import Statistics from './componants/Statistics/Statistics.jsx';
import ErrorPage from './componants/ErrorPage/ErrorPage.jsx';



const router = createBrowserRouter([

  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/catagory.json')

      },
      {
        path: '/stat',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/catagory.json')
      },
      {
        path: '/help',
        element: <Help></Help>
      },
      {
        path: '/dtails/:productId',
        element: <Dtails></Dtails>,
        loader: () => fetch('/catagory.json')
      }




    ]

  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
