import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffe from './components/AddCoffe.jsx';
import UpdateCoffe from './components/UpdateCoffe.jsx';
import Signin from './components/Signin.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Users from './components/Users.jsx';
import ToDo from './components/ToDo.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch ("http://localhost:5000/coffee")
  }, 
   {
    path: "/addCoffee",
    element: <AddCoffe></AddCoffe>,
  }, 
   {
    path: "/updateCoffee/:id",
    element: <UpdateCoffe></UpdateCoffe>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: '/signin',
    element: <Signin></Signin>
  },
  
  {
    path: '/signup',
    element: <SignUp></SignUp>
  }, 
  
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch("http://localhost:5000/users")
  }, 

  {
    path: '/todo',
    element: <ToDo></ToDo>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
