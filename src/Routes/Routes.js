import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Catagory from "../pages/Catagory";
import Home from "../pages/Home";
import Login from "../pages/Login";
import News from "../pages/News";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Terms from "../pages/Terms";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/news'),
                element: <Home></Home>
            },
            {
                path: '/catagory/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/catagory/${params.id}`),
                element: <Catagory></Catagory>
            },
            {
                path: '/news/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`),
                element: <PrivateRoute><News></News></PrivateRoute>,

            },
            {
                path: '/login',

                element: <Login></Login>,

            },
            {
                path: '/register',

                element: <Register></Register>,

            },
            {
                path: '/terms',

                element: <Terms></Terms>,

            },
            {
                path: '/profile',

                element: <PrivateRoute><Profile></Profile></PrivateRoute>,

            },
        ]

    }
])