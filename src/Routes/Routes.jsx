import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Shared/Login/Login/Login";
import Blog from "../Pages/Blog/Blog";
import Register from "../Shared/Login/Register/Register";
import Home from "../Pages/Home/Home";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage />,
      children:[
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/register',
          element:<Register />
        },
        {
          path:'/',
          element: <Home />
        },
        {
          path:'/blog',
          element:<Blog />
        },
        {
          path:'/chefdetails/:id',
          element: <PrivateRoute><ChefDetails /></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
        }
      ]
    },
  ]);

  export default router;