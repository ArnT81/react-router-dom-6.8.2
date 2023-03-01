import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
//  COMPONENTS
import Home from './components/Home';
import Users from './components/Users';
import DisplaySingleUser from './components/DisplaySingleUser';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "users",
    element: <Users />,
    loader: async () => {
      return fetch("https://jsonplaceholder.typicode.com/users")
    }
  },
  {
    path: "users/:id",
    element: <DisplaySingleUser />,
    loader: async ({ params }) => {
      return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    }
  },
]);

/*//! FROM ELEMENTS 
export const createRoutes = () =>
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="users" element={<Users />} />
      <Route path="users/:id" element={<DisplaySingleUser />} />
    </>
  );

const createRouter = () => createBrowserRouter(createRoutes());
const router = createRouter(); */

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);