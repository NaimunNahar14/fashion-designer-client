import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Classes from "../Pages/Classes";
import Instructors from "../Pages/Instructors/Instructors";


 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/classes',
          element: <Classes></Classes>
        },
        {
          path:'/instructors',
          element: <Instructors></Instructors>
        }
      ]
    },
  ]);