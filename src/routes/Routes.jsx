import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard/Dashboard";
import UserProfile from "../layout/Dashboard/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoutes";
import AddTask from "../layout/Dashboard/AddTask/AddTask";
import AllTask from "../layout/Dashboard/AllTask/AllTask";
import Todo from "../layout/Dashboard/Todo/Todo";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
      ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            
            {
                path:'addtask',
                element:<AddTask></AddTask>
              },
            {
                path:'alltask',
                element:<AllTask></AllTask>
              },
            {
                path:'todo',
                element:<Todo></Todo>
              },
        ]
    }
  ]);