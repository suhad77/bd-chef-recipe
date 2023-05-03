import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Shared/Login/Login/Login";
import Blog from "../Pages/Blog/Blog";
import Register from "../Shared/Login/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
          path:'/blog',
          element:<Blog />
        }
      ]
    },
  ]);

  export default router;