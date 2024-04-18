import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UserProfile from "../Pages/UserProfile/UserProfile";
import PrivateROute from "../protected/PrivateROute";
import EstateDetails from "../Estate_Details/EstateDetails";
import ErrorPage from "../Error/ErrorPage";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Sponsor from "../Sponsor/Sponsor";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [{
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/user',
            element: <PrivateROute><UserProfile></UserProfile></PrivateROute>,
                
            
        },
      
        {
            path: '/details/:id',
            element:<PrivateROute><EstateDetails></EstateDetails></PrivateROute>
        },{
            path: '/update',
            element:<PrivateROute><UpdateProfile></UpdateProfile></PrivateROute>
        },{
            path: '/contact',
            element:<ContactUs></ContactUs>
        },{
            path:'/sponsor',
            element:<Sponsor></Sponsor>
        }

        ]
    },
]);

export default router