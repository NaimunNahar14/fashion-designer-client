import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Classes from "../Pages/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup";
import Dashboard from "../Layout/Dashboard";
import SelectedClass from '../Pages/Dashboard/SelectedClass';
import EnrolledClass from "../Pages/Dashboard/EnrolledClass";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:"/signup",
        element: <Signup></Signup>

      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'selectedclasses', 
        element:<SelectedClass></SelectedClass>
      },
      {
        path:'myenrolledclasses',
        element:<EnrolledClass></EnrolledClass>
      },
      {
        path:'paymenthistory',
        element:<PaymentHistory></PaymentHistory>
      }
    ]
  }

  
]);