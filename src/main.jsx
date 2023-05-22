import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main.jsx';
import Header from './Header/Header.jsx';
import Home from './Home/Home.jsx';
import JobDetails from './JobDetails/JobDetails.jsx';
import Applyed from './Applyed/Applyed.jsx';
import Chat from './Chat/Chat.jsx';
import Features from './Features/Features.jsx';
import Blog from './Blog/Blog.jsx';
import Apply from './Apply/Apply.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/Apliy",
        element:<JobDetails></JobDetails>
      },
      {
        path: "/AppliedJobs",
        element: <Applyed></Applyed>
      },
      {
        path:"/Statistics",
        element:<Chat></Chat>
      },
      {
        path: "/Blog",
        element:<Blog></Blog>
      },
      {
        path: "/chat",
        element:<Chat></Chat>
      },
      {
        path: "/start",
        element:<Features></Features>
      },
      {
        path: "/viewabar",
        element:<Apply></Apply>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
