import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile"

import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom"; // ✅ Use react-router-dom

const currentUser = true;
const Layout = () =>{
  return(
    <div>
      <Navbar/>
      <div style={{display:"flex"}}>
        <Leftbar/>
        <Outlet/>
        <Rightbar/>
      </div>
      
    </div>
  )
}
 
const ProtectedRoute = ({children})=>{
  if(!currentUser){
    return <Navigate to="/login"/>
  }
  return children
}

const router = createBrowserRouter([

  {
    path: "/",
    element:<ProtectedRoute>
       <Layout/>
      </ProtectedRoute> ,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/profile/:id",
        element:<Profile/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
