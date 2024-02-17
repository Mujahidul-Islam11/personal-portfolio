import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Projects from './Components/Projects/Projects.jsx';
import AboutMe from './Components/AboutMe/AboutMe.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Main from './LayOut/Main.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/Login",
        element: <Login></Login>
      },
      {
        path: "/Reg",
        element: <Register></Register>
      },
      {
        path: "/Pro",
        element: <Projects></Projects>
      },
      {
        path: "/About",
        element: <AboutMe></AboutMe>
      },
      {
        path: "/Contact",
        element: <Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
