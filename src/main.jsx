import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './screens/Login.jsx'
import Dashboard from './screens/Dashboard.jsx'
import Registration from './Screens/Registration.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App/>,
  },
  {
    path: "/login",
    element:  <Login/>,
  },
  {
    path: "/dashboard",
    element:  <Dashboard/>,
  },
  ,
  {
    path: "/register",
    element:  <Registration/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
