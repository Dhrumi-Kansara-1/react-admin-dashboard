import Home from "./Pages/Home";
import Login from "./Pages/Login";
import List from "./Pages/List"
import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom";
import Single from "./Pages/Single";
import New from "./Pages/New";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  }, 
  {
    path: "users",    
    children: [ 
       {
        index: true,
        element: <List />,
       },
       {
        path: "new",
        element: <New />,
       },
       {
        path: ":userId",
        element: <Single />,
       },
    ],
  },
  {
    path: "products",    
    children: [ 
       {
        index: true,
        element: <List />,
       },
       {
        path: "new",
        element: <New />,
       },
       {
        path: ":productId",
        element: <Single />,
       },
    ],
  },
]);

function App() { 

  return (
    <>
       <RouterProvider router={router} />
    </>
  );
}

export default App;
