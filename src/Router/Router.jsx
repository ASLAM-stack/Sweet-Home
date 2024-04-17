import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../MainLayout/MainLayOut";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";

  const router = createBrowserRouter([
    {
      path: "/",
      element:  <MainLayOut></MainLayOut>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
  ]);

export default router;