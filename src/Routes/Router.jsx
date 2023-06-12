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
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import AddClass from "../Pages/Dashboard/Instructor/AddClass";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";

import Feedbackform from "../Pages/Home/Feedbackform";
import ErrorPage from "../ErrorPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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

      },
      {
        path:'/reviews',
        element: <Feedbackform></Feedbackform>
      }
    ]
  },
  {
    path: 'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'selectedclasses', 
        element:<PrivateRoute><SelectedClass></SelectedClass></PrivateRoute>
      },
      {
        path:'myenrolledclasses',
        element:<PrivateRoute><EnrolledClass></EnrolledClass></PrivateRoute>
      },
      {
        path:'paymenthistory',
        element:<PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
      },
      {
        path:'manageusers',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>

      },
      {
        path:'addedclass',
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path:'manageclasses',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>

      },
      {
        path:'payment/:id',
        element: <Payment></Payment>
        
      }

    ]
  }

  
]);