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
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (response.status !== 200) {
        return { error: response.statusText }
      } else {
        return await response.json();
      }
    }
  },
  {
    path: "users/:id",
    element: <DisplaySingleUser />,
    loader: async ({ params }) => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
      if (response.status !== 200) {
        return { error: response.statusText }
      } else {
        return await response.json();
      }
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